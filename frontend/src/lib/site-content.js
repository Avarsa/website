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
    'Personal website of Jinish Chandrababu, building complex software for real-world domains, operational systems, enterprise tools, public-sector systems, and practical AI integrations.',
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
  { label: 'Systems', href: '#systems' },
  { label: 'Principles', href: '#principles' },
  { label: 'Notes', href: '#notes' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  line: 'Software that survives contact with reality.',
  subheading:
    'I build software for work where screens are only the surface: learning the domain, modelling its objects and rules, and turning records, workflows, integrations, documents, and human judgment into systems people can rely on.',
  support:
    'The work matters most when unfamiliar details become clear enough for software to carry them safely.',
  primaryCta: 'Read the system notes',
  secondaryCta: 'Write to me',
  visualLabels: ['domain', 'record', 'workflow', 'rule', 'integration', 'review', 'AI', 'ops'],
}

export const identityStrip =
  'learn the domain / model the rules / ship the system / improve the process'

export const buildSection = {
  eyebrow: 'Approach',
  title: 'A way of building',
  intro:
    'I usually begin by learning the domain closely: its vocabulary, objects, rules, exceptions, users, and pressure points. Then I turn that learning into software that can carry real work.',
  cards: [
    {
      title: 'Learn the unfamiliar parts',
      body:
        'Architecture meant CAD drawings, development-control rules, margins, built-up area, FSI, scrutiny reports, and certificates. Excise meant duties, label registrations, stock movement, import, export, and compliance flows.',
      label: 'Domain first',
      meta: 'learn / observe / ask better questions',
    },
    {
      title: 'Turn learning into structure',
      body:
        'Once the domain becomes clear, it has to become models, states, validations, calculations, permissions, documents, audit trails, and recovery paths that other people can trust.',
      label: 'From understanding to system',
      meta: 'models / states / checks / documents',
    },
    {
      title: 'Improve after the system starts breathing',
      body:
        'A working system reveals what was invisible before: bottlenecks, repeated mistakes, unclear ownership, unnecessary follow-ups, and places where automation or AI can actually help.',
      label: 'Better process, later',
      meta: 'observe / refine / automate carefully',
    },
  ],
}

export const selectedSystemsSection = {
  eyebrow: 'Production systems',
  title: 'Systems that had to work',
  intro:
    'These are not the boundary of what I want to build. They are examples of entering complex domains, learning them deeply enough to model them, and shipping software people depend on.',
}

export const selectedSystems = [
  {
    category: 'PRODUCTION SYSTEM / BUILDING PLAN SCRUTINY',
    title: 'ArchVerity',
    description:
      'A production building-plan scrutiny and permission system for PDA Daman: CAD/DXF reading, rule checks, document flows, payments, inspections, and certificate generation.',
    mattered: [
      'Learning how drawings, GDR rules, margins, built-up area, FSI, and scrutiny logic behave in practice',
      'Turning drawings and regulations into reviewable system evidence',
      'Supporting applicants, officials, hierarchy, payments, and records',
      'Keeping permissions, plinth certificates, and occupancy work traceable',
    ],
    texture: 'A domain model for drawings, regulations, reviews, payments, inspections, and final records.',
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
    category: 'PRODUCTION SYSTEM / REGULATED MOVEMENT',
    title: 'EOLS',
    description:
      'A production excise operations and licensing system across Daman, Diu, Dadra & Nagar Haveli: permits, label registration, stock, ledgers, duties, fees, and regulated movement.',
    mattered: [
      'Learning duties, label registration, stock movement, import, export, and compliance flows',
      'Keeping high-volume permit and movement flows reliable',
      'Connecting businesses, officials, stock, payments, and compliance',
      'Supporting regulated imports and operations where downtime has real cost',
    ],
    texture: 'When this kind of system stops, the work outside the system stops too.',
    meta: 'permits / stock / ledgers / continuity',
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
  eyebrow: 'Working notes',
  title: 'Notes I keep returning to',
  intro: 'Not rules for everyone. Just lessons that keep surviving real projects.',
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
  eyebrow: 'Field notes',
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
  eyebrow: 'Contact',
  title: 'If the system has to carry real work',
  main:
    'Write if you are building around a domain that generic software cannot understand: physical operations, records to trust, people with different responsibilities, messy data, operational pressure, or a product idea that needs someone willing to learn the domain properly.',
  support:
    'I am most interested in substantial software, early product systems, public or regulated operations, industrial workflows, internal platforms, and useful AI inside real work.',
  cta: 'Write to me',
}

export const footer = {
  line: 'Built with care somewhere between a terminal, a notebook, and a half-finished melody.',
}
