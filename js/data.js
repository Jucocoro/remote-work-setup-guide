const products = [
    {
        name: "LG 27인치 4K 모니터",
        category: "monitor",
        description: "재택근무에 최적화된 27인치 4K UHD 모니터. IPS 패널로 정확한 색재현과 넓은 시야각을 제공합니다.",
        link: "https://link.coupang.com/a/dqKtvP",
        price: "약 35만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/monitor_placeholder.png"
    },
    {
        name: "삼성 32인치 커브드 모니터",
        category: "monitor",
        description: "몰입감 극대화! 1800R 곡률의 32인치 커브드 모니터로 장시간 작업에도 눈이 편안합니다.",
        link: "https://link.coupang.com/a/dqKtvP",
        price: "약 40만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/monitor_placeholder.png"
    },
    {
        name: "전동 높이조절 스탠딩 데스크",
        category: "desk",
        description: "버튼 하나로 높이 조절 가능한 프리미엄 스탠딩 책상. 앉아서도, 서서도 편안한 재택근무 환경을 만듭니다.",
        link: "https://www.coupang.com/",
        price: "약 25-40만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/desk_placeholder.png"
    },
    {
        name: "이케아 BEKANT 책상",
        category: "desk",
        description: "가성비 최고! 160x80cm 넓은 작업 공간으로 듀얼 모니터 세팅에 완벽합니다.",
        link: "https://www.coupang.com/",
        price: "약 15-20만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/desk_placeholder.png"
    },
    {
        name: "허먼밀러 에어론 체어",
        category: "chair",
        description: "재택근무 의자의 끝판왕. 12년 보증, 최상급 인체공학 설계로 장시간 앉아도 허리가 편안합니다.",
        link: "https://www.coupang.com/",
        price: "약 150-200만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/chair_placeholder.png"
    },
    {
        name: "시디즈 T50 의자",
        category: "chair",
        description: "한국인 체형에 최적화된 가성비 인체공학 의자. 허먼밀러 대비 1/5 가격에 80% 성능!",
        link: "https://www.coupang.com/",
        price: "약 30-40만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/chair_placeholder.png"
    },
    {
        name: "레오폴드 FC660C 키보드",
        category: "keyboard",
        description: "정전용량 무접점 방식의 프리미엄 키보드. 조용하면서도 정확한 타건감으로 장시간 타이핑에 이상적입니다.",
        link: "https://link.coupang.com/a/dqKi22",
        price: "약 25만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/keyboard_placeholder.png"
    },
    {
        name: "로지텍 MX Keys 키보드",
        category: "keyboard",
        description: "무선 키보드의 베스트셀러! 3대 기기 동시 연결, 스마트 조명 백라이트 탑재.",
        link: "https://link.coupang.com/a/dqKi22",
        price: "약 15만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/keyboard_placeholder.png"
    },
    {
        name: "로지텍 MX Master 3S",
        category: "mouse",
        description: "생산성 마우스의 표준! 정밀한 8K DPI 센서와 무소음 클릭, 7개 버튼 커스터마이징 지원.",
        link: "https://www.coupang.com/",
        price: "약 12만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/mouse_placeholder.png"
    },
    {
        name: "버티컬 무선 마우스",
        category: "mouse",
        description: "손목 터널 증후군 예방! 수직 디자인으로 장시간 사용에도 손목 부담 최소화.",
        link: "https://link.coupang.com/a/dqKy46",
        price: "약 3-5만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/mouse_placeholder.png"
    },
    {
        name: "BenQ 스크린바 램프",
        category: "accessory",
        description: "모니터 위에 걸어 사용하는 LED 램프. 화면 반사 없이 책상만 밝혀 눈의 피로를 줄입니다.",
        link: "https://www.coupang.com/",
        price: "약 10-15만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/lamp_placeholder.png"
    },
    {
        name: "듀얼 모니터 암",
        category: "accessory",
        description: "책상 공간 확보! 2개의 모니터를 자유롭게 배치하고 각도 조절 가능한 듀얼 암.",
        link: "https://www.coupang.com/",
        price: "약 5-10만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/arm_placeholder.png"
    },
    {
        name: "노트북 거치대",
        category: "accessory",
        description: "시선 높이 조절로 목 피로 감소! 알루미늄 재질의 세련된 각도조절 거치대.",
        link: "https://www.coupang.com/",
        price: "약 2-5만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/stand_placeholder.png"
    },
    {
        name: "USB-C 멀티포트 허브",
        category: "accessory",
        description: "노트북 1개 포트로 모니터, 키보드, 마우스 연결! 7-in-1 멀티포트 도킹 스테이션.",
        link: "https://www.coupang.com/",
        price: "약 5-8만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/hub_placeholder.png"
    },
    {
        name: "케이블 정리함",
        category: "accessory",
        description: "지저분한 케이블을 깔끔하게! 책상 아래 부착하는 케이블 정리 박스.",
        link: "https://www.coupang.com/",
        price: "약 1-3만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/cable_placeholder.png"
    },
    {
        name: "소음 차단 헤드셋",
        category: "audio",
        description: "화상회의 필수템! ANC 노이즈 캔슬링과 고음질 마이크로 집에서도 프로처럼.",
        link: "https://www.coupang.com/",
        price: "약 15-30만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/headset_placeholder.png"
    },
    {
        name: "블루투스 스피커폰",
        category: "audio",
        description: "회의실 없어도 OK! 360도 음성 수집, 에코 제거 기능으로 원격 회의 음질 개선.",
        link: "https://www.coupang.com/",
        price: "약 10-20만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/speaker_placeholder.png"
    },
    {
        name: "웹캠 Full HD 1080p",
        category: "audio",
        description: "노트북 기본 카메라를 뛰어넘는 화질! 자동 밝기 조절과 광각 렌즈로 화상회의 품질 향상.",
        link: "https://www.coupang.com/",
        price: "약 5-10만원대",
        image: "https://storage.googleapis.com/gemini-prod/images/webcam_placeholder.png"
    }
];
