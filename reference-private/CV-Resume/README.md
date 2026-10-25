# CV and Resume

정리일: 2026-10-24. 이 폴더는 웹사이트 저장소와 분리한 로컬 전용 Git 저장소이며 remote가 없습니다.

요청한 명칭에 따라 상세 이력서는 `Resume-Full`, 한 페이지 지원서는 `CV-1Page-용도`로 통일했습니다. 날짜는 파일명 대신 Git 이력과 아래 표에서 관리합니다. 같은 버전의 DOCX와 PDF는 동일한 기본 파일명을 사용합니다.

## 현재 파일

| 용도 | 기본 파일명 | 버전 근거 | 남긴 형식 | PDF 페이지 |
| --- | --- | --- | --- | --- |
| Full resume | `Sangeon-Jeon-Resume-Full` | 2025-09-08 PDF 생성일 | DOCX + PDF | 3 |
| 산업계 종합 | `Sangeon-Jeon-CV-1Page-Industrial` | 2026-04-11 파일명 날짜, 내부 생성일 없음 | PDF | 1 |
| ML | `Sangeon-Jeon-CV-1Page-ML` | 2025-09-09 PDF 생성일 | DOCX + PDF | 1 |
| 소프트웨어 | `Sangeon-Jeon-CV-1Page-Software` | 2025-09-09 PDF 생성일 | DOCX + PDF | 1 |
| 통신 | `Sangeon-Jeon-CV-1Page-Telecom` | 2025-09-09 PDF 생성일 | DOCX + PDF | 1 |
| 신경과학 연구지원 | `Sangeon-Jeon-CV-1Page-Neuroscience` | 파일명 2024-01-05, PDF 생성일 2024-01-10 | PDF | 1 |

각 용도에서 제공된 최신 버전만 남겼습니다. Full resume과 ML/소프트웨어/통신/신경과학 지원서는 산업계용 2026 버전보다 오래된 내용입니다. 이번 작업은 파일 분류와 이력 정리이며 본문, 서식, 메타데이터는 수정하지 않았습니다.

## 날짜와 짝을 판단한 기준

- PDF는 실제 페이지 수와 전체 본문을 확인했습니다. 16개 PDF의 27페이지를 렌더링했고, 본문이 같은 사본은 페이지 이미지도 동일함을 확인했습니다.
- DOCX 10개는 전체 본문과 문서 속성을 확인했습니다. PDF와 DOCX의 본문을 NFKC 정규화한 뒤 공백/문장부호/대소문자를 제외한 문자열이 완전히 같은 경우에만 쌍으로 취급했습니다. 서식의 동일성까지 의미하지는 않습니다.
- 커밋 순서는 PDF 내부 생성일을 우선 사용했습니다. DOCX만 있는 중간 버전은 내부 수정일을 사용했고, 내부 생성일이 없는 산업계용 PDF만 파일명 날짜를 사용했습니다.
- PDF 수정일과 로컬 파일 수정 시각은 모두 가져온 시점인 2026-10-24로 바뀌어 있어 버전 순서에 사용하지 않았습니다. 실제 집필 시점은 확정할 수 없습니다.
- Git author/committer 날짜는 실제 정리 시각을 유지했습니다. 과거 날짜는 커밋 제목, 본문, `source-inventory.json`에 기록했습니다.
- 동일 시각의 사본은 같은 버전으로 취급합니다. PDF의 원본 바이트가 다른 사본은 복원할 수 있도록 각각 수록했으며, 바이트까지 같은 DOCX 사본은 하나의 Git blob에 원래 이름을 모두 대응시켰습니다.

## 확인한 중복과 파일명 불일치

- `Resume 1pg 230802 - Sangeon Jeon.pdf`와 `Resume 1pg 240105 - Sangeon Jeon.pdf`: 본문과 렌더링 동일. 두 파일 모두 생성일은 2024-01-10이며 2024년 봄 연구지원 내용입니다. 후자 파일을 현재본으로 선택했습니다.
- `CV 250403 - Sangeon Jeon.pdf`와 `CV 250403 - UPCP.pdf`: 본문과 렌더링 동일.
- `CV 250908.pdf`와 `전 - 2025 - Resume 250908.pdf`: 본문과 렌더링 동일. 전자를 현재본으로 선택했습니다.
- `CV 250103 - Sangeon Jeon.docx`, `CV 250403 - UPCP.docx`, `CV 250403 - UPCP (1).docx`: SHA-256까지 같은 DOCX 세 사본입니다. 본문은 2025-04-03 PDF와 일치하며, 2025-01-03 PDF와는 다릅니다.
- `CV 250908 - UPCP.docx`: 내부 수정일 2025-09-08 14:44 UTC인 별도 중간 버전입니다. 같은 날짜의 최종 PDF와 본문이 달라 DOCX 단독으로 먼저 보존한 뒤 최종 쌍으로 교체했습니다.
- `Resume Telecomm (1).pdf`: 2025-09-08 버전으로, `Resume Telecomm.pdf`의 2025-09-09 버전보다 이릅니다.
- `Resume 1pg 230423 - Sangeon Jeon.pdf`: 파일명은 2023-04-23이지만 PDF 생성일은 2023-03-10입니다. `Resume.pdf`는 2023-04-18 생성이며 지원 학기가 여름에서 가을로 바뀌었습니다.
- `CV 240610 - Sangeon Jeon.pdf`: 파일명은 2024-06-10, PDF 생성일은 2024-05-30입니다. `CV 240803 - Sangeon Jeon.pdf`도 파일명은 2024-08-03, 생성일은 2024-08-02입니다.

## 원본별 복원 기록

원본 26개(DOCX 10개, PDF 16개)는 모두 아래 커밋의 해당 경로에서 원본 바이트 그대로 복원할 수 있습니다. 전체 SHA-256과 날짜 근거는 `source-inventory.json`에 있습니다.

| 원래 파일명 | 커밋 | 저장 경로 |
| --- | --- | --- |
| `Resume 1pg 230423 - Sangeon Jeon.pdf` | `115c7ce2` | `Sangeon-Jeon-CV-1Page-Neuroscience.pdf` |
| `Resume.pdf` | `0c63d419` | `Sangeon-Jeon-CV-1Page-Neuroscience.pdf` |
| `Resume 1pg 230802 - Sangeon Jeon.pdf` | `2d204c9a` | `Sangeon-Jeon-CV-1Page-Neuroscience.pdf` |
| `Resume 1pg 240105 - Sangeon Jeon.pdf` | `d42c9eae` | `Sangeon-Jeon-CV-1Page-Neuroscience.pdf` |
| `CV 240610 - Sangeon Jeon.pdf` | `0e64d9bf` | `Sangeon-Jeon-Resume-Full.pdf` |
| `CV 240610 - Sangeon Jeon.docx` | `0e64d9bf` | `Sangeon-Jeon-Resume-Full.docx` |
| `CV 240803 - Sangeon Jeon.pdf` | `f9331465` | `Sangeon-Jeon-Resume-Full.pdf` |
| `CV 240803 - Sangeon Jeon.docx` | `f9331465` | `Sangeon-Jeon-Resume-Full.docx` |
| `CV 250103 - Sangeon Jeon.pdf` | `6f23a1ff` | `Sangeon-Jeon-Resume-Full.pdf` |
| `CV 250403 - UPCP.pdf` | `9ca24190` | `Sangeon-Jeon-Resume-Full.pdf` |
| `CV 250103 - Sangeon Jeon.docx` | `9ca24190` | `Sangeon-Jeon-Resume-Full.docx` |
| `CV 250403 - UPCP (1).docx` | `9ca24190` | `Sangeon-Jeon-Resume-Full.docx` |
| `CV 250403 - UPCP.docx` | `9ca24190` | `Sangeon-Jeon-Resume-Full.docx` |
| `CV 250403 - Sangeon Jeon.pdf` | `068ca9a4` | `Sangeon-Jeon-Resume-Full.pdf` |
| `CV 250908 - UPCP.docx` | `2b3b369b` | `Sangeon-Jeon-Resume-Full.docx` |
| `전 - 2025 - Resume 250908.pdf` | `c687e8e0` | `Sangeon-Jeon-Resume-Full.pdf` |
| `CV 250908.docx` | `c687e8e0` | `Sangeon-Jeon-Resume-Full.docx` |
| `CV 250908.pdf` | `dd903bf0` | `Sangeon-Jeon-Resume-Full.pdf` |
| `Resume Telecomm (1).pdf` | `1528ce7b` | `Sangeon-Jeon-CV-1Page-Telecom.pdf` |
| `Resume ML.pdf` | `264271b4` | `Sangeon-Jeon-CV-1Page-ML.pdf` |
| `Resume ML.docx` | `264271b4` | `Sangeon-Jeon-CV-1Page-ML.docx` |
| `Resume SW.pdf` | `5179d1c2` | `Sangeon-Jeon-CV-1Page-Software.pdf` |
| `Resume SW.docx` | `5179d1c2` | `Sangeon-Jeon-CV-1Page-Software.docx` |
| `Resume Telecomm.pdf` | `e0424576` | `Sangeon-Jeon-CV-1Page-Telecom.pdf` |
| `Resume Telecomm.docx` | `e0424576` | `Sangeon-Jeon-CV-1Page-Telecom.docx` |
| `CV 260411 industrial.docx.pdf` | `e23c4f50` | `Sangeon-Jeon-CV-1Page-Industrial.pdf` |

## 이력 확인과 복원

이 폴더에서 다음 명령을 실행합니다.

```sh
git log --reverse --oneline
git log --follow --oneline -- Sangeon-Jeon-Resume-Full.pdf
git show <commit>:Sangeon-Jeon-Resume-Full.pdf > /private/tmp/previous-resume.pdf
git show <commit>:Sangeon-Jeon-Resume-Full.docx > /private/tmp/previous-resume.docx
```

복원할 때는 표의 커밋과 경로를 사용합니다. 쌍이 없는 버전에는 해당 형식만 존재합니다. 한 쌍을 새 버전으로 갱신할 때는 두 파일을 함께 확인하고 같은 커밋에 추가합니다.
