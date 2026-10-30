---
title: "혈우병 유병률과 치료 자원 격차 모델링"
summary: "혈우병 A/B 유병률과 치료제 조달을 통계적으로 분석하고, 인구 추정치를 치료 필요량과 자원 격차 시나리오로 연결하는 연구입니다."
categoryLabel: "Meta Analysis"
status: "연구 프로젝트"
researchArea: "meta-analysis"
language: ko
translationKey: "hemophilia-resource-modeling"
displayOrder: 30
featured: false
approvedForPublication: true
contribution: "공동 제1저자"
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
  - name: "Yi Deun Jeong"
    url: "https://scholar.google.com/citations?user=HvDDOvsAAAAJ&hl=en"
  - name: "Dong Keon Yon"
    role: "Project Manager"
    url: "http://cdh.khu.ac.kr/%EB%B6%80%EC%84%BC%ED%84%B0%EC%9E%A5-%EC%86%8C%EA%B0%9C"
  - name: "Center for Digital Health, Kyung Hee University"
    url: "http://cdh.khu.ac.kr/"
tags: ["Bayesian 모델링", "혈우병", "인구 건강", "PyMC", "시나리오 분석"]
---

## 질병 규모와 치료 자원을 연결하기

혈우병을 인구 수준에서 이해하려면 영향을 받는 사람이 얼마나 되는지, 치료제가 어떻게 조달되는지, 추정한 치료 필요량과 가용 자원이 어떻게 다른지를 함께 살펴봐야 합니다. 이 프로젝트는 혈우병 A와 B를 대상으로 이러한 질문을 하나의 통계 모델링 흐름으로 연결합니다.

연구 범위는 유병률 추정, 치료제 조달 분석, 미래 인구 시나리오, 치료 자원 격차 분석입니다. 각 추정량이 어떤 관계에 있고, 이를 연결하려면 어떤 가정이 필요한지에 초점을 둡니다.

## 모델링 접근

유병률 분석에는 연령, 성별, 사회인구학적 정보와 지리적 구조를 반영합니다. 국가별 추정치를 지역 단위로 요약하고, 인구 정보를 집계의 기준으로 사용합니다.

치료제 분석은 조달이 관측되는지와 양의 조달량이 얼마인지를 나누어 모델링합니다. 이어서 인구·환자 전망과 치료 필요량 가정을 연결해 자원 격차 시나리오를 구성합니다. Python과 PyMC로 모델을 다루고, ArviZ와 과학 계산 도구로 진단과 요약을 수행하는 흐름입니다.

<div class="flow-diagram" role="img" aria-label="유병률 모델과 치료제 조달 분석을 조건부 치료 자원 시나리오로 연결하는 흐름"><span>유병률 자료</span><b aria-hidden="true">→</b><span>인구 수준 추정</span><b aria-hidden="true">+</b><span>치료제 조달 분석</span><b aria-hidden="true">→</b><span>자원 시나리오</span></div>

## 해석 범위

유병률, 조달량, 치료 필요량은 인구 건강의 서로 다른 측면을 나타냅니다. 자료가 포괄하는 범위, 인구의 정의, 치료 필요량에 대한 가정, 분석 단계 사이의 불확실성 처리에 따라 해석이 달라집니다.

자원 격차 분석은 가정에 조건부인 시나리오 분석입니다. 인구 입력이나 치료 가정이 바뀌면 결론도 달라질 수 있으므로, 미래 시나리오에는 명시적인 가정과 민감도 분석이 필요합니다. 여기서는 모델링 질문과 계산 접근을 소개하며, 수치로 된 질병 부담이나 검증된 전망 성능을 제시하지 않습니다.
