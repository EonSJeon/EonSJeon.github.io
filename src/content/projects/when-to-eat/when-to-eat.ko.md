---
title: "When to Eat — RFID 식품 보관 알림"
summary: "재사용 RFID 토큰과 Windows 데스크톱 인터페이스를 결합해 식품 보관 알림을 눈에 보이고 만질 수 있는 형태로 구현했습니다. 2024 KAIST 메이커톤 대상을 수상했습니다."
categoryLabel: "메이커톤 · 시제품"
status: "시제품 완성 · 대상 수상"
period: "2024년 여름"
institution: "KAIST"
language: ko
translationKey: "when-to-eat"
displayOrder: 10
featured: true
approvedForPublication: true
tags: ["UHF RFID", "ATID ATD100", "C#", "XAML", "Windows UWP"]
contribution: "4인 메이커톤 팀의 팀장을 맡았습니다."
collaborators:
  - name: "전상언"
    role: "팀장"
  - name: "Sehyeon Kim"
    role: "팀원"
    url: "https://www.linkedin.com/in/sehyeon-kim-a763a1227/"
  - name: "Byeongyoung Jeong"
    role: "팀원"
    url: "https://www.linkedin.com/in/%EB%B3%91%EC%98%81-%EC%A0%95-956791383/"
  - name: "Yujin Park"
    role: "팀원"
links:
  - label: "프로젝트 저장소"
    url: "https://github.com/EonSJeon/2024Sum_KAIST_Makerathon"
---

## 일상적인 식품 보관을 위한 물리적 알림

냉장고에 보관한 식품을 관리하는 일은 쉽지 않습니다. 인쇄된 라벨이 작거나 읽기 어려우면 더욱 그렇습니다. **When to Eat(웬 투 잇)**은 식품 용기에 연결하는 재사용 RFID 토큰, 토큰 보관 스테이션, 보관 시간을 보여주는 데스크톱 화면을 결합한 인터페이스입니다.

스테이션에서 토큰을 꺼내면 사용 기간 추적이 시작되고, 다시 돌려놓으면 추적 상태가 초기화됩니다. 화면에는 식품 분류, 날짜, 남은 일수가 표시되며, 권장 폐기일이 가까워지거나 지난 식품은 시각적으로 구분합니다.

## 구현

팀은 제조사의 .NET SDK와 USB 가상 COM 포트를 통해 **ATID ATD100 UHF RFID 리더**를 연동했습니다. **C#과 XAML**로 작성한 Windows UWP 애플리케이션은 태그 인식 이벤트를 받아 보관 시간 화면을 갱신합니다. 용기 형태에 맞는 토큰 부착 방식도 검토했습니다.

이 시제품은 보관 경과 시간을 추적하고 참고 기준에 따른 알림을 표시합니다. 식품의 부패를 직접 측정하거나 섭취 안전성을 판정하는 장치는 아닙니다.

## 결과

**2024 KAIST 메이커톤**에서 **대상(1위)**과 상금 **250만 원**을 받았습니다. 전상언은 4인 팀의 팀장을 맡았습니다.
