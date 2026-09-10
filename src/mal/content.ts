export const EMAIL = 'mallastate@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/minimal/';

export const nav = [
  { name: 'Work', to: '/' },
  { name: 'About', to: '/about' },
] as const;

export const work = {
  title: 'Work',
  items: [
    {
      name: 'Mezo Clay Design System',
      headline: 'Converting design debt into product infrastructure',
      desc: 'Built Clay across three product phases: 2,000+ variants, the system behind $200M+ TVL.',
      image: '/images/portfolio/main3.png',
    },
    {
      name: 'BlockFi — Credit Card Rewards (Mobile)',
      headline: 'Scoping and shipping the mobile experience behind the world’s first Bitcoin rewards credit card',
      desc: 'Lead designer, mobile. 50,000+ cardholders in 90 days.',
      image: '/images/portfolio/blockfi-card-rewards.png',
    },
    {
      name: 'Zalando Stories',
      headline: 'Transition tokens for Stories across app and web',
      desc: 'Transition tokens and Reduced Motion fallbacks, replacing a patchwork of one-off animations across the platform.',
      image: '/images/portfolio/zalando-main.png',
    }
  ],
} as const;

export const about = {
  title: 'About',
  origin: {
    heading: 'It’s me. Mal Som.',
    kick: 'About',
    body: [
      'I design and build interfaces myself, from the first sketch to the production component. No handoff.',
      'My recent work has been on products where the UI has to hold up under real complexity: DeFi transaction flows, verifiable-credential identity systems, and a generative AI asset pipeline, screens where getting it wrong costs someone money or time.',
    ],
    aside:
      'Company and client work includes Thesis, Zalando, and Mitte Arts Lab, spanning design systems, motion, accessibility, and generative AI.',
  },
  principles: {
    heading: 'Design with purpose. Keep playing with tools.',
    kick: 'Principles',
    lead: 'You model utility, empathy, and curiosity on the hardest days.',
    items: [
      {
        mood: 'happy',
        base: '#d8ff00',
        label: 'Utility',
        body: '“The utility player doesn’t wait to be handed a position.” Hands-on in design, code, and whatever else the job needs.',
      },
      {
        mood: 'sad',
        base: '#3b5bd9',
        label: 'Empathy',
        body: '“Lead by example. Empathy as default, not a performance.” Be the teammate the project needs.',
      },
    ],
    curiosity:
      'Curiosity. “Always reaching for the next tool.” Tools I pick up on personal time show up in the work by Monday.',
  },
  capabilities: [
    {
      no: '01',
      name: 'Product design · 13 years',
      items: [
        'Hands-on craft across crypto/DeFi, generative AI, and consumer mobile',
        '0→1 builds (AI pipelines, an SSI identity platform, a design system from zero) and iterative work on shipped products',
        'Shipped work measured in negotiation confidence, close rates, and response times',
      ],
    },
    {
      no: '02',
      name: 'Research & testing · 13 years',
      items: [
        'Usability testing and cross-functional accessibility audits (Edmunds, Zalando)',
        'Screen-reader and WCAG validation across diverse user needs',
      ],
    },
    {
      no: '03',
      name: 'Systems & delivery',
      items: [
        'No-code CMS that cut engineering dependency for marketing launches (Zalando)',
        'Design-system release and maintenance workflows (Thesis*)',
        'Component architecture that standardized multi-step transaction flows across a fragmented product (Thesis*)',
      ],
    },
    {
      no: '04',
      name: 'Generative AI · 5 years',
      items: [
        'Stable Diffusion and LoRA fine-tuning for a live marketing-asset pipeline',
        'Published research on bias in AI training data (NeurIPS 2020, 2021)',
      ],
    },
    {
      no: '05',
      name: 'Functional',
      items: [
        'Native, mobile, and web design',
        '0 to 1 product development',
        'Usability testing and accessibility validation',
        'Design systems & governance',
        'Rapid prototyping across code and no-code tools',
      ],
    },
    {
      no: '06',
      name: 'Industries',
      items: [
        'Crypto, DeFi & Web3',
        'Generative AI',
        'Consumer mobile & wearables',
        'E-commerce & marketplaces',
        'Automotive commerce',
        'Social & AR platforms',
        'News & media',
      ],
    },
  ],
  seeking: 'Seeking design engineering roles where I design and ship in the same seat.',
} as const;

export const projects = [
  {
    slug: 'mezo-clay',
    name: 'Mezo Clay Design System',
    client: 'Mezo / Thesis',
    sector: 'Crypto',
    year: '2025',
    service: '',
    readTime: 4,
    image: '/images/portfolio/main3.png',
    featuredSections: [
      {
        lead: 'A design system is only as good as the governance behind it.',
        richTitle: 'Building the single source of truth',
        body: [
          "Built the WCAG 2.2-compliant React library behind Mezo Clay: the component layer purpose-built for the Thesis BitcoinFi suite, from the ground up.",
          "The post-launch audit identified premature styling as the primary implementation bottleneck — a pattern that shows up in every fast-moving crypto team. The fix wasn't more components; it was clearer rules about when to override them.",
        ],
        images: [],
        carousel: [
          '/images/portfolio/mezo-clay/Specsheet-1.png',
          '/images/portfolio/mezo-clay/Specsheet-3.png',
          '/images/portfolio/mezo-clay/Specsheet-5.png',
          '/images/portfolio/mezo-clay/Specsheet-6.png',
          '/images/portfolio/mezo-clay/Specsheet-7.png',
          '/images/portfolio/mezo-clay/Specsheet-11.png',
        ],
      },
      {
        lead: '2,000+ variants. 50+ base components. One source of truth.',
        richTitle: 'Scale, compliance, and delivery',
        body: [
          "Set quality standards and pattern-library conventions, then built and tested every variant against the Mezo product surfaces: deposit, borrow, wallet, explore. Each shipped without a separate design review cycle.",
          "The system became the infrastructure behind $322M in testnet deposits, 154K transactions, and $151M TVL at mainnet, peaking at $200M+.",
        ],
        images: [
          '/images/portfolio/storybook-clay.webm',
          '/images/portfolio/mezo-clay/Changelog.png',
        ],
      },
      {
        lead: 'Design debt compounds silently until it stops shipping features.',
        richTitle: 'What the audit revealed',
        body: [
          "A 70% component integration rate at post-launch audit sounds like success. It is — but the 30% that wasn't integrated told the real story: premature styling decisions made during testnet were being maintained as one-off overrides instead of being resolved back into the system.",
          "The governance decisions informed by that audit — when to override, when to extend, when to propose a new component — were as important as the components themselves.",
        ],
        images: [],
        carousel: [
          '/images/portfolio/mezo-clay/Specsheet-9.png',
          '/images/portfolio/mezo-clay/Specsheet-10.png',
          '/images/portfolio/mezo-clay/Specsheet-14.png',
          '/images/portfolio/mezo-clay/Specsheet-15.png',
          '/images/portfolio/mezo-clay/TypeDisplay.png',
          '/images/portfolio/mezo-clay/MonoDisplay.png',
        ],
      },
    ],
    mockups: [],
    mediaBlocks: [],
    closingLead: 'Infrastructure that outlasts the sprint cycle is the difference between a design system and a component dump.',
    stats: [
      { name: 'Component integration', description: 'Post-launch audit established the baseline for system governance decisions.', value: '70%' },
      { name: 'TVL at mainnet peak', description: 'The system shipped with every product surface that contributed to Mezo growth.', value: '$200M+' },
      { name: 'Testnet deposits', description: 'Built on the infrastructure shipped during this engagement.', value: '$322M' },
    ],
    tags: ['Design System', 'Crypto', 'a11y', 'Storybook', 'Component library'],
    credits: [
      { role: 'Senior Product Designer (Design System)', name: 'Mal Som' },
      { role: 'Engineering', name: 'Clay engineers' },
    ],
    clientCredits: [
      { role: 'Client', name: 'Mezo / Thesis' },
      { role: 'PM', name: 'Clay team' },
    ],
  },
  {
    slug: 'blockfi-mobile',
    name: 'BlockFi Mobile',
    client: 'BlockFi',
    sector: 'Fintech',
    year: '2021',
    service: '',
    readTime: 4,
    image: '/images/portfolio/gf-blockfi.jpg',
    featuredSections: [
      {
        lead: 'Pushing back on the brief was the first design decision.',
        richTitle: 'Reframing the problem',
        body: [
          "Product benchmarking and heuristic evaluation surfaced a pattern no one had named yet: the segmented control forcing users to choose denomination before intent was the single biggest source of drop-off. Moving buy/sell intent before the amount screen eliminated it.",
          "Recurring trades had been buried at the summary screen — three steps too late. Surfacing them earlier required a structural change to the flow that the original brief hadn't scoped. Both decisions were validated through user testing before implementation.",
        ],
        images: ['/images/portfolio/gf-blockfi.jpg', '/images/portfolio/mock-bbu.png'],
      },
      {
        lead: 'Trades grew 200%+ in 90 days. Mobile outpaced web for the first time.',
        richTitle: 'Measuring the impact',
        body: [
          "The same changes were applied consistently across web and mobile — not as a one-off mobile fix but as a rethought trading interaction model. The consistency mattered as much as the individual improvements.",
          "The result contributed directly to BlockFi's growth in service of 225K+ clients and $50M monthly revenue — and validated the case for design having a seat at product strategy decisions, not just execution.",
        ],
        images: ['/images/portfolio/gf-blockfi.jpg', '/images/portfolio/gf-fennel.png'],
      },
    ],
    mockups: ['/images/portfolio/gf-blockfi.jpg', '/images/portfolio/mock-bbu.png', '/images/portfolio/gf-fennel.png'],
    mediaBlocks: [
      {
        kind: 'cover',
        background: '/images/portfolio/gf-blockfi.jpg',
        overlay: { type: 'image', src: '/images/portfolio/mock-bbu.png' },
      },
      {
        kind: 'split',
        left: { type: 'image', src: '/images/portfolio/gf-blockfi.jpg' },
        right: { type: 'image', src: '/images/portfolio/mock-bbu.png' },
      },
      {
        kind: 'bleed',
        media: { type: 'image', src: '/images/portfolio/gf-fennel.png' },
      },
    ],
    closingLead: 'The brief was too small. Pushing back on it was the design work.',
    stats: [
      { name: 'Trades in 90 days', description: 'Mobile outpaced web-based trades for the first time following launch.', value: '+200%' },
      { name: 'Monthly revenue', description: 'BlockFi revenue at time of engagement, grown in part through trading volume.', value: '$50M' },
      { name: 'Clients served', description: 'Active BlockFi users at time of mobile trading redesign launch.', value: '225K+' },
    ],
    tags: ['Lead', 'Fintech', 'Mobile', 'iOS', 'Android', 'Compliance'],
    credits: [
      { role: 'Designer', name: 'Mal Som' },
      { role: 'Engineering', name: 'BlockFi engineering' },
    ],
    clientCredits: [
      { role: 'Client', name: 'BlockFi' },
      { role: 'PM', name: 'BlockFi product team' },
    ],
  },
  {
    slug: 'blockfi-rewards-card',
    name: 'BlockFi — Credit Card Rewards (Mobile)',
    client: 'BlockFi',
    sector: 'Fintech',
    year: '2021',
    service: '',
    readTime: 4,
    image: '/images/portfolio/blockfi-card-rewards.png',
    featuredSections: [
      {
        lead: 'Lead product designer, mobile, for the world’s first Bitcoin rewards credit card: enrollment, card management, and rewards tracking.',
        richTitle: 'Scope and role',
        body: [
          'Lead designer, mobile, for the BlockFi Rewards Card experience. The card launched nationally in mid-2021 on the Visa network, issued by Evolve Bank & Trust and powered by Deserve’s card platform, converting a ~400K-signup waitlist into an active cardholder base.',
          'Built the design system and implemented the native experience against a web version, the same components reused across both platforms rather than diverging.',
        ],
        images: [
          {
            src: '/images/portfolio/blockfi-card-reader-1.png',
            overlay: '/images/portfolio/blockfi-screen-2.webm',
          },
          {
            src: '/images/portfolio/lock.png',
            overlay: '/images/portfolio/blockfi-screen-3.png',
          },
          {
            src: '/images/portfolio/bank.png',
            overlay: '/images/portfolio/blockfi-screen-1.webm',
          },
        ],
      },
      {
        lead: '50,000+ active cardholders within 90 days of national launch, spending 450% above the card industry average and pacing toward $2B+ in annualized volume.',
        richTitle: 'Launch and adoption',
        body: [
          'By December 2021, cardholders had grown past 70,000 (Shorty Awards; lighter confidence than BlockFi’s own release above). Rewards distribution reached 120+ BTC (~$6.8M) as of October 12, 2021 (BlockFi, GlobeNewswire).',
          'That reuse staved off design debt and kept native and web on one system instead of two drifting apart.',
        ],
        images: [
          {
            src: '/images/portfolio/chart.png',
            overlay: '/images/portfolio/blockfi-screen-5.png',
          },
          {
            src: '/images/portfolio/blockfi-basket-1.png',
            overlay: '/images/portfolio/blockfi-screen-4.png',
          },
        ],
      },
    ],
    mockups: [],
    mediaBlocks: [
      {
        kind: 'cover',
        background: '/images/portfolio/blockfi-bg-1.png',
        overlays: [
          { type: 'video', src: '/images/portfolio/blockfi-screen-1.webm', device: true },
          { type: 'video', src: '/images/portfolio/blockfi-screen-2.webm', device: true },
        ],
      },
      {
        kind: 'cover',
        background: '/images/portfolio/blockfi-bg-2.png',
        overlays: [
          { type: 'image', src: '/images/portfolio/blockfi-screen-3.png', device: true },
          { type: 'video', src: '/images/portfolio/blockfi-screen-2.webm', device: true },
          { type: 'image', src: '/images/portfolio/blockfi-screen-4.png', device: true },
        ],
      },
    ],
    closingLead:
      '“Crypto rewards programs are a compelling way to engage consumers in the crypto economy. We’re excited to see programs like the BlockFi Rewards Visa Card, which offer rewards that are relevant to the growing community of digital currency adopters.” — Forbes, Jul 6 2021',
    stats: [
      { name: 'Pre-launch waitlist', description: 'Accumulated Dec 2020–Jul 2021, ahead of national launch (Forbes; PR Newswire, Jul 2021).', value: '~400,000' },
      { name: 'Active cardholders', description: 'Within the first 90 days of national launch (BlockFi, GlobeNewswire, Oct 13 2021).', value: '50,000+' },
      { name: 'Average spend / cardholder', description: '~450% above the ~$5,000 Amex/Mastercard/Visa average (same BlockFi release).', value: '~$30,000/yr' },
      { name: 'Annualized spend pace', description: 'Pacing figure disclosed alongside the 90-day cardholder count (BlockFi, Oct 2021).', value: '$2B+' },
      { name: 'Rewards distributed', description: '≈$6.8M in BTC as of Oct 12, 2021 (BlockFi, GlobeNewswire).', value: '120+ BTC' },
    ],
    tags: ['Lead', 'Fintech', 'Mobile', 'Credit Card', 'iOS', 'Android'],
    credits: [
      { role: 'Lead designer, mobile', name: 'Mal Som' },
      { role: 'Engineering', name: 'Apps team' },
    ],
    clientCredits: [
      { role: 'Client', name: 'BlockFi' },
      { role: 'PM', name: 'Apps product team' },
    ],
  },
  {
    slug: 'zalando-stories',
    name: 'Zalando Stories',
    client: 'Zalando',
    sector: 'Consumer',
    year: '2023',
    service: '',
    readTime: 4,
    image: '/images/portfolio/zalando-main.png',
    featuredSections: [
      {
        lead: 'The same gesture felt different depending on where you saw it.',
        richTitle: 'Naming the fragmentation',
        body: [
          'Every editorial format (cover story, style guide, guest edit) needed transitions that felt consistent on app and web. Motion was still a pile of individual files; the same gesture read differently depending on where you encountered it.',
          'An eight-step sprint opened by naming that fragmentation, then mapped every existing motion instance across the product before setting a bar for what a shared system would need to cover.',
        ],
        images: [
          {
            src: '/images/portfolio/cap.png',
            overlay: '/images/portfolio/z-quote-enter.webm',
          },
          {
            src: '/images/portfolio/glass.png',
            overlay: '/images/portfolio/z-carousel.webm',
          },
          {
            src: '/images/portfolio/heart.png',
            overlay: '/images/portfolio/z-layer-blur.webm',
          },
        ],
      },
      {
        lead: 'Timing tokens, then a short list of primitives that compose into any format.',
        richTitle: 'Tokens, primitives, patterns',
        body: [
          'What shipped: tokens defining raw timing and easing, primitives (sheet, enter/exit, press, swipe-up) defining reusable interaction patterns built from those tokens, and patterns combining primitives into on-screen behaviors editors and engineers could reach for without re-deriving anything. Swipe-up, the gesture that opens a Story full-screen, became the reference example: specified once, used everywhere a story needed to expand.',
          'Design and engineering stopped trading animation files. A new format now borrows motion from the token layer instead of inventing its own.',
        ],
        images: [
          {
            src: '/images/portfolio/shoes.png',
            overlay: '/images/portfolio/z-stacked.webm',
          },
          {
            src: '/images/portfolio/socks.png',
            overlay: '/images/portfolio/z-preview-press.webm',
          },
        ],
      },
    ],
    mockups: [],
    mediaBlocks: [
      {
        kind: 'cover',
        background: '/images/portfolio/jacket.png',
        overlays: [
          { type: 'video', src: '/images/portfolio/z-carousel.webm', device: true },
          { type: 'video', src: '/images/portfolio/z-story-sheet.webm', device: true },
        ],
      },
      {
        kind: 'cover',
        background: '/images/portfolio/tabi.png',
        overlays: [
          { type: 'video', src: '/images/portfolio/z-share-sheet.webm', device: true },
          { type: 'video', src: '/images/portfolio/z-stacked.webm', device: true },
          { type: 'video', src: '/images/portfolio/z-story-peak.webm', device: true },
        ],
      },
    ],
    closingLead: 'Stories launched September 14, 2023, across 11 European markets with five recurring formats. The motion system is what let that scale to 500+ stories and 700+ brands without the consistency breaking.',
    stats: [
      { name: 'Pre-launch reach', description: '80+ curated product drops with Highsnobiety, before Stories had a name.', value: '7M+ users' },
      { name: 'Launch markets', description: 'Austria, Belgium, Denmark, France, Germany, Italy, Netherlands, Spain, Sweden, Switzerland, UK — Sept 14, 2023.', value: '11' },
      { name: 'Formats at launch', description: 'Cover Story, Style Bible, Guest Edit, The Perfect X, Unpacked.', value: '5' },
      { name: 'Scaled to', description: 'Stories published since launch, per Zalando.', value: '500+' },
    ],
    tags: ['Systems', 'B2C', 'Motion', 'Design System'],
    credits: [
      { role: 'Product designer', name: 'Mal Som' },
      { role: 'Engineering', name: 'ZDS engineers' },
    ],
    clientCredits: [
      { role: 'Client', name: 'Zalando' },
      { role: 'PM', name: 'ZDS product' },
    ],
  }
] as const;
