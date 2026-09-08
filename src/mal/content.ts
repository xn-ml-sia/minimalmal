export const EMAIL = 'mallastate@gmail.com';
export const LINKEDIN = '#';

export const nav = [
  { name: 'Work', to: '/work' },
  { name: 'About', to: '/about' },
] as const;

export const work = {
  title: 'Work',
  intro:
    'Building interfaces end to end: first sketch to production, and the numbers that followed.',
  introLines: [
    'Building interfaces end to end: first sketch',
    'to production, and the numbers',
    'that followed.',
  ],
  impact: [
    { org: 'Mezo', value: '2,000+', label: 'component variants' },
    { org: 'Mezo', value: '$200M+', label: 'TVL at mainnet peak' },
    { org: 'Edmunds', value: '20%', label: 'higher dealer close rate' },
    { org: 'Edmunds', value: '6x', label: 'faster dealer response' },
  ],
  items: [
    {
      name: 'Mezo Clay Design System',
      headline: 'Converting design debt into product infrastructure',
      desc: 'Built Clay across three product phases: 2,000+ variants, the system behind $200M+ TVL.',
      image: '/images/portfolio/boy.png',
    },
    {
      name: 'BlockFi — Credit Card Rewards (Mobile)',
      headline: 'Scoping and shipping the mobile experience behind the world’s first Bitcoin rewards credit card',
      desc: 'Lead designer, mobile, for the world’s first Bitcoin rewards card — 50,000+ cardholders in 90 days.',
      image: '/images/portfolio/blockfi-card-rewards.png',
    },
    {
      name: 'Zalando Stories',
      headline: 'A shared motion system for a fragmented product',
      desc: 'Transition tokens and Reduced Motion fallbacks, replacing a patchwork of one-off animations across the platform.',
      image: '/images/portfolio/zalando-main.png',
    }
  ],
} as const;

export const about = {
  title: 'About',
  intro:
    'I’m Mal Som. I design and build interfaces myself, from the first sketch to the production component, across 0→1 builds and iterative product evolution.',
  capabilitiesFigure: '/images/portfolio/mock-figure.png',
  capabilities: [
    {
      no: '01',
      name: 'Product design · 13 years',
      items: [
        'Hands-on craft across crypto/DeFi, generative AI, and consumer mobile',
        '0→1 builds (AI pipelines, an SSI identity platform, a design system from zero) and iterative work on shipped products',
        'Outcomes tied to what changed for the user: negotiation confidence, close rates, response times',
      ],
    },
    {
      no: '02',
      name: 'Research & testing · 13 years',
      items: [
        'Usability testing and cross-functional accessibility audits (Edmunds, Zalando)',
        'Screen-reader and WCAG validation across diverse user needs',
        'User needs centered throughout the design process',
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
      name: 'Generative AI · 3 years',
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
        'Iterative design improvement',
        'Usability testing and accessibility validation',
        'Design systems & governance',
        'Cross-functional alignment',
        'AI-native product development',
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
  process: [
    {
      name: 'Discover',
      copy: 'Discovery determines whether a team is solving the right problem before anyone commits to a solution. Widen the aperture before narrowing toward anything buildable. The output is alignment on the problem, the evidence needed, and why it matters to the business.',
      image: '/images/process/agency-01-9b4387d5aa.webp',
      methods: [
        'Customer feedback',
        'Quant data analysis',
        'Lived observations',
        'Surveys & questionnaires',
        'Business analysis',
        'Interviews',
        'Market research',
        'Session replay',
        'Goal & signal statements',
        'Hypothesis generation',
      ],
    },
    {
      name: 'Explore',
      copy: 'With the evidential problem in sight, artifacts and written context align stakeholders — connecting hypotheses and objectives to human needs and business goals.',
      image: '/images/process/agency-05-6ff4e85875.webp',
      methods: ['Diagram', 'Journey map', 'Wireframe', 'Prompt design & prototyping'],
    },
    {
      name: 'Validate',
      copy: 'Validation can occur at multiple touchpoints with an array of artifacts, ensuring the work addresses the needs of users — and, ultimately, the business.',
      image: '/images/process/agency-06-c2c1790069.webp',
      methods: [
        'Card sorting',
        'Design reviews',
        'Usability testing',
        'Error rate analysis',
        'Business analysis',
        'Interviews',
        'Market research',
        'Session replay',
        'Goal & signal statements',
        'Hypothesis generation',
      ],
    },
    {
      name: 'Implement',
      copy: 'Collaborate closely with engineers for design alignment and capture details pre-release. For new components, ensure awareness for product consistency. Cross-functional stakeholders are informed via Loom and case-study briefs before final sign-off — including how we measure design intent.',
      image: '/images/process/agency-07-a0986e9d3f.webp',
      methods: [
        'Feasibility sign-off',
        'Compliance sign-off',
        'Business sign-off',
        'Design QA',
        'Content sign-off',
        'Accessibility checklist',
        'Design-systems check-in',
        'Design guidelines',
        'Criteria sign-off',
        'Cross-functional review',
      ],
    },
  ],
  clients: ['Thesis*', 'Mezo', 'Zalando', 'Mitte Arts Lab', 'Snap', 'Edmunds.com', 'Fantasmo.io', 'Gannett | USA Today Network'],
  seeking: 'Seeking design engineering roles where product, design, and engineering judgment equally matter.',
  contactLine: 'Got questions? Get in touch.',
} as const;

export const projects = [
  {
    slug: 'mezo-clay',
    name: 'Mezo Clay Design System',
    client: 'Mezo / Thesis',
    sector: 'Crypto',
    year: '2023',
    service: 'Systems',
    readTime: 4,
    image: '/images/portfolio/boy.png',
    featuredSections: [
      {
        lead: 'A design system is only as good as the governance behind it.',
        richTitle: 'Building the single source of truth',
        body: [
          "Built the WCAG 2.2-compliant React library behind Mezo Clay: the component layer purpose-built for the Thesis BitcoinFi suite, from the ground up.",
          "The post-launch audit identified premature styling as the primary implementation bottleneck — a pattern that shows up in every fast-moving crypto team. The fix wasn't more components; it was clearer rules about when to override them.",
        ],
        images: [
          {
            src: '/images/portfolio/pie.png',
            overlay: '/images/portfolio/blockfi-screen-2.webm',
          },
          {
            src: '/images/portfolio/pie2.png',
            overlay: '/images/portfolio/blockfi-screen-3.png',
          },
          {
            src: '/images/portfolio/radar.png',
            overlay: '/images/portfolio/blockfi-screen-1.webm',
          },
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
          {
            src: '/images/portfolio/wave.png',
            overlay: '/images/portfolio/blockfi-screen-5.png',
          },
          {
            src: '/images/portfolio/world.png',
            overlay: '/images/portfolio/blockfi-screen-4.png',
          },
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
      },
    ],
    mockups: [],
    mediaBlocks: [
      {
        kind: 'cover',
        background: '/images/portfolio/star.png',
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
    closingLead: 'Infrastructure that outlasts the sprint cycle is the difference between a design system and a component dump.',
    stats: [
      { name: 'Component integration', description: 'Post-launch audit established the baseline for system governance decisions.', value: '70%' },
      { name: 'TVL at mainnet peak', description: 'The system shipped with every product surface that contributed to Mezo growth.', value: '$200M+' },
      { name: 'Testnet deposits', description: 'Built on the infrastructure shipped during this engagement.', value: '$322M' },
    ],
    tags: ['Design systems', 'Crypto', 'WCAG 2.2', 'React', 'Component library'],
    credits: [
      { role: 'Senior Product Designer (Design System)', name: 'Mal Som' },
      { role: 'Engineering', name: 'Thesis engineering' },
    ],
    clientCredits: [
      { role: 'Client', name: 'Mezo / Thesis' },
      { role: 'PM', name: 'Thesis product team' },
    ],
  },
  {
    slug: 'blockfi-mobile',
    name: 'BlockFi Mobile',
    client: 'BlockFi',
    sector: 'Fintech',
    year: '2021',
    service: 'Leadership',
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
    tags: ['Lead', 'Fintech', 'Mobile', 'iOS', 'Android', 'Director'],
    credits: [
      { role: 'Design director', name: 'Mal Som' },
      { role: 'Product designers', name: 'BlockFi design team' },
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
    service: 'Leadership',
    readTime: 4,
    image: '/images/portfolio/blockfi-card-rewards.png',
    featuredSections: [
      {
        lead: 'Performed as lead product designer for the world’s first Bitcoin rewards credit card — owning the mobile surface: enrollment, card management, and rewards tracking.',
        richTitle: 'Scope and role',
        body: [
          'Lead designer, mobile, for the BlockFi Rewards Card experience. The card launched nationally in mid-2021 on the Visa network, issued by Evolve Bank & Trust and powered by Deserve’s card platform, converting a ~400K-signup waitlist into an active cardholder base.',
          'Built the design system and implemented the native experience against a web version — the same components reused across both platforms rather than diverging.',
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
          'By December 2021, cardholders had grown past 70,000 — a secondary source (Shorty Awards), cited with lighter confidence than BlockFi’s own release above. Rewards distribution reached 120+ BTC (~$6.8M) as of October 12, 2021 (BlockFi, GlobeNewswire).',
          'That reuse staved off design debt and created a unified cross-platform experience — one system driving both native and web, not two drifting apart.',
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
      { role: 'Product designers', name: 'BlockFi design team' },
      { role: 'Engineering', name: 'BlockFi engineering' },
    ],
    clientCredits: [
      { role: 'Client', name: 'BlockFi' },
      { role: 'PM', name: 'BlockFi product team' },
    ],
  },
  {
    slug: 'zalando-stories',
    name: 'Zalando Stories',
    client: 'Zalando',
    sector: 'Consumer',
    year: '2023',
    service: 'Systems',
    readTime: 4,
    image: '/images/portfolio/zalando-main.png',
    featuredSections: [
      {
        lead: 'The same gesture felt different depending on where you saw it.',
        richTitle: 'Naming the fragmentation',
        body: [
          'Getting there meant solving a less glamorous problem first. Every editorial format — a cover story, a style guide, a guest edit — needed transitions that felt consistent whether someone hit them on the app or the web. Motion was still a pile of individual files; the same gesture read differently depending on where you encountered it.',
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
          'What shipped: tokens defining raw timing and easing, primitives — sheet, enter/exit, press, swipe-up — defining reusable interaction patterns built from those tokens, and patterns combining primitives into on-screen behaviors editors and engineers could reach for without re-deriving anything. Swipe-up, the gesture that opens a Story full-screen, became the reference example: specified once, used everywhere a story needed to expand.',
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
    closingLead: 'Stories launched September 14, 2023, across 11 European markets with five recurring formats. The motion system is what let that scale to 500+ stories and 700+ brands without the consistency breaking — the difference between a one-off content experiment and a durable platform.',
    stats: [
      { name: 'Pre-launch reach', description: '80+ curated product drops with Highsnobiety, before Stories had a name.', value: '7M+ users' },
      { name: 'Launch markets', description: 'Austria, Belgium, Denmark, France, Germany, Italy, Netherlands, Spain, Sweden, Switzerland, UK — Sept 14, 2023.', value: '11' },
      { name: 'Formats at launch', description: 'Cover Story, Style Bible, Guest Edit, The Perfect X, Unpacked.', value: '5' },
      { name: 'Scaled to', description: 'Stories published since launch, per Zalando.', value: '500+' },
    ],
    tags: ['Systems', 'Consumer', 'Motion', 'Design Sprint'],
    credits: [
      { role: 'Product designer', name: 'Mal Som' },
    ],
    clientCredits: [
      { role: 'Client', name: 'Zalando' },
    ],
  }
] as const;
