import {
  Layers3,
  Route,
  Server,
  ShieldCheck,
  Smartphone,
  UsersRound,
  WalletCards
} from 'lucide-react';

export const contact = {
  email: 'JjohnAdeleke91@gmail.com',
  phone: '+2349079472099',
  github: 'https://github.com/gostlite',
  linkedin: 'https://www.linkedin.com/in/john-adeleke-ab1368a7'
};

export const cvDownloads = [
  {
    title: 'Flutter / Mobile CV',
    description: 'For mobile app and fintech product roles',
    url: '/docs/John_Adeleke_flutter_CV.docx.pdf'
  },
  {
    title: 'Backend CV',
    description: 'For backend, APIs, services, and integrations',
    url: '/docs/John_Adeleke_backend_CV.docx.pdf'
  }
];

export const highlights = [
  { value: '5+', label: 'Years building production systems' },
  { value: 'Fintech', label: 'Banking, approvals, payments, auth' },
  { value: '<1s', label: 'Real-time logistics update target' },
  { value: 'Full cycle', label: 'Mobile, backend, deployment support' }
];

export const projects = [
  {
    title: 'USSD Service',
    type: 'Financial channel',
    description: 'Built a USSD experience for *5434# with space here for the provider link, screenshots, and flow details.',
    tags: ['USSD', 'Fintech', 'Backend'],
    imageLabel: 'USSD screenshot placeholder',
    links: [
      { label: 'App link', url: '#add-ussd-link', kind: 'external' },
      { label: 'Download', url: '#add-ussd-download', kind: 'download' }
    ]
  },
  {
    title: 'Courier Marketplace Logistics App',
    type: 'Mobile + backend platform',
    description: 'Built rider, user, and backend flows for booking, tracking, rider-user interaction, dynamic pricing, and delivery lifecycle updates.',
    tags: ['Flutter', 'WebSockets', 'Rider app', 'User app', 'API'],
    imageLabel: 'Logistics app images',
    images: [
      { src: '/images/movva-user-app.jpg', alt: 'Movva user logistics app screen', label: 'User app' },
      { src: '/images/movva-rider-app.jpg', alt: 'Movva rider logistics app screen', label: 'Rider app' }
    ],
    links: [
      { label: 'Product website', url: 'https://movva.quantivdigital.com', kind: 'external' },
      // { label: 'User app download', url: 'https://drive.google.com/file/d/1gHBWGs9POpEDpe6RQ9wMnhJFl-AcN1Xk/view?usp=sharing', kind: 'download' },
      // { label: 'Rider app download', url: 'https://drive.google.com/file/d/1cArQnTow79tE_vBTnGmuq0OlaocIKKK-/view?usp=sharing', kind: 'download' }
    ]
  },
  {
    title: 'A MFB Transaction View Backend',
    type: 'Role-based banking backend',
    description: 'Backend for transaction visibility with role-based access. Frontend link can be added when available.',
    tags: ['Backend', 'RBAC', 'Transactions', 'Banking'],
    imageLabel: 'Admin dashboard screenshot',
     images: [
      { src: '/images/image.png', alt: 'Landing page', label: 'User page' },
    ],
    links: [
      { label: 'Frontend link', url: 'https://spectrum-view.spectrumpay.com.ng/', kind: 'external' },
      { label: 'Download', url: '#add-spectrum-download', kind: 'download' }
    ]
  },
  {
    title: 'Bank Authenticator / Approver App',
    type: 'Secure mobile approvals',
    description: 'A banking authenticator app for secure transaction approval flows, Authorizer, and controlled access.',
    tags: ['Flutter', , 'Authenticator/Approvals', 'Secure APIs'],
    imageLabel: 'Approver app screenshots',
    images: [
      { src: '/images/auth_app.jpg', alt: 'Notify page', label: 'Notification page' },
      { src: '/images/auth.jpg', alt: 'Authorize page', label: 'Authorize page' },
    ],
    links: [
      { label: 'App link', url: 'https://web.lwappstore.com/share/lW-APP-Y26-PO1336', kind: 'external' },
      { label: 'Download', url: 'https://web.lwappstore.com/share/lW-APP-Y26-PO1336', kind: 'download' }
    ]
  },
  {
    title: 'Savings Service',
    type: 'Pluggable backend service',
    description: 'A savings module designed as a reusable service that can plug into different products or financial workflows.',
    tags: ['Backend', 'Savings', 'Reusable service'],
    imageLabel: 'Service diagram placeholder',
    links: [
      { label: 'Service link', url: '#add-savings-link', kind: 'external' },
      { label: 'Download', url: '#add-savings-download', kind: 'download' }
    ]
  },
  {
    title: 'Bank Notification Service',
    type: 'Event and messaging service',
    description: 'Notification service for bank systems, built to support reliable communication across product events.',
    tags: ['Backend', 'Notifications', 'Events', 'Banking'],
    imageLabel: 'Notification flow placeholder',
    links: [
      { label: 'Service link', url: '#add-notification-link', kind: 'external' },
      { label: 'Download', url: '#add-notification-download', kind: 'download' }
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
    items: ['REST APIs', 'GraphQL', 'JWT', 'OAuth', 'role-based access', 'service modules']
  },
  {
    title: 'Fintech',
    icon: ShieldCheck,
    items: ['OTP approvals', 'biometric auth', 'transactions', 'bill payments', 'data integrity']
  },
  {
    title: 'Real-time',
    icon: Route,
    items: ['WebSockets', 'Firebase Cloud Messaging', 'Firestore', 'live tracking']
  }
];

export const services = [
  {
    title: 'Flutter mobile apps',
    icon: Smartphone,
    description: 'Cross-platform mobile apps with clean architecture, responsive UI, secure API integration, and deployment support.'
  },
  {
    title: 'Backend services',
    icon: Layers3,
    description: 'Reusable services for savings, notifications, authentication, transactions, roles, and operational workflows.'
  },
  {
    title: 'Banking and fintech flows',
    icon: WalletCards,
    description: 'Approval apps, bill payment handling, onboarding, account creation tools, and secure financial experiences.'
  },
  {
    title: 'Logistics platforms',
    icon: UsersRound,
    description: 'User and rider experiences backed by real-time tracking, order states, pricing logic, and admin visibility.'
  }
];

export const experience = [
  {
    title: 'Flutter Mobile Engineer',
    company: 'Spectrum Microfinance Bank',
    period: 'Jul 2025 - Present',
    points: [
      'Built a banking authenticator app for secure transaction approvals.',
      'Developed internal mobile tools for customer account creation and management.',
      'Worked on onboarding, bill payments, validation, and secure API integrations.'
    ]
  },
  {
    title: 'Mobile & Backend Developer',
    company: 'AppFur Software',
    period: 'Mar 2025 - Oct 2025',
    points: [
      'Developed cross-platform Flutter apps with clean architecture.',
      'Built responsive B2B and B2C mobile interfaces.',
      'Integrated Firebase Cloud Messaging and backend APIs.'
    ]
  },
  {
    title: 'Mobile & Backend Developer',
    company: 'SOSTA APP',
    period: 'Sep 2024 - Jan 2025',
    points: [
      'Engineered Flutter apps using BLoC and Riverpod.',
      'Implemented biometric login, OAuth, WebSockets, and push notifications.',
      'Automated CI/CD pipelines for smoother deployment.'
    ]
  },
  {
    title: 'Mobile Developer',
    company: 'Pegasus Medical',
    period: 'Aug 2024 - Mar 2025',
    points: [
      'Built healthcare-focused mobile interfaces with accessibility improvements.',
      'Integrated Firestore for real-time data synchronization.',
      'Optimized API interactions for better app performance.'
    ]
  }
];
