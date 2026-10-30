---
title: "Modeling Hemophilia Prevalence and Treatment Resource Gaps"
summary: "Statistical modeling of hemophilia A/B prevalence and treatment procurement, connecting population estimates with scenarios for treatment requirements and resource gaps."
categoryLabel: "Meta Analysis"
status: "Research project"
researchArea: "meta-analysis"
displayOrder: 30
featured: false
approvedForPublication: true
contribution: "Co-first author"
authors:
  - "Yi Deun Jeong"
  - "Sangeon Jeon"
  - "Yejun Son"
  - "Soeun Kim"
  - "Ellia Tootoonchian"
  - "Donna Coffin"
  - "Taehwan Park"
  - "Dong Keon Yon"
  - "Jeffrey Stonebraker"
  - "Glenn F. Pierce"
coFirstAuthors: ["Yi Deun Jeong", "Sangeon Jeon", "Yejun Son", "Soeun Kim"]
collaborators:
  - name: "Glenn F. Pierce"
    url: "https://genetherapy.isth.org/glenn-f-pierce-md-phd"
  - name: "Yi Deun Jeong"
    url: "https://scholar.google.com/citations?user=HvDDOvsAAAAJ&hl=en"
  - name: "Dong Keon Yon"
    role: "Project Manager"
    url: "http://cdh.khu.ac.kr/%EB%B6%80%EC%84%BC%ED%84%B0%EC%9E%A5-%EC%86%8C%EA%B0%9C"
  - name: "Center for Digital Health, Kyung Hee University"
    url: "http://cdh.khu.ac.kr/"
  - name: "World Federation of Hemophilia (WFH)"
    url: "https://wfh.org/"
tags: ["Bayesian modeling", "Hemophilia", "Population health", "PyMC", "Scenario analysis"]
---

## Connecting disease burden and treatment resources

This project is a collaboration with the [Center for Digital Health at Kyung Hee University](http://cdh.khu.ac.kr/) and the [World Federation of Hemophilia (WFH)](https://wfh.org/).

Understanding hemophilia at a population level involves several related questions: how many people may be affected, how treatment products are procured, and how estimated requirements compare with available resources. This project brings those questions into a connected statistical modeling workflow for hemophilia A and B.

The research spans prevalence estimation, treatment procurement analysis, future population scenarios, and treatment resource gaps. Its focus is the relationship between these quantities and the assumptions needed to connect them.

## Modeling approach

The prevalence analysis incorporates age, sex, sociodemographic information, and geographic structure. Country-level estimates feed into regional summaries, with population information providing the basis for aggregation.

Procurement modeling separates whether procurement is observed from the volume procured when it is positive. A further scenario analysis relates population and patient projections to assumptions about treatment requirements. Python and PyMC support the modeling, with ArviZ and scientific Python tools used for diagnostics and summaries.

<div class="flow-diagram" role="img" aria-label="Prevalence modeling and procurement analysis inform conditional treatment resource scenarios"><span>Prevalence evidence</span><b aria-hidden="true">→</b><span>Population estimates</span><b aria-hidden="true">+</b><span>Procurement analysis</span><b aria-hidden="true">→</b><span>Resource scenarios</span></div>

## Interpretation

Prevalence, procurement, and treatment need describe different aspects of population health. Their interpretation depends on reporting coverage, population definitions, assumptions about treatment requirements, and the treatment of uncertainty between modeling stages.

The resource-gap component is a conditional scenario analysis. Changes in population inputs or treatment assumptions can change its conclusions, so future scenarios require explicit assumptions and sensitivity analysis. This project description concerns the modeling questions and computational approach; it does not report numerical burden estimates or demonstrated forecasting performance.
