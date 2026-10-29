---
title: "파리지옥 생체전기 신호 기록과 재생"
summary: "Seeeduino–MATLAB 시스템으로 파리지옥의 전기적 반응을 기록하고 자극 신호로 재생해 포충엽이 닫히는 동작을 성공적으로 유도했습니다."
categoryLabel: "졸업설계 · 캡스톤"
status: "완료 · 시연 성공"
period: "2024년"
institution: "조지아공과대학교"
courseCode: "ECE 4723"
courseTitle: "학제 간 캡스톤 설계"
type: "senior-design"
language: ko
translationKey: "venus-flytrap-bioelectrical-playback"
displayOrder: 10
featured: true
approvedForPublication: true
tags: ["생체전자공학", "Seeeduino", "C++", "MATLAB", "MATLAB App Designer", "USB/직렬 통신"]
contribution: "임베디드 펌웨어, MATLAB 애플리케이션, 통신, 기록, 모니터링, 재생을 포함한 전체 디지털 시스템을 설계하고 프로그래밍했습니다."
collaborators:
  - name: "Amanda Hegadorn"
    url: "https://www.linkedin.com/in/amanda-hegadorn-6493461b0/"
  - name: "Ross Gunther"
    url: "https://www.linkedin.com/in/ross-gunther/"
  - name: "Colton Walker"
    url: "https://www.linkedin.com/in/colton-lee-walker/"
  - name: "Skylar Kennett"
    url: "http://linkedin.com/in/skylar-kennett/"
  - name: "Hector Alejandro Duran"
    url: "https://www.linkedin.com/in/hector-duran-0a669316b/"
---

## 식물의 전기적 반응을 기록하고 재생하기

파리지옥은 자극을 받으면 전기적 신호가 발생하고, 이어서 포충엽이 빠르게 닫힙니다. 이 학제 간 캡스톤 프로젝트는 닫힘 동작과 관련된 신호를 기록한 뒤 이를 재현해 전기적으로 닫힘을 유도할 수 있는지 탐구했습니다.

팀은 전기 신호를 기록하는 과정과 파형을 재생해 포충엽의 닫힘을 유도하는 과정을 모두 시연했습니다.

## 최종 시스템

**Seeeduino**를 **USB/직렬 통신**으로 노트북에 직접 연결했습니다. C++ 펌웨어는 신호 수집과 파형 출력을 담당했고, **MATLAB App Designer** 애플리케이션은 모니터링, 시각화, 기록, 파형 전송, 재생 제어를 지원했습니다. 별도의 MATLAB 스크립트로 신호 분석과 디지털 시스템 검증을 수행했습니다.

식물 신호 수집, 노트북에서의 기록·시각화, 임베디드 장치를 통한 전기적 재생을 하나의 시스템으로 연결했습니다.

## 담당한 부분

Seeeduino 펌웨어, MATLAB 소프트웨어와 인터페이스, 장치 통신, 기록·재생 과정을 포함한 전체 디지털 하위 시스템을 설계하고 프로그래밍했습니다. 생물학적 실험과 아날로그 하드웨어는 팀 전체의 작업에 해당합니다.
