import type { Locale } from '../lib/i18n';

// Dated CV/Resume sources; the reviewed content collections supply current
// project descriptions and publication records separately.
export interface CVRecord { title: string; organization: string; period: string; description: string; }
interface CVCopy {
  earlierResearch: CVRecord[]; employment: CVRecord[]; teaching: CVRecord[]; awards: CVRecord[];
  skills: { label: string; items: string[] }[];
}
const en: CVCopy = {
  earlierResearch: [
    { title: 'CLOC Unnatural Subspace System Identification', organization: 'SIPLAB, Georgia Institute of Technology · Christopher J. Rozell', period: 'Spring 2024', description: 'Worked on a computational testbench for optical control of neural populations, including recurrent neural-network and opsin-dynamics modeling.' },
    { title: 'Undergraduate Research Assistant', organization: 'NICA Lab, KAIST', period: 'Summer 2020', description: 'Developed an approach to neuron segmentation in microscopy images and studied convolutional neural networks.' },
  ],
  employment: [
    { title: 'Software Engineer Intern', organization: 'Dong Il Vision · Anyang, South Korea', period: 'Jun–Aug 2023', description: 'Developed a C# WPF application for annotating object locations in images for a machine-learning computer-vision pipeline.' },
    { title: 'Human Resources Intern', organization: 'Dong Il Technology LTD · Hwaseong, South Korea', period: 'Jun–Aug 2018', description: 'Built Excel VBA automation to generate and distribute employee performance-evaluation sheets.' },
  ],
  teaching: [
    { title: 'ECE Tutor', organization: 'Georgia Institute of Technology', period: 'Spring 2024', description: 'Tutored introductory signal processing, circuit analysis, digital system design, and engineering software design.' },
    { title: 'Hive Peer Instructor', organization: 'The Hive Makerspace, Georgia Institute of Technology', period: 'Spring 2024', description: 'Supported laser-cutter and 3D-printer users and led a workshop on fabricating hometown maps.' },
    { title: 'Introduction to Programming Teaching Assistant', organization: 'KAIST', period: 'Spring 2020', description: 'Supported programming labs and graded assignments.' },
    { title: 'Programming and Calculus Tutor', organization: 'KAIST', period: '2019', description: 'Tutored Introduction to Programming in spring and Calculus I in fall.' },
  ],
  awards: [
    { title: 'Roger Webb Award — ECE Senior Scholar Awards', organization: 'Georgia Institute of Technology', period: 'Spring 2025', description: '' },
    { title: 'Grand Prize, KAIST Makerathon', organization: 'KAIST · When to Eat team leader', period: 'Summer 2024', description: 'First place; ₩2,500,000 team award.' },
    { title: 'Dean’s List', organization: 'Georgia Institute of Technology', period: '2023–2024', description: 'Spring 2023, Fall 2023, Spring 2024.' },
    { title: 'Dean’s List', organization: 'KAIST', period: '2018 / 2022', description: 'Spring 2018, Fall 2022.' },
  ],
  skills: [
    { label: 'Programming', items: ['MATLAB', 'Python · PyMC, NumPy, SciPy, pandas, PyTorch', 'C# · WPF / UWP', 'C / C++', 'Java', 'Excel VBA'] },
    { label: 'Design & laboratory', items: ['SolidWorks', 'HFSS', 'NI Multisim', '3D printing', 'Laser cutting', 'Oscilloscopes, function generators, multimeters'] },
    { label: 'Languages', items: ['Korean · native', 'English · full professional proficiency', 'Japanese · conversational'] },
  ],
};
const ko: CVCopy = {
  earlierResearch: [
    { title: 'CLOC Unnatural Subspace System Identification', organization: 'SIPLAB, Georgia Institute of Technology · Christopher J. Rozell', period: '2024년 봄', description: '신경 집단의 광학적 제어를 위한 계산 실험 환경을 연구하고, 순환 신경망과 옵신 동역학 모델링을 다뤘습니다.' },
    { title: '학부 연구원', organization: 'NICA Lab, KAIST', period: '2020년 여름', description: '현미경 영상에서 뉴런을 분할하는 방법을 개발하고 합성곱 신경망을 공부했습니다.' },
  ],
  employment: [
    { title: 'Software Engineer Intern', organization: 'Dong Il Vision · Anyang, South Korea', period: '2023.06–08', description: '컴퓨터 비전 학습 자료를 위한 이미지 내 객체 위치 라벨링 프로그램을 C# WPF로 개발했습니다.' },
    { title: '인사 부문 인턴', organization: 'Dong Il Technology LTD · Hwaseong, South Korea', period: '2018.06–08', description: '직원 평가서를 생성하고 배포하는 업무를 Excel VBA로 자동화했습니다.' },
  ],
  teaching: [
    { title: 'ECE Tutor', organization: 'Georgia Institute of Technology', period: '2024년 봄', description: '기초 신호처리, 회로해석, 디지털 시스템 설계와 공학 소프트웨어 설계를 지도했습니다.' },
    { title: 'Hive Peer Instructor', organization: 'The Hive Makerspace, Georgia Institute of Technology', period: '2024년 봄', description: '레이저 커터와 3D 프린터 사용을 지원하고, 고향 지도를 제작하는 워크숍을 진행했습니다.' },
    { title: '프로그래밍 기초 조교', organization: 'KAIST', period: '2020년 봄', description: '프로그래밍 실습을 지원하고 과제를 채점했습니다.' },
    { title: '프로그래밍·미적분학 튜터', organization: 'KAIST', period: '2019년', description: '봄 학기에는 프로그래밍 기초, 가을 학기에는 미적분학 I을 지도했습니다.' },
  ],
  awards: [
    { title: 'Roger Webb Award — ECE Senior Scholar Awards', organization: 'Georgia Institute of Technology', period: '2025년 봄', description: '' },
    { title: '2024 KAIST Makerathon 대상', organization: 'KAIST · When to Eat 팀장', period: '2024년 여름', description: '1위, 팀 상금 2,500,000원.' },
    { title: 'Dean’s List', organization: 'Georgia Institute of Technology', period: '2023–2024', description: '2023년 봄·가을, 2024년 봄 학기.' },
    { title: 'Dean’s List', organization: 'KAIST', period: '2018 / 2022', description: '2018년 봄, 2022년 가을 학기.' },
  ],
  skills: [
    { label: '프로그래밍', items: ['MATLAB', 'Python · PyMC, NumPy, SciPy, pandas, PyTorch', 'C# · WPF / UWP', 'C / C++', 'Java', 'Excel VBA'] },
    { label: '설계·실험', items: ['SolidWorks', 'HFSS', 'NI Multisim', '3D 프린팅', '레이저 커팅', '오실로스코프·함수발생기·멀티미터'] },
    { label: '언어', items: ['한국어 · 모국어', '영어 · 전문 업무 가능', '일본어 · 일상 회화'] },
  ],
};
export const getCVCopy = (lang: Locale): CVCopy => lang === 'ko' ? ko : en;
