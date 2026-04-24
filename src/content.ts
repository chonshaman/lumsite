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
        { label: "Company", href: "#company", hasDropdown: false },
        { label: "Pricing", href: "#pricing", hasDropdown: false },
      ],
      productMenu: [
        {
          title: "Prediction Market Platform",
          body: "Give your users a world-class trading experience without the development headache",
          href: "#identity",
          icon: "atomic",
        },
        {
          title: "Admin and Operations System",
          body: "Run your platform with confidence No engineering team required.",
          href: "#admin-operations",
          icon: "dashboard",
        },
        {
          title: "Automated Liquidity System",
          body: "An automated liquidity system built to keep your prediction markets active from day one.",
          href: "#liquidity-system",
          icon: "liquidity",
        },
        {
          title: "AI for Prediction Market",
          body: "AI handles the heavy lifting.",
          href: "#ai-system",
          icon: "stars",
        },
        {
          title: "Referrals and Loyalty System",
          body: "Build-in viral mechanics for growth",
          href: "#growth-system",
          icon: "referrals",
        },
        {
          title: "Others",
          href: "#other-products",
          icon: "nano",
        },
      ],
      cta: "Let's Talk",
    },
    hero: {
      eyebrow: "The Prediction Market as a Service",
      title: "From Zero to Live Platform",
      caption:
        "Full-stack prediction market infrastructure built for operators. Plug in your brand, configure your rules, and go live with institutional-grade tooling from day one.",
      cta: "Contact us",
      image: "/assets/homevisual.webp",
      imageAlt: "Illustrated modular prediction market platform blocks with feature labels",
      badges: [
        "Fully White-Label Experience",
        "Built-In Trading Engine",
        "Comprehensive Trading Experience",
        "Community-Led Growth",
        "Frictionless Deposits",
      ],
    },
    coreFeatures: {
      storyTitle: "Your Platform, Your Identity",
      storyBody: "Give your users a world-class trading experience without the development headache",
      items: [
        {
          title: "Fully Branded Experience",
          tabTitle: "Fully White-Label Experience",
          body: "Your logo, your colors, your domain. A complete white-label platform with theme options that match your identity.",
          image: "/assets/aggregator-new.webp",
          theme: "green",
          size: "large",
        },
        {
          title: "Built-In Trading Engine",
          tabTitle: "Built-In Trading Engine",
          body: "Provide professional-grade transparency with a fully visible Central Limit Order Book (CLOB). Display real-time bids, asks, and market depth to enable tighter spreads and sophisticated market-making strategies.",
          image: "/assets/tradingengine.webp",
          theme: "charcoal",
          size: "large",
        },
        {
          title: "Secure Smart Contract Settlement",
          tabTitle: "Secure Smart Contract Settlement",
          body: "Deploy automated, smart contract-based resolution logic that ensures every market outcome is verified accurately and settled instantly on-chain, eliminating counterparty risk and guaranteeing trustless payouts.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/smartcontract.webp",
          theme: "violet",
          size: "large",
        },
        {
          title: "Mainnet Tech Stack",
          tabTitle: "Mainnet Tech Stack",
          body: "A \"Web3 Native\" approach. Our blockchain-agnostic architecture aligns with our philosophy of \"Enterprise Stability Meets Emerging Tech\".\n\nSupporting: Polygon, Base, BSC, Solana, EVM L2s",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/techstack.webp",
          theme: "blue",
          size: "compact",
        },
        {
          title: "Multi-Chain Bridging and Swap",
          tabTitle: "Multi-Chain Bridging and Swap",
          body: "Accept various cryptocurrencies for deposits and withdrawals. Lower the barrier to entry for new users.",
          image: "/assets/multichain.webp",
          theme: "sky",
          size: "compact",
        },
        {
          title: "User Generated Markets",
          tabTitle: "User Generated Markets",
          body: "Let your users propose and fund their own markets. Turn your audience into active participants, not just traders.",
          image: "/assets/ledgrowth.webp",
          theme: "red",
          size: "compact",
        },
      ],
    },
    howItWorks: {
      title: "How market operations work",
      highlightTitle: "Admin and Operations System",
      highlightStatement: "Run your platform with confidence\nNo engineering team required.",
      highlightCaption: "We provide a complete back-office suite to manage liquidity, users, and settlement.",
      dashboard: {
        adminRole: "Super Admin",
        adminName: "admin",
        title: "Dashboard Report",
        subtitle: "Overview of all market making performance metrics",
        status: "Live",
        updated: "Updated just now",
        refresh: "Refresh",
        sections: [
          {
            title: "Financial Performance",
            metricCount: "5 metrics",
            cards: [
              { title: "Total Realized PnL", body: "Realized profit/loss across all MM accounts", value: "-$51.74", trend: "down", delta: "12.4%", accent: "rose" },
              { title: "Unrealized PnL", body: "Unrealized profit/loss across all MM accounts", value: "-$203.18", trend: "down", delta: "8.7%", accent: "rose" },
              { title: "Trading Volume", body: "Total USD traded across all MM markets", value: "$4,871.22", trend: "up", delta: "34.2%", accent: "blue" },
              { title: "Redeemed / Merged", body: "Total USD redeemed/merged by MM accounts", value: "$347.09", trend: "up", delta: "6.1%", accent: "green" },
              { title: "Order Filled", body: "Total USD filled by internal bot across all MM accounts", value: "$589.33", trend: "up", delta: "19.8%", accent: "violet" },
            ],
          },
          {
            title: "Capital Management",
            metricCount: "4 metrics",
            cards: [
              { title: "Total MM Capital", body: "Available balance + open orders + position cost", value: "$1,284.67", trend: "up", delta: "2.3%", accent: "amber" },
              { title: "Available Balance", body: "Total available USD for trading", value: "$762.44", trend: "flat", delta: "0.1%", accent: "green" },
              { title: "Total Position Cost", body: "Sum of entry bet amount across all MM accounts", value: "$218.85", trend: "down", delta: "3.4%", accent: "blue" },
              { title: "Total Open Orders", body: "Total USD value of open orders across all MM accounts", value: "$303.38", trend: "up", delta: "11.7%", accent: "violet" },
            ],
          },
          {
            title: "Market Statistics",
            metricCount: "3 metrics",
            cards: [
              { title: "Total Seeded Markets", body: "Total number of markets seeded by MM", value: "117", trend: "up", delta: "26.1%", accent: "rose" },
              { title: "Live Seeded Markets", body: "Number of seeded markets currently live", value: "68", trend: "live", delta: "Active now", accent: "green" },
              { title: "Closed Seeded Markets", body: "Number of seeded markets closed/resolved", value: "49", trend: "flat", delta: "Closed", accent: "rose" },
            ],
          },
        ],
      },
      steps: [
        { title: "Create", body: "Supporting Administration, Users, and AI generates markets " },
        { title: "Publish", body: "Multi-step market verification launch process, and fully automated market launch assisted with AI" },
        { title: "Financial Management", body: "Financial management and accounting system" },
      ],
      cards: [
        {
          title: "Team Permission",
          body: "Control who on your team can approve markets, manage users, or change settings. Role-based access so the right people have the right controls.",
        },
        {
          title: "Platform Analytics",
          body: "Dashboard with the numbers that matter: trading volume, user growth, active markets, and much more — tracked daily, weekly, and over time.",
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
          title: "Automated Liquidity System",
          kicker: "An automated liquidity system built to keep your prediction markets active from day one.",
          body: "",
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
            {
              title: "Performance Report",
              body: "One dashboard. Total volume, realized PnL, ROI, and market stats — all at a glance.",
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
    otherProducts: {
      title: "Products",
      body: "More than prediction markets - Expand your platform's capabilities.",
      items: [
        {
          title: "Prediction Market",
          body: "A prediction market platform built for creators and operators.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/xpredi.webp",
        },
        {
          title: "Token Swap Platform",
          body: "An exchange platform for users to trade tokens directly on-chain. An additional product line beyond prediction markets.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/swap.webp",
        },
        {
          title: "Cross-Chain Bridge",
          body: "Let users move funds across different blockchains seamlessly.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/bridge%20(1).webp",
        },
        {
          title: "AI Analysis",
          body: "AI research engine for prediction platforms, helping users make informed decisions with real-time, evidence-backed analysis.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/aiana.webp",
        },
      ],
    },
    globalCollective: {
      title: "Global Engineering Collective",
      body: [
        "Operating across the United States, South Korea, Vietnam, and Hong Kong, we specialize in bridging the gap between enterprise stability and emerging technologies.",
        "Backed by a leadership team with decades of combined experience in building and launching web3 Dapps, Prediction markets, Wallets, Bridges, DEX and mainnet chain, we deliver infrastructure designed for mass adoption. We don't just write code; we architect solutions with structural integrity that perform under the pressure of millions of concurrent users.",
      ],
      flags: [
        { code: "US", label: "United States", emoji: "🇺🇸" },
        { code: "HK", label: "Hong Kong", emoji: "🇭🇰" },
        { code: "KR", label: "South Korea", emoji: "🇰🇷" },
        { code: "VN", label: "Vietnam", emoji: "🇻🇳" },
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
            "Multi-Chain Onramp",
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
        { label: "회사", href: "#company", hasDropdown: false },
        { label: "요금제", href: "#pricing", hasDropdown: false },
      ],
      productMenu: [
        {
          title: "Prediction Market Platform",
          body: "개발 부담 없이 사용자에게 최고 수준의 거래 경험을 제공합니다.",
          href: "#identity",
          icon: "atomic",
        },
        {
          title: "관리자 및 운영 시스템",
          body: "개발팀 없이도 안정적으로 플랫폼을 운영하세요.",
          href: "#admin-operations",
          icon: "dashboard",
        },
        {
          title: "자동화된 유동성 시스템",
          body: "예측 시장이 첫날부터 활발하게 운영되도록 설계된 자동화 유동성 시스템입니다.",
          href: "#liquidity-system",
          icon: "liquidity",
        },
        {
          title: "예측 시장을 위한 AI",
          body: "번거롭고 복잡한 작업은 AI가 처리합니다.",
          href: "#ai-system",
          icon: "stars",
        },
        {
          title: "추천 및 로열티 시스템",
          body: "성장을 위한 내장형 바이럴 메커니즘",
          href: "#growth-system",
          icon: "referrals",
        },
        {
          title: "기타",
          href: "#other-products",
          icon: "nano",
        },
      ],
      cta: "문의하기",
    },
    hero: {
      eyebrow: "자사 브랜드로, 원하는 방식 그대로",
      title: "Prediction Market을 론칭하세요",
      caption:
        "운영사를 위한 풀스택 prediction market 인프라입니다. 브랜드를 연결하고, 규칙을 설정하고, 기관급 운영 도구와 함께 첫날부터 바로 서비스를 시작하세요.",
      cta: "문의하기",
      image: "/assets/homevisual.webp",
      imageAlt: "기능 라벨이 붙은 모듈형 prediction market 플랫폼 일러스트",
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
          tabTitle: "완벽한 White-Label 경험",
          body: "귀사의 로고, 브랜드 컬러, 도메인을 그대로 사용하세요. 브랜드 아이덴티티에 맞는 테마 옵션을 제공하는 완벽한 white-label 플랫폼입니다.",
          image: "/assets/aggregator-new.webp",
          theme: "green",
          size: "large",
        },
        {
          title: "자체 내장된 트레이딩 엔진",
          tabTitle: "자체 내장된 트레이딩 엔진",
          body: "완전히 공개된 Central Limit Order Book(CLOB)으로 기관 수준의 투명성을 제공합니다. 실시간 bid, ask, 시장 깊이를 노출해 더 촘촘한 스프레드와 정교한 마켓 메이킹 전략을 지원합니다.",
          image: "/assets/tradingengine.webp",
          theme: "charcoal",
          size: "large",
        },
        {
          title: "안전한 스마트 컨트랙트 정산",
          tabTitle: "안전한 스마트 컨트랙트 정산",
          body: "자동화된 스마트 컨트랙트 기반 결과 처리 로직으로 모든 시장 결과를 정확하게 검증하고 즉시 on-chain 정산합니다. 거래 상대방 리스크를 없애고 신뢰 가능한 자동 지급을 보장합니다.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/smartcontract.webp",
          theme: "violet",
          size: "large",
        },
        {
          title: "메인넷 기술 스택",
          tabTitle: "메인넷 기술 스택",
          body: "\"Web3 Native\" 접근 방식입니다. 블록체인에 종속되지 않는 아키텍처는 \"Enterprise Stability Meets Emerging Tech\" 철학에 맞춰 설계되었습니다.\n\n지원: Polygon, Base, BSC, Solana, EVM L2s",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/techstack.webp",
          theme: "blue",
          size: "compact",
        },
        {
          title: "멀티체인 브릿지 및 스왑",
          tabTitle: "멀티체인 브릿지 및 스왑",
          body: "다양한 암호화폐 입출금을 지원합니다. 신규 사용자의 진입 장벽을 크게 낮출 수 있습니다.",
          image: "/assets/multichain.webp",
          theme: "sky",
          size: "compact",
        },
        {
          title: "사용자 생성 시장",
          tabTitle: "사용자 생성 시장",
          body: "사용자가 직접 시장을 제안하고 자금을 조달할 수 있습니다. 단순한 거래자를 넘어 적극적인 생태계 참여자로 전환하세요.",
          image: "/assets/ledgrowth.webp",
          theme: "red",
          size: "compact",
        },
      ],
    },
    howItWorks: {
      title: "플랫폼 운영 및 관리자 백오피스",
      highlightTitle: "관리자 및 운영 시스템",
      highlightStatement: "직관적인 관리 흐름으로\n시장을 안정적으로 운영하세요.",
      highlightCaption: "유동성, 사용자, 정산을 관리할 수 있는 완전한 백오피스 제품군을 제공합니다.",
      dashboard: {
        adminRole: "슈퍼 관리자",
        adminName: "admin",
        title: "Dashboard Report",
        subtitle: "마켓 메이킹 성과 지표를 한눈에 볼 수 있는 운영 리포트",
        status: "Live",
        updated: "방금 업데이트됨",
        refresh: "새로고침",
        sections: [
          {
            title: "재무 성과",
            metricCount: "5개 지표",
            cards: [
              { title: "총 실현 손익", body: "전체 MM 계정 기준 실현 손익", value: "-$51.74", trend: "down", delta: "12.4%", accent: "rose" },
              { title: "미실현 손익", body: "전체 MM 계정 기준 미실현 손익", value: "-$203.18", trend: "down", delta: "8.7%", accent: "rose" },
              { title: "거래량", body: "전체 MM 마켓 기준 총 USD 거래량", value: "$4,871.22", trend: "up", delta: "34.2%", accent: "blue" },
              { title: "상환 / 병합", body: "MM 계정 기준 총 상환/병합 USD", value: "$347.09", trend: "up", delta: "6.1%", accent: "green" },
              { title: "체결 주문", body: "내부 봇이 체결한 총 USD 주문 규모", value: "$589.33", trend: "up", delta: "19.8%", accent: "violet" },
            ],
          },
          {
            title: "자본 관리",
            metricCount: "4개 지표",
            cards: [
              { title: "총 MM 자본", body: "가용 잔고 + 오픈 주문 + 포지션 비용", value: "$1,284.67", trend: "up", delta: "2.3%", accent: "amber" },
              { title: "가용 잔고", body: "트레이딩에 사용 가능한 총 USD 잔고", value: "$762.44", trend: "flat", delta: "0.1%", accent: "green" },
              { title: "총 포지션 비용", body: "전체 MM 계정의 진입 금액 합계", value: "$218.85", trend: "down", delta: "3.4%", accent: "blue" },
              { title: "총 오픈 주문", body: "전체 MM 계정의 오픈 주문 총 USD 가치", value: "$303.38", trend: "up", delta: "11.7%", accent: "violet" },
            ],
          },
          {
            title: "마켓 통계",
            metricCount: "3개 지표",
            cards: [
              { title: "총 시드 마켓 수", body: "MM이 시드한 전체 마켓 수", value: "117", trend: "up", delta: "26.1%", accent: "rose" },
              { title: "운영 중인 시드 마켓", body: "현재 라이브 상태의 시드 마켓 수", value: "68", trend: "live", delta: "운영 중", accent: "green" },
              { title: "종료된 시드 마켓", body: "종료/정산 완료된 시드 마켓 수", value: "49", trend: "flat", delta: "종료됨", accent: "rose" },
            ],
          },
        ],
      },
      steps: [
        { title: "생성", body: "관리 기능을 지원하며, 사용자와 AI가 시장을 생성합니다." },
        { title: "게시", body: "다단계 시장 검증 프로세스와 AI 지원 자동 게시 프로세스를 제공합니다." },
        { title: "재무 관리", body: "재무 관리 및 회계 시스템" },
      ],
      cards: [
        {
          title: "팀 권한 관리",
          body: "시장 승인, 사용자 관리, 설정 변경 등의 권한을 팀원별로 제어할 수 있습니다. 역할 기반 접근 제어를 통해 적합한 담당자에게 알맞은 권한을 부여하세요.",
        },
        {
          title: "플랫폼 분석",
          body: "거래량, 사용자 증가, 활성 시장 수 등 핵심 지표와 그 이상을 일간, 주간, 장기 기준으로 추적할 수 있습니다.",
        },
        {
          title: "전체 감사 추적",
          body: "누가 시장을 생성했고, 누가 승인했고, 누가 처리했는지 모든 작업이 기록됩니다. 규정 준수를 위한 완전한 운영 투명성을 제공합니다.",
        },
      ],
    },
    operations: {
      sections: [
        {
          title: "자동화된 유동성 시스템",
          kicker: "예측 시장이 첫날부터 활발하게 운영되도록 설계된 자동화 유동성 시스템입니다.",
          body: "",
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
            {
              title: "성과 리포트",
              body: "하나의 dashboard에서 총 거래량, 실현 PnL, ROI, 시장 통계를 한눈에 확인할 수 있습니다.",
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
    otherProducts: {
      title: "Products",
      body: "예측 시장을 넘어 플랫폼의 기능을 확장하세요.",
      items: [
        {
          title: "Prediction Market",
          body: "크리에이터와 운영사를 위해 설계된 prediction market 플랫폼입니다.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/xpredi.webp",
        },
        {
          title: "Token Swap Platform",
          body: "사용자가 온체인에서 직접 토큰을 거래할 수 있는 교환 플랫폼입니다. prediction market을 넘어서는 추가 제품 라인입니다.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/swap.webp",
        },
        {
          title: "Cross-Chain Bridge",
          body: "사용자가 서로 다른 블록체인 간에 자산을 자연스럽게 이동할 수 있도록 지원합니다.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/bridge%20(1).webp",
        },
        {
          title: "AI Analysis",
          body: "prediction platform을 위한 AI 리서치 엔진으로, 실시간 근거 기반 분석을 통해 사용자의 의사결정을 돕습니다.",
          image: "https://rkctlxkchciefjtrwzht.supabase.co/storage/v1/object/public/lum/aiana.webp",
        },
      ],
    },
    globalCollective: {
      title: "글로벌 엔지니어링 컬렉티브",
      body: [
        "미국, 한국, 베트남, 홍콩 전역에서 운영하며, 엔터프라이즈 안정성과 새로운 기술 사이의 간극을 메우는 데 집중하고 있습니다.",
        "웹3 디앱, 예측 시장, 지갑, 브리지, DEX, 메인넷 체인을 구축하고 출시해 온 수십 년의 경험을 갖춘 리더십 팀을 바탕으로, 대규모 채택을 위한 인프라를 제공합니다. 우리는 단순히 코드를 작성하지 않고, 수백만 동시 사용자의 부하에서도 견디는 구조적 완성도를 갖춘 솔루션을 설계합니다.",
      ],
      flags: [
        { code: "US", label: "미국", emoji: "🇺🇸" },
        { code: "HK", label: "홍콩", emoji: "🇭🇰" },
        { code: "KR", label: "대한민국", emoji: "🇰🇷" },
        { code: "VN", label: "베트남", emoji: "🇻🇳" },
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
