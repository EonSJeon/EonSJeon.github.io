---
title: "4자유도 로봇 팔을 이용한 틱택토"
summary: "EE405의 C++ 구현으로 틱택토 게임 논리, 저장된 관절 자세, DYNAMIXEL 로봇 팔 제어를 연결했습니다."
categoryLabel: "교과 기말 프로젝트"
status: "교과 구현 코드"
period: "2024년"
courseCode: "EE405"
type: "course-final-project"
language: ko
translationKey: "ee405-robotic-tic-tac-toe"
displayOrder: 40
featured: false
approvedForPublication: true
tags: ["C++17", "Eigen3", "DYNAMIXEL SDK", "CMake", "로봇 기구학"]
---

## 게임의 결정을 로봇의 움직임으로 연결하기

이 EE405 교과 구현은 터미널 기반 틱택토 게임을 4자유도 DYNAMIXEL 로봇 팔과 연결합니다. 사용자가 보드 위치를 선택하면 규칙 기반 상대가 컴퓨터의 다음 수를 결정합니다.

코드는 게임 상태 논리, 액추에이터 제어, 로봇 기구학을 분리합니다. 보드와 색상별 위치는 관절 자세로 저장하며, 경유점 기록 도구로 위치를 수집합니다. 동작 루틴은 자세 사이를 보간하고, 보드에 수를 표시하기 위한 자코비안 기반 말단 위치 조정을 포함합니다.

## 관련 실험

관련 교과 실험에서는 GPIO 기반 LED·그리퍼 제어, 모터 제어 코드, 수치 미분, 저역 통과 필터링, MATLAB 시각화를 다뤘습니다. TCP/UDP 통신과 원격 제어 실습을 통해 PC 소프트웨어와 BeagleBone 환경을 연결하는 경험도 쌓았습니다.

구현과 실험을 통해 임베디드 제어, 기하학적 모델, 보정 데이터, 애플리케이션 논리가 상호작용하는 로봇 시스템 안에서 어떻게 결합되는지 살펴보았습니다.
