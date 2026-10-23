# EVIS metrics and scoring methodology

This document describes student-created fictional demonstrations. None of the records comes from an employer, patient, payer portal, EHR, or production eligibility service.

## Twelve-case administrative queue

Source: [fictional queue CSV](../data/patient-access-work-queue-12-synthetic-cases.csv).
Reporting date: October 20, 2026.

- Denominator: all 12 case IDs.
- Closed: 7 / 12 = 58.3% of cases.
- Open: 3 / 12 = 25.0%.
- Escalated: 2 / 12 = 16.7%.
- Unresolved: Open + Escalated = 5 / 12 = 41.7%.
- Overdue unresolved: 5 cases where status is not Closed and follow-up due date is before October 20, 2026.
- Modeled on-time closure: 7 of 7 Closed cases have a Closed Date on or before Follow-up Due. This is not a verified service-level performance measure.
- Queue age: calendar days from Intake Date to October 20, 2026, for unresolved cases. This is a fixed-date snapshot, not a live dashboard.

A Closed status means that the fictional scenario author marked the administrative step complete. The handoff note is a narrative explanation, not independent payer or identity-verification evidence. A realistic future evidence log would need a fictional source type, action timestamp, responsible role, recheck outcome, reviewer and disposition; such fields must not imply actual transactions.

## Thirty-case demographic simulation

Source: [demographic eligibility control simulation CSV](../data/demographic-eligibility-control-simulation.csv).

The baseline group and control-state group each contain 15 fictional scenarios. Reported baseline exception share is 6/15 = 40.0%, and modeled control-state exception share is 1/15 = 6.7%. In the control group, 5/6 modeled defects were marked caught before eligibility, or 83.3%. Fictional downstream rework touches are 21 baseline and 2 control-state.

These are authored scenario outputs. The groups have different defect compositions and are not paired cases. The difference must not be described as a measured improvement, causal effect, actual reduction in denials, or generalizable result.

## Interactive risk calculator

Source: [risk calculator](../eligibility-risk-calculator.html).

This is a deterministic, educational additive checklist, not a validated predictive model. Input weights are:

| Input | Points |
|---|---:|
| Coverage inactive or unclear | 25 |
| Payer mismatch | 20 |
| Plan type unclear | 15 |
| Demographic mismatch | 15 |
| Coordination of benefits issue | 20 |
| Referral requirement unclear | 15 |
| Authorization trigger detected | 20 |
| Patient responsibility not reviewed | 10 |
| Maximum possible | 140 |

Band labels are arbitrary scenario-routing categories: 0–20 Low, 21–40 Moderate, 41–60 High, 61–140 Critical. The score is not a probability, clinical risk rating, coverage decision, or authorization determination. Action language is illustrative and must defer to local procedures and authorized staff.

The five records in [sample eligibility cases](../data/sample-eligibility-cases.csv) contain illustrative scores but do not specify every checkbox input. Their values therefore cannot be independently recalculated using the calculator. Do not represent them as model outputs or a validated scoring dataset.

## Monthly report

Source: [monthly eligibility quality report](../monthly-eligibility-quality-report.html).

The percentages, counts, and targets on this page are invented planning placeholders. No source month, event-level denominator, data dictionary, or calculation file currently substantiates them. The page must display that limitation prominently and must not imply measured organizational performance.

## Validation limits

The repository source has been inspected, but browser interaction, mobile rendering, accessibility behavior, linked downloads, and external deployment functionality require separate runtime checks. No live healthcare integration was tested.
