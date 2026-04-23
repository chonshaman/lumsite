export const content = {
  nav: {
    brand: "Lumberworks",
    links: ["Products", "Partners", "Company", "Resources", "Knowledge Base", "Events"],
    cta: "Contact us",
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
      "Frictionless Deposits",
    ],
  },
  coreFeatures: [
    {
      title: "Fully Branded Experience",
      tabTitle: "Fully White-Label Experience",
      body: "Your logo, your colors, your domain. A complete white-label platform with theme options that match your identity.",
      image: "/assets/aggregator-new.webp",
    },
    {
      title: "Built-In Trading Engine",
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
  howItWorks: {
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
        body: "Dashboard with the numbers that matter: trading volume, user growth, active markets — tracked daily, weekly, and over time.",
      },
      {
        title: "Full Audit Trail",
        body: "Every action is logged. Who created a market, who approved it, who resolved it. Complete operational transparency for compliance.",
      },
    ],
  },
  operations: {
    eyebrow: "Effortless Operational Control",
    title: "Run your platform with confidence",
    subtitle: "No engineering team required.",
    sections: [
      {
        title: "Built-In Liquidity",
        kicker: "Active markets from launch.",
        body: "No waiting for users to show up.",
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
        cards: [
          {
            title: "Smart Content Screening",
            body: "Every proposal screened before it goes live. AI filters for quality and relevance automatically — less moderation, better markets.",
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
        image: "/assets/integration.webp",
        features: ["White-label platform", "Trading engine", "Basic admin", "Analytics"],
        cta: "Book a demo",
      },
      {
        name: "Growth",
        image: "/assets/games-api.webp",
        features: ["Automated liquidity", "Referral system", "Points", "Private Invite system"],
        cta: "Book a demo",
        featured: true,
      },
      {
        name: "Enterprise",
        image: "/assets/enterpriseimage.webp",
        features: [
          "AI features",
          "Payments infra (swaps/bridge/multi-deposit)",
          "Developer APIs",
          "Community market creation",
        ],
        cta: "Book a demo",
      },
    ],
  },
  footer: {
    cta: "Let's talk",
    columns: [
      {
        title: "Products",
        links: [
          "Fully White-Label Experience",
          "Trading Engine",
          "End-to-End Trading Experience",
          "Community Led Growth",
          "Flexible Deposit Options",
        ],
      },
      { title: "Partners", links: ["Liquidity Providers", "Business Partners", "Payment Providers"] },
      {
        title: "Resources",
        links: ["Knowledge Base", "How to Start: Prediction Market Report Trending 2026", "Events"],
      },
      {
        title: "Company",
        links: ["About Lumberworks", "Brandbook", "Technology Stack", "Careers", "News", "Contact Us"],
      },
    ],
    emailLabel: "Email:",
    email: "business@lumberworks.xyz",
    socialLabel: "Social:",
    description:
      "Lumberworks has been developing Prediction Market Platform for over 15 years. Our technology expertise and industry knowledge enable us to power premium Prediction brands worldwide.",
    legal: ["Privacy Policy", "Sitemap"],
    copyright: "© 2008-2026 Lumberworks. All Rights Reserved.",
  },
} as const;

export type Content = typeof content;
