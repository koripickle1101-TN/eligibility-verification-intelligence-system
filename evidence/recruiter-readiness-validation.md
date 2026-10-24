# EVIS evidence validation and recruiter-readiness review

Status: working draft on a review branch. All records are fictional. This is not healthcare employment or payer verification.

## Evidence inventory

- 12-case administrative queue: data/patient-access-work-queue-12-synthetic-cases.csv
- Reviewer guide: evidence/patient-access-queue-reviewer-guide.md
- 30-case modeled comparison: data/demographic-eligibility-control-simulation.csv
- Five-case illustrative risk sample: data/sample-eligibility-cases.csv
- Risk calculator: eligibility-risk-calculator.html
- Monthly report: monthly-eligibility-quality-report.html

## Verified twelve-case counts (reporting date October 20, 2026)

Total: 12; Closed: 7; Open: 3; Escalated: 2; unresolved: 5.
Administrative closure share: 7 / 12 = 58.3%.
All five unresolved cases have follow-up dates before the reporting date; therefore overdue unresolved = 5.
All seven modeled closures have closed dates on or before their follow-up due dates; modeled on-time closed share = 7 / 7 = 100%.
These figures are descriptive properties of fictional records, not actual service performance.

## Verified thirty-case arithmetic

Baseline: 6 exceptions / 15 = 40.0%; 21 downstream rework touches.
Control state: 1 exception / 15 = 6.7%; 2 downstream rework touches.
Pre-eligibility capture: 5 / 6 control-state defects = 83.3%.
The two groups have different defect mixes and are not matched counterfactuals. The assigned outcomes cannot demonstrate a causal effect, operational improvement, or expected real-world benefit.

## Evidence gaps requiring correction

1. Closure records describe fictional rechecks but do not include independent verification evidence, reviewer, source type, or timestamp. Do not claim verified operational closure.
2. Risk calculator weights total 140 if all eight conditions are checked. The weights, cutoffs, and risk labels are unvalidated teaching assumptions.
3. Five-case sample risk scores do not include source inputs sufficient to reproduce scores from the calculator.
4. Monthly report figures and targets (e.g., 81% coverage verified, 79% clean intake readiness) are not traceable to the two core CSVs; treat as illustrative placeholders until source and methodology are documented.
5. Companion Excel workbook is described but is not present in this repository; formula testing cannot be claimed.
6. README footer and Medicare heading are concatenated and need formatting repair.
7. HTML module functionality, responsive layout, accessibility, and Medicare routing logic still require execution-based testing.

## Recruiter-facing claim boundaries

Supported: student-built synthetic administrative case queue, documentation, status tracking, escalation logic, and descriptive metric calculations.
Not demonstrated: actual payer portal or EHR experience, live 270/271 transactions, real coverage determinations, denial reduction, validated predictive scoring, production deployment in a healthcare organization, or employer outcomes.

## Acceptance gates before merging

- Every displayed number is sourced to a reproducible fictional dataset or marked illustrative.
- Every modeled status is distinguished from verified real-world work.
- README prioritizes one inspectable work sample and preserves the no-PHI and no-employment disclosures.
- All links, HTML interactions, and accessibility checks are tested.
- Final diff reviewed before merging to main.

## October 24, 2026 — automated validation update

GitHub Actions workflow_dispatch run 40078060075 on portfolio-evidence-audit-2026-10 completed successfully. Job logs report PASS for synthetic data arithmetic and PASS for calculator, simulation, closure safety gate, and desktop/mobile smoke checks. The artifact evis-browser-validation-evidence (12553783714) contains 18 uploaded files including browser screenshots, accessibility JSON, and server log. This is evidence of the tested branch, not independent verification of healthcare operations, exhaustive HTML module coverage, or a final production-release approval. Review remaining metric provenance, scoring assumptions, and closure evidence before publication.
