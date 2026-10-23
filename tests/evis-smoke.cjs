const fs = require('node:fs');
const assert = require('node:assert/strict');
const path = require('node:path');
const { chromium } = require('playwright');
const axeSource = require.resolve('axe-core/axe.min.js');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
function csv(input) {
  const rows = input.trim().split(/\r?\n/).map(line => {
    const out=[]; let cell='', quote=false;
    for(let i=0;i<line.length;i++){const c=line[i];if(c==='"'){if(quote&&line[i+1]==='"'){cell+='"';i++;}else quote=!quote;}else if(c===','&&!quote){out.push(cell);cell='';}else cell+=c;}
    out.push(cell);return out;
  });
  const keys=rows.shift();return rows.map(row=>Object.fromEntries(keys.map((key,i)=>[key,row[i]])));
}
const sample=csv(read('data/sample-eligibility-cases.csv'));
const sim=csv(read('data/demographic-eligibility-control-simulation.csv'));
const queue=csv(read('data/patient-access-work-queue-12-synthetic-cases.csv'));
const keys=['coverage_inactive_or_unclear','payer_mismatch','plan_type_unclear','demographic_mismatch','cob_issue','referral_unclear','authorization_trigger','patient_responsibility_not_reviewed'];
const weights=[25,20,15,15,20,15,20,10];
for(const r of sample){const score=keys.reduce((v,k,i)=>v+Number(r[k])*weights[i],0);const level=score>=61?'Critical':score>=41?'High':score>=21?'Moderate':'Low';assert.equal(score,Number(r.eligibility_risk_score),r.case_id);assert.equal(level,r.risk_level,r.case_id);}
assert.equal(sample.length,5);
const group=state=>sim.filter(x=>x.State===state);
const base=group('Baseline'),control=group('Control state');
assert.equal(base.length,15);assert.equal(control.length,15);
assert.equal(base.filter(x=>x.Eligibility_Status==='Exception').length,6);
assert.equal(control.filter(x=>x.Eligibility_Status==='Exception').length,1);
assert.equal(control.filter(x=>x.Caught_Pre_Eligibility==='Yes').length,5);
assert.equal(base.reduce((a,x)=>a+Number(x.Rework_Touches),0),21);
assert.equal(control.reduce((a,x)=>a+Number(x.Rework_Touches),0),2);
assert.equal(queue.length,12);
assert.equal(queue.filter(x=>x['Queue Status']==='Closed').length,7);
assert.equal(queue.filter(x=>x['Queue Status']==='Open').length,3);
assert.equal(queue.filter(x=>x['Queue Status']==='Escalated').length,2);
assert.equal(queue.filter(x=>x['Queue Status']!=='Closed'&&x['Follow-up Due']<'2026-10-20').length,5);
console.log('PASS: synthetic data arithmetic');
async function main(){
  const browser=await chromium.launch({headless:true});
  try{
    for(const viewport of [{width:1366,height:900},{width:390,height:844}]){
      const page=await browser.newPage({viewport});
      const errors=[];page.on('pageerror',e=>errors.push(e.message));
      await page.goto('http://127.0.0.1:8765/eligibility-dashboard.html');
      await page.locator('#data-status').getByText('Loaded and calculated',{exact:false}).waitFor();
      const evidence=await page.locator('.evidence-metric').allTextContents();
      assert.equal(evidence.length,10,'dashboard metric count');
      assert.match(evidence.join(' '),/58\.3%/);
      assert.match(evidence.join(' '),/83\.3%/);
      assert.match(evidence.join(' '),/40\.0%/);
      assert.match(evidence.join(' '),/6\.7%/);
      assert.match(evidence.join(' '),/21/);
      assert.match(evidence.join(' '),/2/);
      assert.equal(await page.locator('.evidence-metric a[href$=".csv"]').count(),10);
      assert.ok(await page.locator('#queue').isVisible());
      assert.ok(await page.locator('#simulation').isVisible());
      const dashboardWidth=await page.evaluate(()=>({actual:document.documentElement.scrollWidth,viewport:innerWidth}));
      assert.ok(dashboardWidth.actual<=dashboardWidth.viewport+2,'dashboard horizontal overflow '+JSON.stringify(dashboardWidth));
      await page.screenshot({path:'/tmp/evis-dashboard-'+viewport.width+'.png',fullPage:true});
      await page.goto('http://127.0.0.1:8765/eligibility-risk-calculator.html');
      await page.locator('input[type=checkbox]').first().check();
      assert.match(await page.locator('#scoreOutput').innerText(),/25/);
      await page.locator('input[type=checkbox]').nth(1).check();
      assert.match(await page.locator('#scoreOutput').innerText(),/45/);
      await page.goto('http://127.0.0.1:8765/demographic-eligibility-control-simulation.html');
      await page.locator('#baseline-exception').waitFor();
      await page.waitForFunction(()=>document.querySelector('#baseline-exception')?.textContent==='40.0%');
      assert.equal(await page.locator('#control-exception').innerText(),'6.7%');
      await page.goto('http://127.0.0.1:8765/eligibility-exception-closure-control.html');
      await page.locator('#evaluateButton').click();
      assert.match(await page.locator('#gateResult').innerText(),/Review Required/);
      await page.locator('#exceptionDetected').check();
      await page.locator('#evaluateButton').click();
      assert.match(await page.locator('#gateResult').innerText(),/Exception Identified/);
      await page.locator('#category').selectOption({label:'Coverage'});
      await page.locator('#source').selectOption({label:'Registration review'});
      await page.locator('#description').fill('Fictional intake discrepancy');
      await page.locator('#nextAction').fill('Review fictional coverage source');
      await page.locator('#evidenceRequired').fill('Fictional source recheck');
      await page.locator('#owner').selectOption({label:'Simulated Patient Access Queue'});
      await page.locator('#followupDate').fill('2026-10-08');
      await page.locator('#resolutionStatus').selectOption('resolved');
      await page.locator('#resolutionAction').fill('Fictional correction completed');
      await page.locator('#resolutionDate').fill('2026-10-09');
      await page.locator('#closureVerified').check();
      await page.locator('#closureDate').fill('2026-10-10');
      await page.locator('#evaluateButton').click();
      assert.doesNotMatch(await page.locator('#gateResult').innerText(),/Modeled Gate Complete/);
      for(const id of ['ownershipConfirmed','handoffComplete','evidenceReviewed','advancementApproved']) await page.locator('#'+id).check();
      await page.locator('#evaluateButton').click();
      assert.match(await page.locator('#gateResult').innerText(),/Modeled Gate Complete/);
      await page.locator('#closureDate').fill('2026-10-07');
      await page.locator('#evaluateButton').click();
      assert.match(await page.locator('#gateResult').innerText(),/Invalid Closure Chronology/);
      for(const route of ['index.html','eligibility-dashboard.html','eligibility-risk-calculator.html','eligibility-exception-closure-control.html','demographic-eligibility-control-simulation.html','medicare-coverage-payer-routing-readiness-gate.html','sample-eligibility-cases.html']){
        await page.goto('http://127.0.0.1:8765/'+route);
        const layout=await page.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:innerWidth,heading:!!document.querySelector('h1')}));
        assert.ok(layout.heading,route+' missing h1');
        assert.ok(layout.width<=layout.viewport+2,route+' horizontal overflow '+JSON.stringify(layout));
        await page.addScriptTag({path:axeSource});
        const accessibility=await page.evaluate(async()=>await window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}}));
        const severe=accessibility.violations.filter(v=>v.impact==='critical'||v.impact==='serious');
        if(severe.length) console.error('ACCESSIBILITY',route,viewport.width,JSON.stringify(severe.map(v=>({id:v.id,impact:v.impact,count:v.nodes.length}))));
        assert.equal(severe.length,0,route+' serious/critical accessibility violations');
        await page.screenshot({path:'/tmp/evis-'+viewport.width+'-'+route.replace('.html','')+'.png',fullPage:true});
      }
      await page.goto('http://127.0.0.1:8765/index.html');
      assert.ok((await page.title()).includes('EVIS'));
      assert.equal(errors.length,0,errors.join('; '));
      await page.close();
    }
    console.log('PASS: calculator, simulation, closure safety gate, desktop/mobile smoke');
  }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
