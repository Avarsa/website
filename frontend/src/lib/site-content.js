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
    'Personal website of Jinish Chandrababu, a software developer building operational systems, Frappe and ERPNext applications, government workflow platforms, enterprise tools, and practical AI integrations.',
  keywords: [
    'Jinish Chandrababu',
    'Frappe developer',
    'ERPNext developer',
    'custom software',
    'AI integrations',
    'government workflow software',
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
    'I design and build operational systems for businesses, institutions, and workflows where the details matter — permissions, ledgers, approvals, integrations, rules, records, and the messy edge cases in between.',
  support: 'Built quietly from India. Designed for work that cannot stay theoretical.',
  primaryCta: 'See selected systems',
  secondaryCta: 'Start a conversation',
  visualLabels: ['rule', 'permit', 'ledger', 'inspection', 'workflow', 'record', 'AI', 'ERP'],
}

export const identityStrip =
  'Custom systems / Frappe & ERPNext / AI integrations / Government workflows / Enterprise operations'

export const buildSection = {
  eyebrow: 'FIELD 01',
  title: 'The work I am drawn to',
  intro:
    'I like problems where software has to understand the world around it — the people, the paperwork, the rules, the exceptions, the incentives, and the quiet pressure of daily operations.',
  cards: [
    {
      title: 'Operational software',
      body:
        'Systems for teams that need more than a dashboard — approvals, records, payments, documents, audit trails, roles, permissions, and workflows that keep moving even when the process is complicated.',
      label: 'Workflow-first',
      meta: 'workflow / approvals / audit trails / roles',
    },
    {
      title: 'Frappe & ERPNext systems',
      body:
        'Custom applications, modules, reports, integrations, and business tools built on top of frameworks that are practical enough for real operations and flexible enough for unusual requirements.',
      label: 'Business logic that fits',
      meta: 'doctypes / reports / modules / integrations',
    },
    {
      title: 'Useful AI integrations',
      body:
        'AI features that earn their place inside a workflow — assistants, document understanding, search, summaries, automations, and decision support that make existing systems sharper instead of noisier.',
      label: 'AI without theatre',
      meta: 'documents / search / summaries / review',
    },
  ],
}

export const selectedSystemsSection = {
  eyebrow: 'FIELD 02',
  title: 'Selected systems',
  intro:
    'A few examples of the kind of work I care about: software connected to rules, people, institutions, and consequences.',
}

export const selectedSystems = [
  {
    category: 'GOVERNMENT WORKFLOW / BUILDING PERMISSIONS',
    title: 'ArchVerity',
    description:
      'A building scrutiny and permission system for urban local bodies, designed around drawings, rules, documents, inspections, and approval workflows.',
    mattered: [
      'Translating complex approval logic into a usable workflow',
      'Handling technical documents, roles, records, and review stages',
      'Designing for officials, applicants, and operational accountability',
      'Keeping the system practical enough for real institutional use',
    ],
    texture:
      'A system where software meets drawings, regulations, field realities, and public-facing decisions.',
    meta: 'drawings / approvals / documents / inspections',
    visual: 'blueprint',
    labels: ['setback', 'review', 'stamp', 'drawing'],
  },
  {
    category: 'REGULATED OPERATIONS / EXCISE WORKFLOWS',
    title: 'EOLS',
    description:
      'An excise operations and licensing system shaped around permits, movement, compliance, records, payments, and regulated supply-chain workflows.',
    mattered: [
      'Turning regulated movement into clear digital flows',
      'Supporting roles, permissions, records, and operational checks',
      'Designing around traceability, compliance, and day-to-day usability',
      'Making complex processes legible without oversimplifying them',
    ],
    texture: 'Not a dashboard sitting above the process — software living inside the process.',
    meta: 'permits / movement / compliance / traceability',
    visual: 'permit',
    labels: ['permit', 'ledger', 'check', 'movement'],
  },
  {
    category: 'BUSINESS SYSTEMS / ERP / CUSTOM APPLICATIONS',
    title: 'Enterprise operating tools',
    description:
      'Custom Frappe and ERPNext systems for businesses that need their software to match how work actually happens — not how a generic template assumes it should happen.',
    mattered: [
      'Custom doctypes, reports, workflows, and dashboards',
      'Integrations with existing business processes',
      'Role-based access and clean operational visibility',
      'Reducing dependence on scattered spreadsheets and manual follow-ups',
    ],
    texture: 'The best internal software often disappears into the rhythm of the team using it.',
    meta: 'ERP / records / reports / internal operations',
    visual: 'erp',
    labels: ['module', 'record', 'report', 'state'],
  },
  {
    category: 'AI / AUTOMATION / DECISION SUPPORT',
    title: 'AI inside workflows',
    description:
      'Experiments and integrations using language models where they are genuinely useful: reading, summarizing, searching, assisting, explaining, and reducing repetitive cognitive work.',
    mattered: [
      'Keeping AI close to actual user tasks',
      'Avoiding gimmicks and generic chatbot wrappers',
      'Designing for human review, traceability, and context',
      'Making systems feel more capable without making them less trustworthy',
    ],
    texture: 'AI works best when it respects the workflow it is entering.',
    meta: 'documents / search / context / human review',
    visual: 'ai',
    labels: ['search', 'draft', 'review', 'context'],
  },
]

export const principlesSection = {
  eyebrow: 'FIELD 03',
  title: 'Working principles',
  intro: 'The same beliefs show up again and again in the systems I like building.',
}

export const principles = [
  {
    title: 'Reality is the hardest stakeholder',
    body:
      'Requirements are rarely just written down. They hide inside habits, exceptions, paperwork, incentives, legacy systems, and the way people actually get through the day.',
  },
  {
    title: 'Rules are part of the interface',
    body:
      'In serious software, rules cannot stay buried in code or policy documents. They need to become visible, understandable, testable, and usable.',
  },
  {
    title: 'Quiet software is underrated',
    body:
      'The best systems do not constantly announce themselves. They reduce friction, preserve context, and let people move through complicated work with less confusion.',
  },
  {
    title: 'AI should earn its place',
    body:
      'AI is useful when it improves a real workflow. It should help people read, decide, search, draft, compare, and understand — not decorate a product with noise.',
  },
]

export const notesSection = {
  eyebrow: 'FIELD 04',
  title: 'Field notes',
  intro:
    'Fragments from building, debugging, observing, and occasionally stepping away from the screen long enough to notice the pattern.',
}

export const fieldNotes = [
  {
    title: 'Reality breaks beautiful diagrams',
    excerpt:
      'Every serious system starts as a clean flowchart and eventually meets a locked office, a missing document, a power cut, a policy exception, or a user who knows the process better than the software does.',
    tag: 'Systems',
  },
  {
    title: 'The problem with dashboards',
    excerpt:
      'Dashboards are easy to admire and hard to live inside. Most teams do not need more charts first. They need the underlying work to become clearer, calmer, and harder to lose.',
    tag: 'Operations',
  },
  {
    title: 'Rhythm, debugging, and a clean shot',
    excerpt:
      'Music, tennis, and software all punish force. The better answer is usually timing, attention, repetition, and knowing when not to interfere.',
    tag: 'Personal',
  },
]

export const personalLine = 'Rhythm matters — in systems, songs, and serves.'

export const contactSection = {
  eyebrow: 'FIELD 05',
  title: 'Start with the workflow',
  main:
    'The conversations I enjoy most usually begin with a messy process: a spreadsheet that has outgrown itself, an approval flow nobody fully trusts, an ERP that almost fits, a team doing too much by hand, or an AI idea that needs to become genuinely useful.',
  support:
    'I am especially interested in practical software for institutions, businesses, regulated workflows, internal tools, ERP systems, and AI-assisted operations.',
  cta: 'Write to me',
}

export const footer = {
  line: 'Built with care somewhere between a terminal, a notebook, and a half-finished melody.',
}
