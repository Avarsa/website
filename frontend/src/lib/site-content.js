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
    'Personal website of Jinish Chandrababu, building complex operational and domain software for public systems, enterprises, Frappe and ERPNext, and practical AI integrations.',
  keywords: [
    'Jinish Chandrababu',
    'complex software systems',
    'operational software',
    'domain software',
    'Frappe developer',
    'ERPNext developer',
    'AI integrations',
    'enterprise software',
    'India software developer',
  ],
}

export const navigation = [
  { label: 'Systems', href: '#systems' },
  { label: 'Principles', href: '#principles' },
  { label: 'Notes', href: '#notes' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  line: 'Software that survives contact with reality.',
  subheading:
    'I build software for work that cannot be reduced to screens: drawings, stock, fees, records, rules, roles, documents, and the operational details that keep things moving.',
  support:
    'The work matters most when software becomes part of daily operations, not a layer floating above them.',
  primaryCta: 'Read the system notes',
  secondaryCta: 'Write to me',
  visualLabels: ['rule', 'record', 'ledger', 'evidence', 'workflow', 'decision', 'AI', 'ops'],
}

export const identityStrip =
  'drawings / permits / ledgers / records / reports / AI when useful'

export const buildSection = {
  eyebrow: 'FIELD 01',
  title: 'A way of working',
  intro:
    'The work usually starts before code: understanding the object, the people around it, and the parts that should not stay trapped in memory or spreadsheets.',
  cards: [
    {
      title: 'Look for the real object',
      body:
        'A drawing, permit, stock entry, duty calculation, certificate, case file, report, or conversation usually has a shape the software needs to respect.',
      label: 'Before screens',
      meta: 'observe / model / simplify carefully',
    },
    {
      title: "Move complexity out of people's heads",
      body:
        'Rules, roles, audit trails, payments, retries, and edge cases should live in the system, not in a fragile chain of reminders.',
      label: 'Less theatre, more plumbing',
      meta: 'rules / roles / records / recovery',
    },
    {
      title: 'Build so the domain can grow',
      body:
        'The aim is not to trap work inside a template. It is to model the domain clearly enough that new rules, users, and possibilities can be added without starting over.',
      label: 'Domain first',
      meta: 'public systems / industry / AI / new markets',
    },
  ],
}

export const selectedSystemsSection = {
  eyebrow: 'FIELD 02',
  title: 'Some systems I have lived with',
  intro:
    'Not a portfolio reel. A few systems that shaped how I think about software: the model, the people, the records, and the cost of making vague things explicit.',
}

export const selectedSystems = [
  {
    category: 'PUBLIC SYSTEMS / RULE-HEAVY SOFTWARE',
    title: 'ArchVerity',
    description:
      'A production building-plan scrutiny and permission system for PDA Daman: CAD/DXF reading, rule checks, document flows, payments, inspections, and certificate generation.',
    mattered: [
      'Turning drawings and regulations into reviewable system evidence',
      'Supporting applicants, officials, hierarchy, payments, and records',
      'Keeping permissions, plinth certificates, and occupancy work traceable',
    ],
    texture: 'A public system where drawing geometry, policy, money, and field reality meet.',
    meta: 'CAD / rules / payments / certificates',
    panel: {
      eyebrow: 'Production notes',
      facts: [
        { label: 'Use', value: 'PDA Daman building permissions' },
        { label: 'Engine', value: 'CAD/DXF extraction and rule scrutiny' },
        { label: 'Outputs', value: 'reports, challans, certificates, records' },
        { label: 'Live weight', value: '80+ construction permissions, plinth and occupancy flows, INR 10 Cr+ collected' },
      ],
      parts: [
        'drawing parser',
        'rule checks',
        'payment flow',
        'site inspection',
        'certificate PDFs',
        'digital signing',
      ],
    },
  },
  {
    category: 'REGULATED OPERATIONS / REVENUE AND MOVEMENT',
    title: 'EOLS',
    description:
      'A production excise operations and licensing system across Daman, Diu, Dadra & Nagar Haveli: permits, label registration, stock, ledgers, duties, fees, and regulated movement.',
    mattered: [
      'Keeping high-volume permit and movement flows reliable',
      'Connecting businesses, officials, stock, payments, and compliance',
      'Supporting regulated imports and operations where downtime has real cost',
    ],
    texture: 'When this kind of system stops, the work outside the system stops too.',
    meta: 'permits / stock / ledgers / revenue',
    panel: {
      eyebrow: 'Production notes',
      facts: [
        { label: 'Scale', value: '18,000+ permits issued' },
        { label: 'Revenue', value: 'INR 33 Cr+ in duties, fees, and bottling charges' },
        { label: 'Coverage', value: 'Daman, Diu, Dadra & Nagar Haveli' },
        { label: 'Critical use', value: 'regulated imports, movement, stock, and business continuity' },
      ],
      parts: [
        'label registration',
        'stock ledgers',
        'movement permits',
        'import/export',
        'bottling fees',
        'compliance checks',
      ],
    },
  },
  {
    category: 'BUSINESS SYSTEMS / OPERATING LAYERS',
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
      parts: ['ERPNext', 'Frappe', 'reports', 'dashboards', 'access control', 'integrations'],
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
      parts: ['document reading', 'semantic search', 'summaries', 'drafting', 'review', 'context'],
    },
  },
]

export const principlesSection = {
  eyebrow: 'FIELD 03',
  title: 'Notes I keep returning to',
  intro: 'Not rules for everyone. Just lessons that keep surviving real projects.',
}

export const principles = [
  {
    title: 'The domain comes before the screen',
    body:
      'Good software starts by learning how the work actually survives: rules, incentives, constraints, exceptions, and failure modes.',
  },
  {
    title: 'Reliability is product value',
    body:
      'When a system carries real work, uptime, traceability, and recovery paths matter as much as features.',
  },
  {
    title: 'Rules need operational form',
    body:
      'Rules should become visible, testable, explainable parts of the system. Hidden rules create hidden risk.',
  },
  {
    title: 'AI should strengthen judgment',
    body:
      'AI is useful when it helps people read, compare, decide, review, and act with more context.',
  },
]

export const notesSection = {
  eyebrow: 'FIELD 04',
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
  eyebrow: 'FIELD 05',
  title: 'If the problem has weight',
  main:
    'Write if you are working on something that cannot be handled by a generic app: a domain to understand, records to trust, people with different responsibilities, messy data, operational pressure, or a product idea that needs a real system under it.',
  support:
    'I am most interested in substantial software, early product systems, public or regulated operations, internal platforms, and useful AI inside real work.',
  cta: 'Write to me',
}

export const footer = {
  line: 'Built with care somewhere between a terminal, a notebook, and a half-finished melody.',
}
