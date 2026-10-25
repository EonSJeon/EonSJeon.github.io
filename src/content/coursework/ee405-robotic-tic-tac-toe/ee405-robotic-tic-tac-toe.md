---
title: "Robotic Tic-Tac-Toe with a Four-Degree-of-Freedom Manipulator"
summary: "An EE405 C++ implementation connects tic-tac-toe game logic, stored joint configurations, and DYNAMIXEL robot-arm control."
categoryLabel: "Course final project"
status: "Coursework implementation available"
period: "2024"
courseCode: "EE405"
type: "course-final-project"
displayOrder: 40
featured: false
approvedForPublication: true
tags: ["C++17", "Eigen3", "DYNAMIXEL SDK", "CMake", "Robot kinematics"]
---

## Connecting game decisions to robot motion

This EE405 coursework implementation connects a terminal-based tic-tac-toe game with a four-degree-of-freedom DYNAMIXEL robot arm. A human player selects a board position, and a rule-based opponent chooses the computer's response.

The code separates game-state logic, actuator control, and robot kinematics. Board and color positions are stored as joint configurations, while a waypoint-recording utility supports position capture. Motion routines interpolate between configurations, with a Jacobian-based end-effector adjustment intended for marking a move on the board.

## Supporting laboratory work

Related coursework explored GPIO-based LED and gripper control, motor-control code, numerical differentiation, low-pass filtering, and MATLAB visualization. TCP/UDP and remote-control exercises provided further experience connecting PC software with a BeagleBone environment.

Together, the implementation and laboratory work explore how embedded control, geometric models, calibration data, and application logic fit together in an interactive robotic system.
