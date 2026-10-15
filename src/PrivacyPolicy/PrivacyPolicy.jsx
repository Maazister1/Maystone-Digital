import React from 'react';
import { IconShieldLock, IconUserCheck, IconBan } from '@tabler/icons-react';
import LegalLayout from '../Components/LegalLayout';

const highlights = [
  { icon: IconBan, title: "We Never Sell Your Data", desc: "Your information is only used to deliver our services and is never sold to third parties." },
  { icon: IconShieldLock, title: "UK GDPR Compliant", desc: "We follow the UK GDPR and Data Protection Act 2018, with secure, encrypted systems." },
  { icon: IconUserCheck, title: "You Stay in Control", desc: "Access, correct or delete your data at any time by emailing our team." },
];

const sections = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    paragraphs: [
      'Maystone Digital ("we", "us", "our") is a digital agency providing web development, mobile app development, creative branding, digital marketing, AI automation and back-office support services. Our UK office is located at 71-75 Shelton Street, London, WC2H 9JQ.',
      'We are the data controller for the personal information we collect through this website and when we provide our services. We process personal data in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    paragraphs: ['We only collect the information we need. This may include:'],
    list: [
      'Contact details such as your name, email address, phone number and company name, when you fill in a form or contact us.',
      'Project information you share with us, such as your requirements, goals, budget and timelines.',
      'Technical data such as your IP address, browser type, device information and pages visited, collected automatically when you use our website.',
      'Communication records, including emails and messages exchanged with our team.',
      'Billing details needed to issue invoices and process payments for our services.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    list: [
      'To respond to your enquiries and provide quotes or proposals.',
      'To deliver, manage and support the services you have engaged us for.',
      'To send invoices, manage payments and keep financial records.',
      'To improve our website, services and user experience.',
      'To send you newsletters or updates, only where you have opted in. You can unsubscribe at any time.',
      'To meet our legal and regulatory obligations.',
    ],
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    paragraphs: ['Under UK GDPR we rely on the following lawful bases:'],
    list: [
      'Contract: where processing is needed to provide services you have requested or agreed to.',
      'Legitimate interests: to run and improve our business, respond to enquiries and keep our website secure.',
      'Consent: for marketing emails and non-essential cookies. You can withdraw consent at any time.',
      'Legal obligation: where we must keep records for tax, accounting or legal reasons.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing Your Information',
    paragraphs: [
      'We never sell your personal data. We only share it with trusted third parties who help us run our business, such as hosting providers, email and CRM platforms, payment processors and professional advisers. These providers may only use your data to perform services for us and must keep it secure.',
      'Where data is transferred outside the UK, we make sure appropriate safeguards are in place, such as UK adequacy regulations or standard contractual clauses.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    paragraphs: [
      'Our website uses essential cookies to function properly and may use analytics cookies to understand how visitors use the site. Non-essential cookies are only used with your consent. You can control or delete cookies through your browser settings at any time.',
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    paragraphs: [
      'We keep personal data only for as long as necessary for the purposes described in this policy. Client and financial records are usually kept for six years to meet UK tax and accounting requirements. Enquiries that do not lead to a project are normally deleted within two years.',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    paragraphs: [
      'We use appropriate technical and organisational measures to protect your data, including encrypted connections, access controls and secure third-party platforms. Our team members are bound by confidentiality obligations and, where required, signed NDAs.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    paragraphs: ['Under UK data protection law you have the right to:'],
    list: [
      'Access the personal data we hold about you.',
      'Ask us to correct inaccurate or incomplete data.',
      'Ask us to delete your data in certain circumstances.',
      'Restrict or object to how we process your data.',
      'Request a copy of your data in a portable format.',
      'Withdraw your consent at any time, where we rely on consent.',
    ],
  },
  {
    id: 'complaints',
    title: 'Contact & Complaints',
    paragraphs: [
      'To exercise any of your rights or ask a question about this policy, email us at support@maystonedigital.com. We will respond within one month.',
      'If you are unhappy with how we have handled your data, you have the right to complain to the Information Commissioner\'s Office (ICO) at ico.org.uk.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy"
      highlight="Policy"
      intro="How Maystone Digital collects, uses and protects your personal information when you use our website and services."
      lastUpdated="October 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
