export const locales = {
  en: {
    ui: {
      skipToContent: "Skip to content",
      primaryNavLabel: "Primary navigation",
      featureTabsLabel: "Feature categories",
      productFeaturesLabel: "Product features",
      operationsLabel: "Operational platform features",
      howTitle: "How market operations work",
      languageLabel: "Language",
      languages: {
        en: "ENG",
        kr: "KR",
      },
      socialHandle: "@lumberworks",
      learnMoreAbout: "Learn more about",
      pricingBookDemo: "Book",
      homeAriaLabel: "Lumberworks home",
    },
    nav: {
      brand: "Lumberworks",
      logoAlt: "Lumberworks",
      links: [
        { label: "Products", href: "#products", hasDropdown: true },
        { label: "Company", href: "#company", hasDropdown: true },
        { label: "Pricing", href: "#pricing", hasDropdown: false },
      ],
      cta: "Let's Talk",
    },
    hero: {
      eyebrow: "The Prediction Market as a Service",
      title: "From Zero to Live Platform",
      cta: "Contact us",
      image: "/assets/homevisual.webp",
      imageAlt: "Illustrated modular prediction market platform blocks with feature labels",
      securityTitle: "Security",
      securityCopy: "Top of the line information security practices",
      badges: [
        "Fully White-Label Experience",
        "Built-In Trading Engine",
        "Comprehensive Trading Experience",
        "Community-Led Growth",
        "Multi-chain Onramp",
      ],
    },
    coreFeatures: {
      storyTitle: "Your Platform, Your Identity",
      storyBody: "Give your users a world-class trading experience without the development headache",
      items: [
        {
          title: "Fully Branded Experience",
          tabTitle: "Fully Branded Experience",
          body: "Your logo, your colors, your domain. A complete white-label platform with theme options that match your identity.",
          image: "/assets/aggregator-new.webp",
        },
        {
          title: "Built-In Trading Engine",
          tabTitle: "Built-In Trading Engine",
          body: "A proven, high-performance trading system with secure on-chain settlement. Your users get real price discovery and real liquidity from day one.",
          image: "/assets/tradingengine.webp",
        },
        {
          title: "End-to-End Trading Experience",
          tabTitle: "Comprehensive Trading Experience",
          body: "From discovery to rewards. A seamless journey designed for continuous engagement.",
          image: "/assets/endtoend.webp",
        },
        {
          title: "Community Led Growth",
          tabTitle: "Community-Led Growth",
          body: "Let your users propose and fund their own markets. Turn your audience into active participants, not just traders.",
          image: "/assets/ledgrowth.webp",
        },
        {
          title: "Multi-Chain Onramp",
          tabTitle: "Frictionless Deposits",
          body: "Accept various tokens and payment methods. Lower the barrier to entry for new users.",
          image: "/assets/multichain.webp",
        },
      ],
    },
    howItWorks: {
      title: "How market operations work",
      highlightTitle: "Effortless Operational Control",
      highlightStatement: "Run your platform with confidence\nNo engineering team required.",
      steps: [
        { title: "Create", body: "User and AI generates market idea" },
        { title: "Publish", body: "Market goes live" },
        { title: "Resolve", body: "Full audit trail log outcome" },
      ],
      cards: [
        {
          title: "Team Permission",
          body: "Control who on your team can approve markets, manage users, or change settings. Role-based access so the right people have the right controls.",
        },
        {
          title: "Platform Analytics",
          body: "Dashboard with the numbers that matter: trading volume, user growth, active markets - tracked daily, weekly, and over time.",
        },
        {
          title: "Full Audit Trail",
          body: "Every action is logged. Who created a market, who approved it, who resolved it. Complete operational transparency for compliance.",
        },
      ],
    },
    operations: {
      sections: [
        {
          title: "Built-In Liquidity",
          kicker: "Active markets from launch.",
          body: "No waiting for users to show up.",
          image: "/assets/imageliquid.webp",
          cards: [
            {
              title: "Automated Liquidity",
              body: "Your markets stay active with built-in automated trading that keeps order books healthy and prices responsive.",
            },
            {
              title: "Multi-Account Support",
              body: "Manage liquidity across multiple accounts and wallets for natural, organic-looking market activity.",
            },
            {
              title: "Liquidity Analytics",
              body: "Monitor performance, volume, and capital efficiency across all your markets in real time.",
            },
          ],
        },
        {
          title: "AI handles the heavy lifting",
          image: "/assets/imgasbg.webp",
          cards: [
            {
              title: "Smart Content Screening",
              body: "Every proposal screened before it goes live. AI filters for quality and relevance automatically - less moderation, better markets.",
            },
            {
              title: "Automated Market Resolution",
              body: "Outcomes verified, markets resolved, payouts triggered - all automatically. Faster payouts, lower operation cost.",
            },
            {
              title: "AI-Generated Markets",
              body: "Fresh markets, every day. Automatically generate relevant market ideas from different categories.",
            },
          ],
        },
        {
          title: "Build-in viral mechanics for growth",
          cards: [
            {
              title: "Invite System",
              body: "Invite codes, referral tracking, and rewards for the network that brings you new users.",
            },
            {
              title: "Cross-chain bridge",
              body: "Let users move funds across different blockchains seamlessly.",
            },
            {
              title: "Token Swap",
              body: "A fully functional exchange for users to trade tokens directly on-chain. An additional product line beyond prediction markets.",
            },
            {
              title: "Referral Management",
              body: "Full admin tools for managing referral programs, viewing your referral network, and handling commission payouts.",
            },
            {
              title: "Points & Gamification",
              body: "Reward users for trading, inviting friends, creating markets, and hitting milestones. Turn usage into a game.",
            },
          ],
        },
      ],
    },
    report: {
      cta: "Download Report",
      title: "2026 Prediction Trends",
      tag: "(Free Report)",
      body: "Your strategic roadmap to the prediction market: key trends and operational frameworks for 2026.",
      image: "/assets/placeholder.svg",
    },
    pricing: {
      title: "Everything you need to launch",
      subtitle: "Nothing you need to build",
      body: "Whether it's sports, crypto, politics, entertainment, or corporate forecasting - we provide the complete platform. You bring the audience.",
      plans: [
        {
          name: "Starter",
          price: 50000000,
          image: "/assets/integration.webp",
          features: ["White-label platform", "Trading engine", "Basic admin", "Analytics"],
          cta: "Book a demo",
        },
        {
          name: "Growth",
          price: 100000000,
          image: "/assets/games-api.webp",
          features: ["Automated liquidity", "Referral system", "Points", "Private invite system"],
          cta: "Book a demo",
        },
        {
          name: "Enterprise",
          price: 200000000,
          image: "/assets/enterpriseimage.webp",
          features: [
            "AI features",
            "Payments infra (swap / bridge / multi-deposit)",
            "Developer APIs",
            "Community market creation",
          ],
          cta: "Book a demo",
        },
      ],
    },
    footer: {
      cta: "Let's talk",
      ctaButton: "Contact us",
      columns: [
        {
          title: "Products",
          links: [
            "Fully Branded Experience",
            "Trading Engine",
            "End-to-End Trading Experience",
            "Community Led Growth",
            "Flexible Deposit Options",
          ],
        },
        { title: "Partners", links: ["Liquidity Providers", "Business Partners", "Payment Providers"] },
        {
          title: "Resources",
          links: ["Knowledge Base", "Prediction Market Report Trending 2026", "Events"],
        },
        {
          title: "Company",
          links: ["About Lumberworks", "Brandbook", "Technology Stack", "Careers", "News", "Contact Us"],
        },
      ],
      emailLabel: "Email:",
      email: "business@lumberworks.xyz",
      socialLabel: "Social:",
      socialHandle: "@lumberworks",
      description:
        "Lumberworks has been developing prediction market platforms for over 15 years. Our technology expertise and industry knowledge enable us to power premium prediction brands worldwide.",
      legal: ["Privacy Policy", "Sitemap"],
      copyright: "© 2008-2026 Lumberworks. All Rights Reserved.",
    },
  },
  kr: {
    ui: {
      skipToContent: "본문으로 바로가기",
      primaryNavLabel: "기본 내비게이션",
      featureTabsLabel: "기능 카테고리",
      productFeaturesLabel: "제품 기능",
      operationsLabel: "운영 플랫폼 기능",
      howTitle: "플랫폼 운영 방식",
      languageLabel: "언어",
      languages: {
        en: "ENG",
        kr: "KR",
      },
      socialHandle: "@lumberworks",
      learnMoreAbout: "자세히 보기",
      pricingBookDemo: "상담 신청",
      homeAriaLabel: "Lumberworks 홈",
    },
    nav: {
      brand: "Lumberworks",
      logoAlt: "Lumberworks",
      links: [
        { label: "제품", href: "#products", hasDropdown: true },
        { label: "회사", href: "#company", hasDropdown: true },
        { label: "요금제", href: "#pricing", hasDropdown: false },
      ],
      cta: "문의하기",
    },
    hero: {
      eyebrow: "자사 브랜드로, 원하는 방식 그대로",
      title: "Prediction Market을 론칭하세요",
      cta: "문의하기",
      image: "/assets/homevisual.webp",
      imageAlt: "기능 라벨이 붙은 모듈형 prediction market 플랫폼 일러스트",
      securityTitle: "보안",
      securityCopy: "최고 수준의 정보 보안 체계를 적용합니다",
      badges: [
        "완벽한 브랜드 경험",
        "내장형 트레이딩 엔진",
        "통합 거래 경험",
        "커뮤니티 주도 성장",
        "간편한 입금 경험",
      ],
    },
    coreFeatures: {
      storyTitle: "귀사만의 플랫폼, 귀사만의 브랜드",
      storyBody: "사용자들에게 최고 수준의 거래 경험을 제공하세요.",
      items: [
        {
          title: "완벽한 브랜드 맞춤 설정",
          tabTitle: "완벽한 브랜드 맞춤 설정",
          body: "귀사의 로고, 브랜드 컬러, 도메인을 그대로 사용하세요. 브랜드 아이덴티티에 맞는 테마 옵션을 제공하는 완벽한 white-label 플랫폼입니다.",
          image: "/assets/aggregator-new.webp",
        },
        {
          title: "자체 내장된 트레이딩 엔진",
          tabTitle: "자체 내장된 트레이딩 엔진",
          body: "안전한 on-chain 결제를 지원하는 검증된 고성능 거래 시스템입니다. 출시 첫날부터 사용자에게 정확한 시장 가격 형성과 실질적인 유동성을 제공합니다.",
          image: "/assets/tradingengine.webp",
        },
        {
          title: "통합 거래 경험",
          tabTitle: "통합 거래 경험",
          body: "포트폴리오 추적, 시장 탐색, 관심 목록, 보상 등 사용자의 첫 방문부터 지속적인 참여를 유도하는 데 필요한 모든 기능을 갖췄습니다.",
          image: "/assets/endtoend.webp",
        },
        {
          title: "커뮤니티 주도형 시장",
          tabTitle: "커뮤니티 주도형 시장",
          body: "사용자가 직접 시장을 제안하고 자금을 조달할 수 있습니다. 단순한 거래자를 넘어 적극적인 생태계 참여자로 만드세요.",
          image: "/assets/ledgrowth.webp",
        },
        {
          title: "다양한 입금 옵션",
          tabTitle: "다양한 입금 옵션",
          body: "여러 종류의 token과 결제 방식을 지원하여 신규 사용자의 진입 장벽을 대폭 낮춥니다.",
          image: "/assets/multichain.webp",
        },
      ],
    },
    howItWorks: {
      title: "플랫폼 운영 및 관리자 백오피스",
      highlightTitle: "개발팀 없이도 안정적으로 플랫폼을 운영하세요.",
      highlightStatement: "직관적인 관리 흐름으로\n시장을 안정적으로 운영하세요.",
      steps: [
        { title: "시장 생성", body: "사용자와 AI가 시장 아이디어를 생성합니다" },
        { title: "게시", body: "승인된 시장이 즉시 라이브됩니다" },
        { title: "결과 처리", body: "모든 처리 내역이 audit trail로 기록됩니다" },
      ],
      cards: [
        {
          title: "팀 권한 관리",
          body: "시장 승인, 사용자 관리, 설정 변경 등의 권한을 팀원별로 제어할 수 있습니다. 역할 기반 접근 제어를 통해 적합한 담당자에게 알맞은 권한을 부여하세요.",
        },
        {
          title: "플랫폼 analytics",
          body: "거래량, 사용자 증가율, 활성 시장 수 등 핵심 지표를 보여주는 dashboard를 통해 일간, 주간 및 장기적인 성과를 추적할 수 있습니다.",
        },
        {
          title: "전체 감사 추적",
          body: "누가 시장을 생성, 승인, 처리했는지 모든 활동 내역이 기록됩니다. 컴플라이언스를 위한 완벽한 운영 투명성을 보장합니다.",
        },
      ],
    },
    operations: {
      sections: [
        {
          title: "자체 내장 유동성",
          kicker: "출시와 동시에 활성화되는 시장",
          body: "사용자가 모일 때까지 기다릴 필요가 없습니다.",
          image: "/assets/imageliquid.webp",
          cards: [
            {
              title: "자동화된 유동성 공급",
              body: "내장된 자동 거래 시스템이 order book을 탄탄하게 유지하고 즉각적으로 가격을 반영하여 시장을 활성화합니다.",
            },
            {
              title: "다중 계정 지원",
              body: "여러 계정과 지갑에 걸쳐 유동성을 관리하여 자연스럽고 유기적인 시장 활동을 조성합니다.",
            },
            {
              title: "유동성 analytics",
              body: "모든 시장의 성과, 거래량, 자본 효율성을 실시간으로 모니터링하세요.",
            },
          ],
        },
        {
          title: "번거롭고 복잡한 작업은 AI에게 맡기세요",
          image: "/assets/imgasbg.webp",
          cards: [
            {
              title: "스마트 콘텐츠 필터링",
              body: "시장 제안이 게시되기 전, AI가 품질과 적합성을 자동 검토합니다. 수동 모니터링의 수고를 덜고 불량 시장 생성을 사전에 차단합니다.",
            },
            {
              title: "자동화된 시장 결과 처리",
              body: "AI가 신뢰할 수 있는 데이터 소스를 기반으로 결과를 검증하고 시장을 자동 종료합니다. 정산 속도는 높이고 운영 비용은 낮춥니다.",
            },
            {
              title: "AI 자동 생성 시장",
              body: "뉴스, 스포츠, 암호화폐, 글로벌 이슈 등에서 적합한 시장 아이디어를 자동 생성합니다. 수작업 없이도 항상 최신 트렌드의 콘텐츠를 유지할 수 있습니다.",
            },
          ],
        },
        {
          title: "사용자 기반 확장을 위한 내장형 그로스 툴",
          cards: [
            {
              title: "초대 시스템",
              body: "모든 사용자가 귀사의 마케팅 채널이 됩니다. 초대 코드, referral 추적, 신규 유저 유입에 대한 보상 네트워크를 제공합니다.",
            },
            {
              title: "크로스체인 bridge",
              body: "사용자가 서로 다른 블록체인 간에 자산을 매끄럽게 이동할 수 있도록 지원합니다.",
            },
            {
              title: "token swap 플랫폼",
              body: "사용자가 on-chain에서 직접 token을 교환할 수 있는 완벽한 기능의 거래소입니다. Prediction Market을 넘어선 추가적인 프로덕트 라인업을 구축하세요.",
            },
            {
              title: "referral 관리",
              body: "referral 프로그램 관리, 전체 네트워크 조회, 수수료 지급 처리 등을 완벽하게 제어할 수 있는 관리자 도구를 제공합니다.",
            },
            {
              title: "points 및 gamification",
              body: "거래, 친구 초대, 시장 생성 및 목표 달성 시 사용자에게 보상을 지급합니다. 플랫폼 이용을 하나의 즐거운 게임처럼 만드세요.",
            },
          ],
        },
      ],
    },
    report: {
      cta: "리포트 다운로드",
      title: "2026 Prediction Trends",
      tag: "(무료 리포트)",
      body: "Prediction market의 핵심 트렌드와 운영 프레임워크를 정리한 전략 가이드입니다.",
      image: "/assets/placeholder.svg",
    },
    pricing: {
      title: "론칭에 필요한 모든 것",
      subtitle: "직접 개발할 필요는 없습니다",
      body: "스포츠, 암호화폐, 정치, 엔터테인먼트, 비즈니스 예측 등 분야를 막론하고 완벽한 인프라를 제공합니다. 귀사는 오직 사용자 확보에만 집중하세요.",
      plans: [
        {
          name: "Starter",
          price: 50000000,
          priceLabel: "5천만원",
          image: "/assets/integration.webp",
          features: ["White-label 플랫폼", "트레이딩 엔진", "기본 관리자 기능", "analytics"],
          cta: "상담 신청",
        },
        {
          name: "Growth",
          price: 100000000,
          priceLabel: "1억원",
          image: "/assets/games-api.webp",
          features: ["자동화된 유동성 공급", "referral 시스템", "points", "초대 시스템"],
          cta: "상담 신청",
        },
        {
          name: "Enterprise",
          price: 200000000,
          priceLabel: "2억원",
          image: "/assets/enterpriseimage.webp",
          features: ["AI 기능", "결제 인프라", "개발자 API", "커뮤니티 주도형 시장 생성"],
          cta: "상담 신청",
        },
      ],
    },
    footer: {
      cta: "문의해 주세요",
      ctaButton: "문의하기",
      columns: [
        {
          title: "제품",
          links: ["브랜드 맞춤 플랫폼", "트레이딩 엔진", "통합 거래 경험", "커뮤니티 성장", "입금 옵션"],
        },
        { title: "파트너", links: ["유동성 파트너", "비즈니스 파트너", "결제 파트너"] },
        {
          title: "리소스",
          links: ["지식 베이스", "Prediction Market 리포트 2026", "이벤트"],
        },
        {
          title: "회사",
          links: ["Lumberworks 소개", "브랜드북", "기술 스택", "채용", "뉴스", "문의하기"],
        },
      ],
      emailLabel: "이메일:",
      email: "business@lumberworks.xyz",
      socialLabel: "소셜:",
      socialHandle: "@lumberworks",
      description:
        "Lumberworks는 15년 이상 prediction market 플랫폼을 개발해 왔습니다. 축적된 기술력과 업계 이해를 바탕으로 프리미엄 prediction 브랜드를 지원합니다.",
      legal: ["개인정보 처리방침", "사이트맵"],
      copyright: "© 2008-2026 Lumberworks. All Rights Reserved.",
    },
  },
} as const;

export type Locale = keyof typeof locales;
export type SiteContent = (typeof locales)[Locale];
