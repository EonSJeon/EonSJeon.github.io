---
title: "Stage-Specific Modeling of Age-Related Macular Degeneration"
summary: "Statistical modeling of age-related macular degeneration prevalence and disease burden across disease stages, age, sex, geography, and ancestry-specific age curves."
categoryLabel: "Meta Analysis"
status: "Research project"
researchArea: "meta-analysis"
displayOrder: 60
featured: false
approvedForPublication: true
tags: ["Bayesian modeling", "Age-related macular degeneration", "Age curves", "Population health", "PyMC"]
---

## Connecting age patterns and disease stages

Age-related macular degeneration (AMD) prevalence can be studied across age groups, locations, and disease stages. This research brings together evidence from studies with different age ranges and geographic coverage to model those dimensions jointly.

The project considers early, intermediate, late-dry, and late-wet disease stages, together with ancestry-specific age analyses. The research question concerns how these distinctions can be represented in population summaries without losing the definitions underlying each estimate.

## Modeling approach

The analysis uses a PyMC-based hierarchical model with age curves, covariates, and population-weighted aggregation. Its computational structure links study observations to age-specific estimates and then to summaries for defined populations.

Prevalence and expected case counts are treated as distinct quantities. The interpretation of a regional or global summary depends on the population used for weighting and on whether the quantity describes the observed age structure or an age-standardized comparison.

## Interpretation

The definitions of disease stage, age range, and population denominator need to remain explicit when comparing results. An ancestry-specific age curve also represents a different analytical scope from a geographic population summary.

Uncertainty requires care when stage-specific results are combined into an overall burden measure. A combined interval must be interpreted according to how it was constructed, with attention to dependencies between the contributing estimates.

This overview presents the modeling framework and its research questions. It does not report numerical burden estimates, country rankings, demonstrated forecast accuracy, or clinical prediction performance. Any future projections would require their population inputs, assumptions, and uncertainty to be specified separately from historical population summaries.
