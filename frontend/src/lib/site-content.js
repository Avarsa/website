export const siteConfig = {
  name: 'Jinish Chandrababu',
  location: 'Daman, India',
  email: 'jinish@outlook.com',
  links: {
    linkedin: 'https://linkedin.com/in/jinishchandrababu',
    github: 'https://github.com/jinishc',
    resume: '',
  },
}

export const seo = {
  title: 'Jinish Chandrababu — Software that survives contact with reality',
  description:
    'Personal website of Jinish Chandrababu, building complex software by learning real-world domains, modelling their rules, and shipping systems people depend on.',
  keywords: [
    'Jinish Chandrababu',
    'real-world software systems',
    'complex software systems',
    'operational software',
    'domain software',
    'industrial software',
    'workflow software',
    'Frappe developer',
    'ERPNext developer',
    'AI integrations',
    'enterprise software',
    'India software developer',
  ],
}

export const navigation = [
  { label: 'Work', href: '#work-now' },
  { label: 'How', href: '#approach' },
  { label: 'Notes', href: '#notes' },
  { label: 'Email', href: '#contact' },
]

export const hero = {
  line: 'Jinish Chandrababu',
  subheading:
    'I build software by learning unfamiliar work until it can be modelled honestly: the objects, rules, people, exceptions, and pressure around it. Recent systems have handled CAD drawings, building rules, stock movement, permits, duties, records, certificates, approvals, and public-facing decisions.',
  support:
    'The useful part is not the domain name. It is the habit of entering a difficult domain, understanding it, shipping the system, and improving the process after people use it.',
  primaryCta: 'What is running',
  secondaryCta: 'Email',
  visualLabels: ['domain', 'record', 'workflow', 'rule', 'integration', 'review', 'AI', 'ops'],
}

export const liveWork = {
  title: 'Systems already in use',
  intro:
    'Two current examples. Their domains are different; the habit is the same: learn the work, model the rules, and make the system carry daily operations.',
  items: [
    {
      title: 'ArchVerity',
      href: 'https://pdadaman.in',
      context: 'PDA Daman / building-plan scrutiny',
      body:
        'A building permission system for the Planning & Development Authority, Daman. Architects and civil engineers submit CAD drawings, the system runs automatic scrutiny against the General Development Rules 2023, and the file moves through the full lifecycle from application to certificate.',
      facts: [
        { value: '100+', label: 'architects and civil engineers' },
        { value: '80+', label: 'construction permissions and certificates' },
        { value: '₹10 Cr+', label: 'department revenue collected, ≈ US$1.0M' },
        { value: 'GDR 2023', label: 'automatic rule scrutiny' },
        { value: 'DMC Daman', label: 'launching soon' },
      ],
    },
    {
      title: 'EOLS',
      href: 'https://dnhddexcise.in',
      context: 'UT excise operations / licensing',
      body:
        'The Excise Operations and Licensing System for Daman, Diu, Dadra & Nagar Haveli. Distilleries, breweries, licensees, and excise staff use it daily for production logs, stock movement, spirit movement requests, imports, exports, local transport permits, NOCs, duties, fees, and ledgers.',
      facts: [
        { value: '500/day', label: 'approx. permits processed' },
        { value: '17,000+', label: 'permits issued' },
        { value: '₹33 Cr+', label: 'department revenue collected, ≈ US$3.4M' },
        { value: '100 / 1,000+', label: 'staff / licensees' },
        { value: '7', label: 'distilleries and breweries' },
        { value: '3', label: 'districts in one UT' },
      ],
    },
  ],
  closing:
    'The common thread is not architecture or excise. It is the habit of entering a domain, learning it carefully, and turning that understanding into software people can depend on.',
}

export const buildSection = {
  eyebrow: '',
  title: 'How I tend to work',
  intro:
    'Most useful software I have built began with not knowing the domain well enough. The work starts by staying with it until the objects, rules, language, and failure modes become clear.',
  cards: [
    {
      title: 'Learn the work first',
      body:
        'Architecture meant CAD drawings, development-control rules, margins, built-up area, FSI, scrutiny reports, and certificates. Excise meant duties, labels, stock movement, import, export, and compliance flows.',
      label: 'Learning',
      meta: 'learn / observe / ask better questions',
    },
    {
      title: 'Turn it into structure',
      body:
        'Once the domain becomes clearer, it has to become models, states, validations, calculations, permissions, documents, audit trails, and recovery paths that other people can trust.',
      label: 'Modelling',
      meta: 'models / states / checks / documents',
    },
    {
      title: 'Improve after people use it',
      body:
        'A working system reveals what was invisible before: bottlenecks, repeated mistakes, unclear ownership, unnecessary follow-ups, and places where automation or AI can actually help.',
      label: 'Iteration',
      meta: 'observe / refine / automate carefully',
    },
  ],
}

export const selectedSystemsSection = {
  eyebrow: '',
  title: 'A closer look',
  intro:
    'Longer notes on the systems and the kind of thinking they required.',
}

export const selectedSystems = [
  {
    category: 'PRODUCTION SYSTEM / BUILDING PLAN SCRUTINY',
    title: 'ArchVerity',
    description:
      'A production building-plan scrutiny and permission system for PDA Daman, hosted at pdadaman.in: CAD/DXF submission, automatic scrutiny against General Development Rules 2023, document flows, payments, inspections, approvals, and certificate generation.',
    mattered: [
      'Learning how drawings, GDR rules, margins, built-up area, FSI, and scrutiny logic behave in practice',
      'Supporting 100+ architects and civil engineers submitting CAD drawings for automatic scrutiny',
      'Maintaining the lifecycle from application to final certificate: documents, payments, inspections, approvals, and PDFs',
      'Creating reviewable evidence for staff instead of loose files and manual interpretation',
      'Keeping industrial, residential, and commercial permissions traceable',
      'Preparing the same system for DMC Daman, the Daman Municipal Council',
    ],
    texture: 'A domain model for drawings, regulations, reviews, payments, inspections, and final records.',
    meta: 'CAD / rules / payments / certificates',
    panel: {
      eyebrow: 'Production notes',
      facts: [
        { label: 'Use', value: 'Planning & Development Authority, Daman' },
        { label: 'Live at', value: 'pdadaman.in', href: 'https://pdadaman.in' },
        { label: 'Users', value: '100+ architects and civil engineers, plus PDA staff' },
        { label: 'Engine', value: 'CAD/DXF extraction and GDR 2023 rule scrutiny' },
        { label: 'Lifecycle', value: 'application, scrutiny, payments, approvals, inspections, certificates' },
        { label: 'Processed', value: '80+ industrial, residential, and commercial permissions and certificates' },
        { label: 'Department revenue', value: '₹10 Cr+ official collections through the system, approx. US$1.0M' },
        { label: 'Next', value: 'Launching soon for DMC Daman' },
      ],
    },
  },
  {
    category: 'PRODUCTION SYSTEM / REGULATED MOVEMENT',
    title: 'EOLS',
    description:
      'The Excise Operations and Licensing System for the UT of Dadra & Nagar Haveli and Daman & Diu: production logs, permits, label registration, stock, ledgers, duties, fees, NOCs, imports, exports, and regulated movement.',
    mattered: [
      'Learning duties, label registration, stock movement, import, export, and compliance flows',
      'Supporting distilleries and breweries from grain entries to blending, bottling, bond, and wholesale movement',
      'Handling about 500 permits per day across licensees, excise staff, and three districts',
      'Connecting movements, duties, fees, stock, ledgers, NOCs, approvals, and compliance checks',
      'Supporting pharma, biotech, and regulated businesses that need permits and NOCs to keep moving',
    ],
    texture: 'When this kind of system stops, the work outside the system stops too.',
    meta: 'permits / stock / ledgers / continuity',
    panel: {
      eyebrow: 'Production notes',
      facts: [
        { label: 'Live at', value: 'dnhddexcise.in', href: 'https://dnhddexcise.in' },
        { label: 'Daily use', value: 'about 500 permits per day across three districts' },
        { label: 'Users', value: 'about 100 excise staff and 1,000+ licensees' },
        { label: 'Industry', value: 'about 7 distilleries and breweries using production and movement flows' },
        { label: 'Scale', value: '17,000+ permits issued' },
        { label: 'Department revenue', value: '₹33 Cr+ statutory duties and fees processed in about 1.5 months, approx. US$3.4M' },
        { label: 'Expected annual revenue', value: '₹500 Cr+ managed through the system, approx. US$52M' },
        { label: 'Coverage', value: 'Entire UT: Daman, Diu, Dadra & Nagar Haveli' },
        { label: 'Critical use', value: 'regulated imports, movement, stock, and business continuity' },
      ],
    },
  },
  {
    category: 'DOMAIN SOFTWARE / OPERATING LAYERS',
    title: 'Enterprise operating tools',
    description:
      'Custom Frappe, ERPNext, and internal tools for teams whose real process is more specific than generic software allows.',
    mattered: [
      'Turning scattered spreadsheets into shared operational records',
      'Designing reports, workflows, and access around responsibility',
      'Making business logic visible enough to change safely',
    ],
    texture: "The best internal systems become part of the team's operating rhythm.",
    meta: 'ERP / records / reports / internal operations',
    panel: {
      eyebrow: 'Typical shape',
      facts: [
        { label: 'Model', value: 'custom doctypes, reports, states, and permissions' },
        { label: 'Work', value: 'records replacing spreadsheets and follow-ups' },
        { label: 'Users', value: 'teams with different roles and responsibilities' },
      ],
    },
  },
  {
    category: 'AI / AUTOMATION / DECISION SUPPORT',
    title: 'AI inside workflows',
    description:
      'Language-model features inside existing systems: document understanding, search, summaries, drafting, review, and guided decisions.',
    mattered: [
      'Putting AI near the actual task, not outside it',
      'Keeping human review, source context, and traceability intact',
      'Reducing cognitive load without reducing accountability',
    ],
    texture: 'AI is most useful when it strengthens the system around it.',
    meta: 'documents / search / context / human review',
    panel: {
      eyebrow: 'Use when it helps',
      facts: [
        { label: 'Input', value: 'documents, records, notes, conversations, search context' },
        { label: 'Output', value: 'summaries, drafts, explanations, comparisons, review support' },
        { label: 'Constraint', value: 'human review and traceability stay in the loop' },
      ],
    },
  },
]

export const principlesSection = {
  eyebrow: '',
  title: 'Notes I keep returning to',
  intro: 'Not rules for everyone. Just things that keep surviving real projects.',
}

export const principles = [
  {
    title: 'The domain comes before the interface',
    body:
      'Good software starts by learning how the work actually survives: vocabulary, objects, rules, incentives, constraints, exceptions, and failure modes.',
  },
  {
    title: 'Reliability is product value',
    body:
      'When a system carries real work, uptime, traceability, and recovery paths matter as much as features.',
  },
  {
    title: 'Operational truth beats presentation',
    body:
      'Dashboards matter less than the underlying state being correct, traceable, recoverable, and usable by the people doing the work.',
  },
  {
    title: 'Learning has to become structure',
    body:
      'It is not enough for the builder to understand the domain. The understanding has to become usable structure inside the system.',
  },
]

export const notesSection = {
  eyebrow: '',
  title: 'Field notes',
  intro: 'Small observations from building, debugging, watching people work, and stepping away long enough to see a pattern.',
}

export const fieldNotes = [
  {
    title: 'Reality breaks beautiful diagrams',
    excerpt:
      'The useful map is not the clean flowchart. It is the version that includes missing files, bad inputs, hierarchy, exceptions, downtime, and the person who still has to finish the work.',
    tag: 'Systems',
  },
  {
    title: 'The problem with dashboards',
    excerpt:
      'Dashboards are easy to admire. The harder work is making the underlying operation clearer, safer, and harder to lose.',
    tag: 'Operations',
  },
  {
    title: 'Rhythm, debugging, and a clean shot',
    excerpt:
      'Music, tennis, and software all punish force. Better answers usually come from timing, attention, repetition, and restraint.',
    tag: 'Personal',
  },
]

export const personalLine = 'Rhythm matters — in systems, songs, and serves.'

export const contactSection = {
  eyebrow: '',
  title: 'Write to me',
  main:
    'Write if you are building around a domain that generic software cannot understand: physical operations, rules, records to trust, people with different responsibilities, messy data, operational pressure, or a product idea that needs someone willing to learn the work properly.',
  support:
    'I am interested in substantial software, early product systems, public or regulated operations, industrial workflows, internal platforms, and useful AI inside real work.',
  cta: 'Write to me',
}

export const footer = {
  line: 'Built with care somewhere between a terminal, a notebook, and a half-finished melody.',
}
