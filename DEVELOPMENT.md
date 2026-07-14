# VetApp Development Guide

Version: 2.0

Last Updated: 2026-07

---

# 프로젝트 비전

VetApp은 수의사를 위한 임상 지원 플랫폼이다.

단순한 계산기 모음이 아니라 다음 기능을 포함하는 의료 플랫폼을 목표로 한다.

* 임상 계산기
* 질환 정보
* 영상 진단
* AI 기반 자동 측정
* 논문 및 참고자료
* 오프라인 지원
* 모바일(Android)
* 웹 서비스

---

# 개발 철학

## 1. 설계를 먼저 한다.

기능을 구현하기 전에 반드시 아래 사항을 먼저 검토한다.

* 현재 구조에 적합한가?
* 앞으로 확장 가능한가?
* 기존 기능에 영향을 주는가?
* 더 좋은 구현 방법이 있는가?

설계가 완료된 후 개발을 시작한다.

---

## 2. 항상 가장 좋은 방법을 먼저 제안한다.

새 기능 요청 시 순서는 다음과 같다.

1. 요구사항 분석
2. 구현 방법 비교
3. 추천안 제시
4. 사용자 승인
5. 개발
6. 테스트
7. Git Commit

임시 해결책보다 장기적으로 유지보수가 쉬운 방법을 우선한다.

---

## 3. 작은 단위로 개발한다.

한 번에 많은 기능을 수정하지 않는다.

기능 하나당

* 개발
* 테스트
* Commit

을 반복한다.

---

## 4. Main 브랜치는 항상 안정 상태를 유지한다.

main

* Play Store 배포 가능한 버전

develop

* 개발 진행

feature 브랜치

* 큰 기능 개발

예)

feature/router

feature/vhs

feature/vlas

feature/ecg

---

# 프로젝트 구조

src/

app/

router/

components/

features/

shared/

services/

utils/

assets/

App.tsx

main.tsx

---

# 폴더 규칙

## app

앱 설정

## router

라우팅 관리

## components

공용 UI

## features

각 기능

예)

features/

cardiology/

dermatology/

neurology/

nutrition/

ophthalmology/

imaging/

---

# Tool 추가 규칙

새 Tool은 반드시

features

아래에 생성한다.

Tool 하나당 하나의 폴더를 사용한다.

예)

features/

cardiology/

VHS/

VLAS/

ECG/

---

# Imaging 규칙

영상 분석 기능은

features/imaging

아래에 생성한다.

예)

imaging/

vhs/

vlas/

dicom/

xray/

AI/

AI 기능과 UI를 분리한다.

---

# 공통 코드

같은 코드를 두 번 작성하지 않는다.

재사용 가능한 코드는

shared

또는

services

또는

utils

로 이동한다.

---

# Router 규칙

Web

BrowserRouter

Android

HashRouter

Router는 플랫폼에 따라 자동 선택한다.

App.tsx는 Route를 직접 관리하지 않는다.

---

# Android 규칙

Android 전용 기능

* Back Button
* Splash
* Status Bar
* Keyboard
* Safe Area

는 Tool 내부에 구현하지 않는다.

공통 컴포넌트에서 관리한다.

---

# UI 규칙

모든 Tool은 동일한 구조를 유지한다.

Header

↓

Tool

↓

설명

↓

참고 문헌

↓

관련 Tool

---

# 디자인 원칙

색상

Typography

Spacing

Button

Card

는 프로젝트 전체에서 통일한다.

---

# 의료 정보

모든 계산식은

논문

또는

교과서

근거를 확인한 후 적용한다.

계산식 변경 시

근거 논문을 Commit Message 또는 문서에 남긴다.

---

# Git Commit 규칙

feat:

새 기능

fix:

버그 수정

refactor:

구조 개선

style:

UI 변경

docs:

문서 수정

예)

feat(vhs): add manual VHS measurement

fix(android): fix back button behavior

refactor(router): split native and web router

---

# Git 작업 순서

개발

↓

테스트

↓

Commit

↓

Push

↓

Pull Request (필요 시)

↓

Merge

---

# Build 규칙

Push 전 반드시

npm run build

성공 확인

Android 변경 시

npm run build

↓

npx cap sync

↓

Android Studio 테스트

---

# Android 배포

npm run build

↓

npx cap sync

↓

Generate Signed Bundle

↓

AAB 생성

↓

Play Console 업로드

---

# 코드 작성 원칙

한 파일은 하나의 역할만 가진다.

컴포넌트는 가능한 300줄 이하를 유지한다.

복잡한 계산은 utils로 분리한다.

비즈니스 로직과 UI를 분리한다.

---

# AI 개발 원칙

AI는 보조 기능이다.

반드시

수동

↓

반자동

↓

완전 자동

순서로 개발한다.

사용자가 언제든 결과를 수정할 수 있어야 한다.

---

# VetApp Roadmap

Phase 1

프로젝트 구조 개선

Android 최적화

Router 분리

Back Button

---

Phase 2

Cardiology Imaging

VHS

VLAS

---

Phase 3

반자동 Landmark

자동 계산

---

Phase 4

AI Landmark Detection

---

Phase 5

DICOM Viewer

---

Phase 6

AI Clinical Assistant

---

# 최종 목표

VetApp은

수의사를 위한 최고의 임상 지원 플랫폼을 목표로 한다.

새로운 기능을 추가하더라도 기존 기능을 수정하지 않는 구조를 유지한다.

"확장성, 안정성, 유지보수성"을 최우선 원칙으로 한다.
