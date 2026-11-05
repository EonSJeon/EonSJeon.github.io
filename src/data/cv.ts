import type { Locale } from '../lib/i18n';

// Dated CV/Resume sources; the reviewed content collections supply current
// project descriptions and publication records separately.
export interface CVRecord { title: string; organization: string; period: string; description: string; }
interface CVCopy {
  research: CVRecord[]; employment: CVRecord[]; teaching: CVRecord[]; awards: CVRecord[]; military: CVRecord[];
  skills: { label: string; items: string[] }[];
}
const en: CVCopy = {
  research: [
    { title: 'Next-Generation Waveforms and Synchronization', organization: 'Georgia Tech · Advisor: Prof. Xiaoli Ma', period: 'Current', description: 'Studies joint CFO and channel estimation for OCDM using a single pilot block in multipath channels, with guaranteed identifiability over a wide CFO acquisition range. First-author manuscript under review at ICASSP 2027.' },
    { title: 'Joint Channel and TI-ADC Mismatch Estimation for OFDM', organization: 'KAIST', period: 'Sep 2024–Oct 2026', description: 'Investigated pilot-based joint estimation of wireless channels and TI-ADC gain, timing, and offset mismatches in OFDM receivers, enhancing robustness and computational efficiency. First-author manuscript under review at ICC 2027.' },
    { title: 'Bayesian Inference and Meta-Analysis', organization: 'Center for Digital Health, Kyung Hee University', period: '', description: 'Contributed to PyMC-based variants of GBD’s DisMod-MR framework, incorporating geographic effects in hierarchical disease-prevalence models. Addressed incomplete labeling and random coarsening in prevalence data. Co-first author of three published journal articles and a hemophilia manuscript. The hemophilia study also involves the World Federation of Hemophilia.' },
    { title: 'CLOC Unnatural Subspace System Identification', organization: 'SIPLAB, Georgia Tech · Christopher J. Rozell', period: 'Spring 2024', description: 'Worked on a computational testbench for optical control of neural populations, including recurrent neural-network and opsin-dynamics modeling.' },
    { title: 'Undergraduate Research Assistant', organization: 'NICA Lab, KAIST', period: 'Summer 2020', description: 'Developed an approach to neuron segmentation in microscopy images and studied convolutional neural networks.' },
  ],
  employment: [
    { title: 'Software Engineer Intern', organization: 'Dong Il Vision · Anyang, South Korea', period: 'Jun–Aug 2023', description: 'Developed a C# WPF application for annotating object locations in images for a machine-learning computer-vision pipeline.' },
    { title: 'Human Resources Intern', organization: 'Dong Il Technology LTD · Hwaseong, South Korea', period: 'Jun–Aug 2018', description: 'Built Excel VBA automation to generate and distribute employee performance-evaluation sheets.' },
  ],
  teaching: [
    { title: 'ECE Tutor', organization: 'Georgia Tech', period: 'Spring 2024', description: 'Tutored introductory signal processing, circuit analysis, digital system design, and engineering software design.' },
    { title: 'Hive Peer Instructor', organization: 'The Hive Makerspace, Georgia Tech', period: 'Spring 2024', description: 'Supported laser-cutter and 3D-printer users and led a workshop on fabricating hometown maps.' },
    { title: 'Introduction to Programming Teaching Assistant', organization: 'KAIST', period: 'Spring 2020', description: 'Supported programming labs and graded assignments.' },
    { title: 'Programming and Calculus Tutor', organization: 'KAIST', period: '2019', description: 'Tutored Introduction to Programming in spring and Calculus I in fall.' },
  ],
  awards: [
    { title: 'Roger Webb Award — ECE Senior Scholar Awards', organization: 'Georgia Tech', period: 'Spring 2025', description: '' },
    { title: 'Grand Prize, KAIST Makerathon', organization: 'KAIST · When to Eat team leader', period: 'Summer 2024', description: 'First place; ₩2,500,000 team award.' },
    { title: 'Dean’s List', organization: 'Georgia Tech', period: '2023–2024', description: 'Spring 2023, Fall 2023, Spring 2024.' },
    { title: 'Dean’s List', organization: 'KAIST', period: '2018 / 2022', description: 'Spring 2018, Fall 2022.' },
  ],
  military: [
    { title: 'Sergeant', organization: 'Republic of Korea Air Force', period: 'Sep 2020–Jun 2022', description: 'Completed the full term of service. Specialty: Information Systems Management.' },
  ],
  skills: [
    { label: 'Programming', items: ['MATLAB', 'Python · PyMC, NumPy, SciPy, pandas, PyTorch', 'C# · WPF / UWP', 'C / C++', 'Java', 'Excel VBA'] },
    { label: 'Design & laboratory', items: ['SolidWorks', 'HFSS', 'NI Multisim', '3D printing', 'Laser cutting', 'Oscilloscopes, function generators, multimeters'] },
    { label: 'Languages', items: ['Korean · native', 'English · full professional proficiency', 'Japanese · conversational', 'Chinese · beginner'] },
  ],
};
const ko: CVCopy = {
  research: [
    { title: '차세대 파형 및 동기화', organization: 'Georgia Tech · 지도교수: Prof. Xiaoli Ma', period: '현재', description: '다중경로 채널에서 단일 파일럿 블록을 사용하는 OCDM의 CFO·채널 공동 추정을 연구하며, 넓은 CFO 획득 범위에서 식별가능성을 보장하는 데 초점을 둡니다. 제1저자 원고가 ICASSP 2027에서 심사 중입니다.' },
    { title: 'OFDM 채널·TI-ADC 불일치 공동 추정', organization: 'KAIST', period: '2024.09–2026.10', description: 'OFDM 수신기에서 파일럿 기반으로 무선 채널과 TI-ADC의 이득·타이밍·오프셋 불일치를 함께 추정하여 강건성과 계산 효율을 높이는 연구를 수행했습니다. 제1저자 원고가 ICC 2027에서 심사 중입니다.' },
    { title: '베이지안 추론 및 메타분석', organization: 'Center for Digital Health, Kyung Hee University', period: '', description: 'GBD의 DisMod-MR 프레임워크를 변형한 PyMC 기반 모형에 기여하며, 계층적 질병 유병률 모형에 지리 효과를 반영했습니다. 유병률 자료의 불완전 라벨링과 random coarsening 문제를 다뤘습니다. 출판된 저널 논문 세 편과 혈우병 원고의 공동 제1저자이며, 혈우병 연구에는 World Federation of Hemophilia도 참여합니다.' },
    { title: 'CLOC Unnatural Subspace System Identification', organization: 'SIPLAB, Georgia Tech · Christopher J. Rozell', period: '2024년 봄', description: '신경 집단의 광학적 제어를 위한 계산 실험 환경을 연구하고, 순환 신경망과 옵신 동역학 모델링을 다뤘습니다.' },
    { title: '학부 연구원', organization: 'NICA Lab, KAIST', period: '2020년 여름', description: '현미경 영상에서 뉴런을 분할하는 방법을 개발하고 합성곱 신경망을 공부했습니다.' },
  ],
  employment: [
    { title: '소프트웨어 엔지니어 인턴', organization: 'Dong Il Vision · Anyang, South Korea', period: '2023.06–08', description: '컴퓨터 비전 학습 자료를 위한 이미지 내 객체 위치 라벨링 프로그램을 C# WPF로 개발했습니다.' },
    { title: '인사 부문 인턴', organization: 'Dong Il Technology LTD · Hwaseong, South Korea', period: '2018.06–08', description: '직원 평가서를 생성하고 배포하는 업무를 Excel VBA로 자동화했습니다.' },
  ],
  teaching: [
    { title: 'ECE Tutor', organization: 'Georgia Tech', period: '2024년 봄', description: '기초 신호처리, 회로해석, 디지털 시스템 설계와 공학 소프트웨어 설계를 지도했습니다.' },
    { title: 'Hive Peer Instructor', organization: 'The Hive Makerspace, Georgia Tech', period: '2024년 봄', description: '레이저 커터와 3D 프린터 사용을 지원하고, 고향 지도를 제작하는 워크숍을 진행했습니다.' },
    { title: '프로그래밍 기초 조교', organization: 'KAIST', period: '2020년 봄', description: '프로그래밍 실습을 지원하고 과제를 채점했습니다.' },
    { title: '프로그래밍·미적분학 튜터', organization: 'KAIST', period: '2019년', description: '봄 학기에는 프로그래밍 기초, 가을 학기에는 미적분학 I을 지도했습니다.' },
  ],
  awards: [
    { title: 'Roger Webb Award — ECE Senior Scholar Awards', organization: 'Georgia Tech', period: '2025년 봄', description: '' },
    { title: '2024 KAIST Makerathon 대상', organization: 'KAIST · When to Eat 팀장', period: '2024년 여름', description: '1위, 팀 상금 2,500,000원.' },
    { title: 'Dean’s List', organization: 'Georgia Tech', period: '2023–2024', description: '2023년 봄·가을, 2024년 봄.' },
    { title: 'Dean’s List', organization: 'KAIST', period: '2018 / 2022', description: '2018년 봄, 2022년 가을.' },
  ],
  military: [
    { title: '병장', organization: '대한민국 공군', period: '2020.09–2022.06', description: '정보체계관리 특기로 복무하고 만기 전역했습니다.' },
  ],
  skills: [
    { label: '프로그래밍', items: ['MATLAB', 'Python · PyMC, NumPy, SciPy, pandas, PyTorch', 'C# · WPF / UWP', 'C / C++', 'Java', 'Excel VBA'] },
    { label: '설계·실험', items: ['SolidWorks', 'HFSS', 'NI Multisim', '3D 프린팅', '레이저 커팅', '오실로스코프·함수발생기·멀티미터'] },
    { label: '언어', items: ['한국어 · 모국어', '영어 · 전문 업무 가능', '일본어 · 일상 회화', '중국어 · 초급'] },
  ],
};
export const getCVCopy = (lang: Locale): CVCopy => lang === 'ko' ? ko : en;
