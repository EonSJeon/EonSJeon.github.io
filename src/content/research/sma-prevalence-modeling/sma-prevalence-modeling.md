---
title: "Bayesian Meta-analysis of SMA Prevalence"
summary: "A collaborative study organizing spinal muscular atrophy prevalence evidence into newborn, child, and all-age estimates at country, regional, and global levels."
categoryLabel: "Meta Analysis"
status: "Published"
relatedManuscript: "sma-global-prevalence"
links:
  - label: "Paper (DOI)"
    url: "https://doi.org/10.1016/j.pediatrneurol.2026.04.005"
researchArea: "meta-analysis"
displayOrder: 50
featured: false
approvedForPublication: true
contribution: "Co-first author"
collaborators:
  - name: "Yi Deun Jeong"
    url: "https://scholar.google.com/citations?user=HvDDOvsAAAAJ&hl=en"
  - name: "Center for Digital Health, Kyung Hee University"
    url: "http://cdh.khu.ac.kr/"
tags: ["Bayesian modeling", "Spinal muscular atrophy", "Evidence synthesis", "Population weighting", "PyMC"]
---

## Organizing prevalence evidence across populations

This project examines published evidence on spinal muscular atrophy (SMA) prevalence. Its scope distinguishes newborn, child, and all-age populations, bringing studies from different countries and diagnostic categories into a shared analytical workflow.

The central challenge is to connect study-level evidence with useful geographic summaries while preserving the meaning of the population being measured. A newborn estimate, for example, requires a different population interpretation from an all-age point-prevalence estimate.

## Computational workflow

The meta-analysis combines study-level evidence synthesis, Bayesian modeling, posterior summaries, and population-weighted aggregation. The Python/Jupyter implementation uses PyMC and ArviZ for statistical work, with tools for geographic name matching, age-specific tables, and map preparation.

<div class="flow-diagram" role="img" aria-label="Published prevalence studies are organized by population and diagnostic category before modeling and geographic aggregation"><span>Published studies</span><b aria-hidden="true">→</b><span>Population definitions</span><b aria-hidden="true">→</b><span>Bayesian analysis</span><b aria-hidden="true">→</b><span>Geographic summaries</span></div>

Country-name matching and geographic hierarchies connect the statistical analysis with regional and global summaries. Population weights are part of that process, so the choice of denominator remains central to interpreting the resulting quantities.

## Interpretation

Birth prevalence and point prevalence describe different estimands. Combining them requires explicit definitions, appropriate population denominators, and a clear account of uncertainty. Age boundaries and geographic matching also need to remain consistent between modeling and aggregation.

The project is described here at the level of its research scope and computational approach. Numerical country estimates, rankings, and age-specific burden claims are outside this overview. The time span of the collected literature should also be distinguished from a modeled year-by-year disease trend.
