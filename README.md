# EVIS — Eligibility Verification Intelligence System

I built EVIS as a student-developed healthcare operations project to study a problem that can look small at the front end but feel much bigger later: **what happens when inaccurate or incomplete information enters the workflow before eligibility verification?**

As I work toward my Bachelor's of Science degree in Healthcare Administration at the University of Phoenix, I am especially interested in patient access and the points where an administrative problem can become a patient problem. From the patient side, an incorrect date of birth, member ID, payer selection, or coordination-of-benefits issue may show up later as another phone call, a delayed appointment, a reschedule, billing confusion, or a request to repeat information that was already provided.

EVIS gives me a way to practice tracing those visible problems back to the first point where the workflow may have lost control.

## Why I Built EVIS

I do not have formal healthcare operations employment experience yet, so I use simulated projects to turn coursework and independent study into visible practice.

With EVIS, I wanted to move beyond treating an eligibility exception as the whole problem. An exception can be a **signal** that something earlier needs attention. The project helps me separate:

- the original failure,
- the visible signal,
- the control that might have caught the issue earlier,
- the corrective action,
- and the downstream rework created when the issue is not resolved quickly.

The question I keep coming back to is:

> **Where did the workflow first lose control?**

## What EVIS Studies

EVIS focuses on front-end patient access and eligibility workflow risks such as:

- demographic inaccuracies,
- member ID errors,
- payer-selection discrepancies,
- plan-type confusion,
- coordination-of-benefits issues,
- referral or authorization triggers,
- incomplete information,
- and unresolved eligibility exceptions.

The project does not assume that every exception has the same cause. The purpose is to practice investigating what happened earlier in the workflow instead of automatically treating the eligibility response as the original failure.

## Demographic Verification & Eligibility Exception Simulation

The main EVIS simulation uses **30 synthetic cases** to compare two modeled workflow states:

- **Baseline state:** no structured demographic verification checkpoint before eligibility.
- **Control state:** a modeled verification checkpoint intended to catch selected intake defects before eligibility becomes the first visible signal.

The 30-case synthetic set includes:

| Scenario | Cases |
|---|---:|
| Clean registration | 18 |
| DOB transposition | 4 |
| Member ID typo | 3 |
| Subscriber name discrepancy | 2 |
| Missing demographic field | 2 |
| Payer selection discrepancy | 1 |
| **Total** | **30** |

The website also compares **15 baseline cases with 15 control-state cases** to show how the same workflow can be reviewed under different modeled conditions.

## How I Think About the Control

The project separates prevention, detection, correction, and workflow gating:

1. **Structured verification** — review critical demographic and insurance information before eligibility verification.
2. **Eligibility verification** — treat a failed or unexpected response as a signal that needs investigation.
3. **Exception gate** — avoid allowing an unresolved issue to move quietly into later workflow steps.
4. **Correct and reverify** — validate the source data, correct the simulated defect, and recheck before moving forward.

This is not presented as a proven operational intervention. It is a student-designed control model used to practice workflow reasoning.

## Eligibility Exception Closure Rule™

EVIS now extends the exception gate beyond detection with an **Exception Ownership & Closure Control™**.

The core rule is:

> **An eligibility exception is not considered resolved when it is identified. It is resolved only after the exception is documented, assigned to clear ownership, acted upon, and its closure is confirmed before the workflow advances.**

The modeled workflow is:

**Detect → Review Evidence → Assign → Act → Verify → Close → Advance**

EVIS now also uses this control-gate principle:

> **A completed checkpoint is not the same as a controlled workflow state.**

A workflow may look complete at one checkpoint while an unresolved condition is still moving downstream.

Operational distinctions:

- **Detection ≠ Resolution**
- **Handoff ≠ Ownership**
- **Advancement ≠ Readiness**
- **Closure ≠ Assumption**

The control-gate questions are:

> **Before this case moves forward, is every eligibility exception documented, assigned, acted on, and verified as resolved?**

> **If the next step can begin before ownership, evidence, and closure are in place, how should an organization determine whether the actual control failure occurred during detection, the handoff, the escalation point, or the decision to let the case advance?**

If **No → Hold / Route / Escalate.**

If **Yes → Advance.**

The status logic separates:

- Verified — No Exception
- Exception Identified
- Ownership Assigned
- Resolution in Progress
- Escalation Required
- Resolution Pending Verification
- Exception Closed
- Ready for Next Workflow Step

The interactive `eligibility-exception-closure-control.html` module lets a user test this logic with fictional, no-PHI information. It does not connect to real staffing, payer, EHR, eligibility, or work-queue systems.

### Detection ≠ Resolution

A workflow can successfully identify an eligibility problem and still fail operationally if the exception is not owned, acted on, and closed.

That creates a second analytical question for EVIS:

> **What happened to every exception the verification process uncovered?**

The first control failure may not be the original eligibility problem. It may occur after the problem was correctly identified but before anyone ensured it was resolved.

## Modeled Results

The simulated comparison currently produces these values:

| Measure | Baseline | Control State |
|---|---:|---:|
| Eligibility exception rate | 40.0% | 6.7% |
| Pre-eligibility defect capture | 0% | 83.3% |
| Downstream rework rate | 40.0% | 6.7% |
| Rework touches | 21 | 2 |

These numbers are **synthetic design assumptions**. They are not healthcare benchmarks, employer results, payer outcomes, clinical results, or predictions of real-world performance.

I include them because they give me a structured way to practice comparing a baseline workflow with a proposed control state and explaining what the modeled difference means.

## What I Learned

One of the most useful lessons from building EVIS was learning to separate the **failure** from the **signal**.

At first, it is easy to look at an eligibility mismatch and treat that mismatch as the problem to fix. This simulation pushed me to ask a different question: *what entered the workflow earlier that made the exception possible?*

The Exception Ownership & Closure Control adds another layer to that reasoning: finding the signal does not mean the workflow is protected. Once an exception is detected, the process still needs visible ownership, a next action, follow-up, escalation when needed, and verified closure before progression.

That distinction matters because the patient may only see the downstream effect. The patient does not experience “demographic data quality” or “exception management” as abstract concepts. They may experience another request for information, a delay, a rescheduled service, or uncertainty about whether coverage is correct.

That patient-to-professional connection is the reason I keep studying the front end of healthcare operations.

## Portfolio Evidence

This repository includes the following student-developed artifacts:

- `index.html` — EVIS project overview
- `demographic-eligibility-control-simulation.html` — full control simulation
- `eligibility-exception-closure-control.html` — interactive exception ownership, escalation, closure-verification, and workflow-gate module
- `data/demographic-eligibility-control-simulation.csv` — synthetic dataset
- `eligibility-risk-scorecard.html` — structured eligibility-risk review
- `coverage-verification-checklist.html` — front-end verification checklist
- `patient-intake-risk-map.html` — intake failure-point map
- `eligibility-dashboard.html` — simulated KPI dashboard with access to the exception closure module
- `sample-eligibility-cases.html` — synthetic case examples
- `eligibility-risk-calculator.html` — educational risk-scoring tool
- `monthly-eligibility-quality-report.html` — simulated operational report
- `data/sample-eligibility-cases.csv` — synthetic sample data
- `career/exception-closure-interview-insight.md` — student-level interview and portfolio talking point for Detection ≠ Resolution

## What I Am Practicing Through EVIS

Through this project, I am practicing:

- Patient access workflow analysis
- Eligibility verification logic
- Demographic data-quality review
- Preventive versus detective control thinking
- Exception management
- Exception ownership and closure logic
- Evidence requirements for closure
- Handoff-versus-ownership analysis
- Workflow advancement control
- Workflow gating
- Escalation threshold thinking
- Front-end revenue cycle readiness
- Root-cause classification
- Workflow mapping
- KPI calculation using simulated data
- Synthetic data design
- Operational documentation
- Patient-centered workflow thinking
- Clear separation between simulated evidence and real-world claims

## How EVIS Fits in the Portfolio

EVIS is the first project in the workflow path I use across my healthcare operations portfolio:

**EVIS → PARCS → DPIS → SBI → Habit Audit**

- **EVIS** looks at eligibility and intake risk.
- **PARCS** looks at prior authorization workflow risk, ownership, and escalation.
- **DPIS** looks at upstream denial-prevention and claim-readiness risk.
- **SBI** asks where the first cross-workflow control loss occurred.
- **Habit Audit** looks at recurring habits that may make workflow risk more likely.

## What This Project Is — and Is Not

This is a **student-developed educational project**.

- All data and cases are synthetic.
- No protected health information (PHI) is used.
- No real patient, payer, employer, claim, EHR, or eligibility-transaction data is used.
- The project does not represent formal healthcare employment experience.
- It has not been deployed in a healthcare organization.
- I do not claim that EVIS has produced real-world cost savings, denial reductions, productivity gains, or patient outcomes.

I want the project to show how I am learning to think through eligibility and patient-access workflow problems without overstating what the evidence can support.

## Live Project

[View EVIS](https://eligibility-verification-intelligen.vercel.app/)

## Connect

- [Healthcare Operations Portfolio Hub](https://healthcare-operations-portfolio-hub.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/kori-pickle)
- [GitHub profile](https://github.com/koripickle1101-TN)

Created by Kori Pickle. Student-developed portfolio project. Synthetic data only. No PHI## Medicare Coverage & Payer Routing Readiness Gate™

EVIS now includes a premium interactive Medicare coverage-to-routing control for practicing the distinction between identifying Medicare coverage and establishing payer responsibility.

Modeled workflow:

**Medicare coverage detected → arrangement identified → effective dates verified → other coverage reviewed → COB/MSP status reviewed → primary payer established → service context checked → payer destination confirmed → open exceptions assigned → Ready to Advance**

Synthetic fields include:

- Coverage Type
- Original Medicare / Medicare Advantage arrangement
- Part A Active?
- Part B Active?
- Medicare Advantage Plan Identified?
- Part D Plan Identified?
- Coverage Effective Date
- Effective Date Verified?
- Other Insurance Present?
- COB/MSP Review Completed?
- Primary Payer Status Established?
- Authoritative Source Reviewed?
- Source / Evidence Note
- Service Context
- Expected Payer Destination
- Payer Destination Confirmed?
- Authorization / Referral Review Needed?
- Routing Evidence
- Open Exception?
- Current Owner
- Next Action
- Exception Closure Status
- Closure Evidence
- Ready to Advance? (calculated by the interactive gate)

Key distinctions:

- **Medicare coverage present ≠ payer responsibility established**
- **Correct plan identification ≠ workflow ready to advance with unresolved COB/MSP questions**
- **Coverage verified ≠ payer order verified**
- **Medicare enrolled ≠ Medicare pays first**
- **Correct coverage ≠ correct claim destination**

The gate can return modeled states such as **Arrangement Review**, **Effective Date Review**, **COB / MSP Review**, **Payer Order Hold**, **Source Review**, **Service Context**, **Routing Hold**, **Readiness Exception**, **Exception Control**, and **Ready to Advance**.

The module also supports local browser persistence and saved synthetic review history so a reviewer can resume a fictional payer-routing case without uploading data.

Patient-to-professional insight:

> **The patient sees the billing problem. Healthcare operations has to determine whether the coverage and payer-routing workflow was correct before the claim ever moved downstream.**

Real-world Medicare handling requires current authoritative CMS/Medicare information, payer/program guidance, organizational procedures, and qualified review when applicable. EVIS does not determine real eligibility, coverage, benefits, COB/MSP status, payer liability, authorization requirements, coding, medical necessity, reimbursement, or legal/compliance conclusions.

.