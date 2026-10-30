---
title: "척수성 근위축증 유병률의 Bayesian 메타분석"
summary: "척수성 근위축증 유병률 문헌을 신생아·소아·전체 연령으로 구분하고, 국가·지역·전 세계 수준의 추정으로 연결하는 공동 연구입니다."
categoryLabel: "Meta Analysis"
status: "연구 프로젝트"
researchArea: "meta-analysis"
language: ko
translationKey: "sma-prevalence-modeling"
displayOrder: 50
featured: false
approvedForPublication: true
tags: ["Bayesian 모델링", "척수성 근위축증", "문헌 종합", "인구 가중", "PyMC"]
---

## 서로 다른 인구의 유병률 자료 정리

이 프로젝트는 척수성 근위축증(Spinal Muscular Atrophy, SMA)의 유병률 문헌을 다룹니다. 신생아, 소아, 전체 연령을 구분하고, 서로 다른 국가와 진단 범주에서 수집한 연구를 하나의 분석 흐름으로 연결합니다.

핵심 과제는 측정 대상 인구의 의미를 유지하면서 연구별 자료를 지리적 요약으로 연결하는 것입니다. 예를 들어 신생아 추정치와 전체 연령의 시점 유병률은 대상 인구를 해석하는 기준이 다릅니다.

## 계산 흐름

메타분석은 연구별 자료의 종합, Bayesian 모델링, 사후분포 요약, 인구 가중 집계를 연결합니다. Python/Jupyter 구현에서 PyMC와 ArviZ로 통계 분석을 다루고, 국가명 매칭, 연령별 결과표와 지도 준비를 위한 도구를 사용합니다.

<div class="flow-diagram" role="img" aria-label="발표된 유병률 연구를 대상 인구와 진단 범주에 따라 정리한 뒤 모델링과 지리적 집계로 연결하는 흐름"><span>유병률 문헌</span><b aria-hidden="true">→</b><span>대상 인구 정의</span><b aria-hidden="true">→</b><span>Bayesian 분석</span><b aria-hidden="true">→</b><span>지리적 요약</span></div>

국가명과 지리적 계층을 연결해 지역·전 세계 단위로 결과를 요약합니다. 이 과정에 인구 가중치가 포함되므로, 어떤 분모를 사용하는지가 결과 해석의 핵심 조건이 됩니다.

## 해석 범위

출생 유병률과 시점 유병률은 서로 다른 추정 대상입니다. 이를 함께 다루려면 명확한 정의, 적절한 인구 분모, 불확실성에 대한 설명이 필요합니다. 모델링과 집계 사이에서 연령 구간과 지리적 매칭도 일관되게 유지해야 합니다.

여기서는 연구 범위와 계산 접근을 소개합니다. 국가별 수치와 순위, 연령별 질병 부담 수치는 이 개요에서 제시하지 않습니다. 수집 문헌이 다루는 기간과 연도별 질병 추세를 모델링한 기간도 구분해야 합니다.
