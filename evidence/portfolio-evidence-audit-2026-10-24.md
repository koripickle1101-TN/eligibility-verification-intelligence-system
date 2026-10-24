# EVIS evidence-quality baseline — 2026-10-24

Status: initial source review; no runtime or independently verified payer data.

## Reviewed source
- `data/patient-access-work-queue-12-synthetic-cases.csv`: 12 fictional records EV-001 through EV-012; 7 Closed, 3 Open, 2 Escalated.
- The five unresolved records are EV-003, EV-006, EV-008, EV-009, EV-012. All five follow-up due dates precede 2026-10-20, the fixed snapshot date in the published methodology.
- The seven Closed rows have a closed date equal to their follow-up due date. This is scenario-author data, not verified on-time performance.
- `evidence/metrics-and-scoring-methodology.md` correctly separates the 12-case queue from the separate 30-case demographic model and explicitly states the two 15-case groups are unmatched fictional cohorts.

## First-pass evidence risks
1. `Eligibility Status` remains `Needs Review` for some records with `Queue Status=Closed` (EV-002, EV-005, EV-011). This can represent closure of an administrative exception, but the difference between source eligibility status and workflow closure must be defined so a recruiter does not infer confirmed coverage from a closed queue.
2. Closure narrative notes such as 'reverified' are authored descriptions without a source transaction ID, reviewer, timestamp, or verification artifact. Do not certify them as independent evidence.
3. Five unresolved follow-ups are overdue at the fixed snapshot. The CSV does not establish that subsequent outreach or escalation actually occurred.
4. The 30-case model's 15-vs-15 comparison cannot support a causal improvement claim. Its weights and placeholder monthly KPIs are unvalidated teaching assumptions.

## Next validation tests
- Independently parse all source CSV files and reconcile counts, statuses, dates, duplicates and risk scores.
- Inspect source HTML/JS risk calculator against methodology weight definitions and boundary bands.
- Test whether unresolved eligibility questions remain gated regardless of a Low numerical score.
- Define closure evidence fields and distinguish queue closure from eligibility confirmation.
- Verify recruiter navigation, accessibility and mobile behavior separately.

No data, source metrics or production files have been changed by this baseline. Work remains on the review branch; publication is not authorized.
