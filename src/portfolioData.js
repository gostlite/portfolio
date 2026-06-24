import {
  BriefcaseBusiness,
  Layers3,
  MessageCircle,
  Route,
  Server,
  ShieldCheck,
  Smartphone,
  UsersRound,
  WalletCards
} from 'lucide-react';

export const contact = {
  email: 'JjohnAdeleke91@gmail.com',
  phone: '+234****2099',
  github: 'https://github.com/gostlite',
  linkedin: 'https://www.linkedin.com/in/john-adeleke-ab1368a7'
};

export const cvDownloads = [
  {
    title: 'Flutter / Mobile CV',
    description: 'For Flutter, mobile app, and fintech product roles',
    url: '/docs/John_Adeleke_flutter_CV.docx.pdf'
  },
  {
    title: 'Backend CV',
    description: 'For backend, API, fintech, and full-cycle engineering roles',
    url: '/docs/John_Adeleke_backend_CV.docx.pdf'
  }
];

export const highlights = [
  { value: '5+', label: 'Years building mobile & backend systems' },
  { value: 'Fintech', label: 'Banking, USSD, approvals, payments & auth' },
  { value: 'Real-time', label: 'WebSockets, live tracking & instant notifications' },
  { value: 'Full cycle', label: 'Mobile, backend, APIs, deployment & support' }
];

export const projects = [
  {
    title: 'USSD Banking Service',
    type: 'Financial channel',
    description:
      'Built a production USSD banking service for customer self-service transactions, account access, and financial operations under low-connectivity conditions.',
    tags: ['USSD', 'Fintech', 'Banking', 'Backend', 'Transactions'],
    imageLabel: 'Private banking system',
    links: [
      { label: 'Private banking system', url: '#private-ussd-system', kind: 'external' }
    ]
  },
  {
    title: 'Courier Marketplace Logistics App',
    type: 'Mobile + backend platform',
    description:
      'Built the user app, rider app, and backend flows for a logistics marketplace with package booking, real-time tracking, rider-user negotiation, dynamic pricing, escrow flow, and delivery lifecycle management.',
    tags: ['Flutter', 'Go', 'NestJS', 'WebSockets', 'Logistics', 'Escrow', 'Real-time Tracking'],
    imageLabel: 'Logistics app images',
    images: [
      { src: '/images/movva-user-app.jpg', alt: 'Movva user logistics app screen', label: 'User app' },
      { src: '/images/movva-rider-app.jpg', alt: 'Movva rider logistics app screen', label: 'Rider app' }
    ],
    links: [
      { label: 'View Product', url: 'https://movva.quantivdigital.com', kind: 'external' }
    ]
  },
  {
    title: 'Microfinance Transaction View Backend',
    type: 'Role-based banking backend',
    description:
      'Built a role-based transaction visibility system for microfinance operations, enabling authorized users to securely view and manage transaction records with controlled access.',
    tags: ['Backend', 'RBAC', 'Transactions', 'Banking', 'JWT', 'Secure APIs'],
    imageLabel: 'Admin dashboard screenshot',
    images: [
      { src: '/images/image.png', alt: 'Microfinance transaction dashboard screen', label: 'Dashboard' }
    ],
    links: [
      { label: 'View Dashboard', url: 'https://spectrum-view.spectrumpay.com.ng/', kind: 'external' },
      { label: 'Private Backend', url: '#private-transaction-backend', kind: 'external' }
    ]
  },
  {
    title: 'Bank Authenticator / Approver App',
    type: 'Secure mobile approvals',
    description:
      'Built a secure Flutter banking authenticator app for transaction approvals, authorization workflows, notification handling, and controlled access to sensitive financial actions.',
    tags: ['Flutter', 'Fintech', 'Authenticator', 'Approvals', 'Secure APIs', 'Notifications'],
    imageLabel: 'Approver app screenshots',
    images: [
      { src: '/images/auth_app.jpg', alt: 'Bank authenticator notification page', label: 'Notification page' },
      { src: '/images/auth.jpg', alt: 'Bank authenticator authorization page', label: 'Authorize page' }
    ],
    links: [
      { label: 'View App', url: 'https://web.lwappstore.com/share/lW-APP-Y26-PO1336', kind: 'external' },
      { label: 'Download App', url: 'https://web.lwappstore.com/share/lW-APP-Y26-PO1336', kind: 'download' }
    ]
  },
  {
    title: 'Savings Service',
    type: 'Pluggable backend service',
    description:
      'Designed a reusable backend savings service for financial products, supporting savings workflows, account operations, transaction handling, and integration with other banking modules.',
    tags: ['Backend', 'Fintech', 'Savings', 'Microservice', 'Transactions'],
    imageLabel: 'Private service architecture',
    links: [
      { label: 'Private Service', url: '#private-savings-service', kind: 'external' }
    ]
  },
  {
    title: 'Bank Notification Service',
    type: 'Event and messaging service',
    description:
      'Built an event-driven notification service for banking systems to deliver reliable alerts across transaction events, approvals, account activities, and operational workflows.',
    tags: ['Backend', 'Notifications', 'Events', 'Banking', 'Messaging'],
    imageLabel: 'Private notification flow',
    links: [
      { label: 'Private Service', url: '#private-notification-service', kind: 'external' }
    ]
  }
];

export const skillGroups = [
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Flutter', 'Dart', 'BLoC', 'Riverpod', 'Clean Architecture', 'MVVM']
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Go', 'Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'GraphQL', 'JWT', 'RBAC', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Fintech',
    icon: ShieldCheck,
    items: ['OTP approvals', 'biometric auth', 'USSD banking', 'transactions', 'bill payments', 'data integrity']
  },
  {
    title: 'Real-time',
    icon: Route,
    items: ['WebSockets', 'ACK/retry flows', 'Firebase Cloud Messaging', 'Firestore', 'live tracking', 'event-driven updates']
  }
];

export const services = [
  {
    title: 'Flutter mobile apps',
    icon: Smartphone,
    description:
      'Cross-platform Flutter apps with clean architecture, responsive UI, secure API integration, state management, performance optimization, and deployment support.'
  },
  {
    title: 'Backend services',
    icon: Layers3,
    description:
      'Scalable backend services using Go, Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, Redis, JWT, RBAC, and event-driven architecture.'
  },
  {
    title: 'Banking and fintech flows',
    icon: WalletCards,
    description:
      'Secure fintech workflows including transaction approvals, USSD banking, bill payments, onboarding, account management, authentication, and data integrity.'
  },
  {
    title: 'Logistics platforms',
    icon: UsersRound,
    description:
      'Logistics marketplace systems with user/rider apps, real-time tracking, price negotiation, escrow flows, package lifecycle states, and admin visibility.'
  }
];

export const bestFitRoles = [
  'Flutter Mobile Engineer',
  'Backend Engineer',
  'Mobile + Backend Engineer',
  'Fintech Engineer',
  'Real-Time Systems Engineer',
  'Contract Product Engineer'
];

export const workPrinciples = [
  {
    title: 'Reliable systems',
    icon: ShieldCheck,
    description: 'I care about secure, consistent, and fault-aware workflows for payments, authentication, approvals, and operational systems.'
  },
  {
    title: 'Clear product execution',
    icon: BriefcaseBusiness,
    description: 'I can work from requirements to implementation, testing, deployment, support, and iteration with minimal hand-holding.'
  },
  {
    title: 'Strong communication',
    icon: MessageCircle,
    description: 'I explain technical decisions clearly across product, engineering, and business conversations so teams can move faster.'
  }
];

export const experience = [
  {
    title: 'Flutter Mobile & Backend Engineer',
    company: 'Spectrum Microfinance Bank',
    period: 'Jul 2025 - Present',
    points: [
      'Built secure Flutter banking tools for transaction approvals, customer onboarding, and internal financial operations.',
      'Developed mobile and backend features for customer account creation, bill payments, validation, and API-driven workflows.',
      'Integrated secure APIs and authentication flows to support reliable financial transactions.'
    ]
  },
  {
    title: 'Mobile & Backend Developer',
    company: 'AppFur Software',
    period: 'Mar 2025 - Oct 2025',
    points: [
      'Developed cross-platform Flutter applications using clean architecture and reusable feature modules.',
      'Built responsive B2B and B2C interfaces optimized for usability and performance.',
      'Integrated Firebase Cloud Messaging, authentication flows, and secure backend APIs.'
    ]
  },
  {
    title: 'Mobile & Backend Developer',
    company: 'SOSTA APP',
    period: 'Sep 2024 - Jan 2025',
    points: [
      'Engineered scalable Flutter applications using BLoC, Riverpod, and clean architecture patterns.',
      'Implemented biometric login, OAuth, WebSockets, and push notifications for real-time user interactions.',
      'Automated CI/CD workflows to improve release speed and deployment reliability.'
    ]
  },
  {
    title: 'Mobile Developer',
    company: 'Pegasus Medical',
    period: 'Aug 2024 - Mar 2025',
    points: [
      'Built healthcare-focused Flutter interfaces with improved accessibility and responsive UI behavior.',
      'Integrated Firestore for real-time data synchronization across user workflows.',
      'Optimized API interactions and screen performance for smoother mobile experience.'
    ]
  }
];
