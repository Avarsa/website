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
    'Personal website of Jinish Chandrababu, building operational software by learning difficult domains, modelling their rules, and shipping systems people depend on.',
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
  { label: 'Systems', href: '#work-now' },
  { label: 'Method', href: '#approach' },
  { label: 'Email', href: '#contact' },
]

export const hero = {
  line: 'Jinish Chandrababu',
  subheading: 'I build software for work that does not move unless the system is right.',
  support:
    'I learn unfamiliar domains, model their rules, and turn that learning into records, checks, documents, approvals, ledgers, and recovery paths people can trust.',
  primaryCta: 'Running systems',
  secondaryCta: 'Email',
}

export const liveWork = {
  title: 'Running systems',
  intro: 'Two examples. Different domains; the same habit of learning the work properly.',
  items: [
    {
      title: 'ArchVerity',
      href: 'https://pdadaman.in',
      context: 'PDA + DMC Daman',
      body:
        'CAD/DXF scrutiny and building permissions: GDR 2023 checks, fees, inspections, approvals, and certificates in one flow.',
      facts: [
        { value: '100+', label: 'architects / engineers' },
        { value: '80+', label: 'permissions + certificates' },
        { value: '₹10 Cr+', label: 'revenue, ~US$1M' },
        { value: 'DMC live', label: 'dmc-bpsas.m.frappe.cloud', href: 'https://dmc-bpsas.m.frappe.cloud' },
      ],
    },
    {
      title: 'EOLS',
      href: 'https://dnhddexcise.in',
      context: 'DNH & DD Excise',
      body:
        'Excise operations for a UT: production logs, stock movement, permits, NOCs, duties, fees, and ledgers.',
      facts: [
        { value: '17k+', label: 'permits' },
        { value: '~500/day', label: 'daily rhythm' },
        { value: '100 + 1k+', label: 'staff + licensees' },
        { value: '₹33 Cr+', label: 'revenue, ~US$3.4M' },
        { value: '₹500 Cr+/yr', label: 'expected flow, ~US$52M' },
      ],
    },
  ],
  closing:
    'The point is not architecture or excise. It is learning a domain deeply enough that the software can hold real work.',
}

export const buildSection = {
  eyebrow: '',
  title: 'Method',
  intro:
    'Most useful systems I have built began with not knowing enough. The work is to keep learning until the domain becomes modelled, testable, and usable.',
  cards: [
    {
      title: 'Learn the objects',
      body:
        'Drawings, stock entries, duties, certificates, people, exceptions. The nouns matter before the screens do.',
      label: '01',
    },
    {
      title: 'Make the rules visible',
      body:
        'Models, states, validations, permissions, documents, audit trails, and recovery paths. Hidden understanding is not enough.',
      label: '02',
    },
    {
      title: 'Improve with use',
      body:
        'Real work exposes repetition, unclear ownership, and places where automation or AI can help without adding noise.',
      label: '03',
    },
  ],
}

export const contactSection = {
  eyebrow: '',
  title: 'Write to me',
  main: 'Write if the work is specific, important, and not served well by generic software.',
  support:
    'I am interested in substantial systems, new domains, public or regulated operations, industrial workflows, internal platforms, and useful AI inside real work.',
  cta: 'Write to me',
}

export const footer = {
  line: 'Built with care somewhere between a terminal, a notebook, and a half-finished melody.',
}
