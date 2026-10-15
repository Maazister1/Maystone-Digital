import React from 'react';
import { IconReceipt, IconRefresh, IconCopyright } from '@tabler/icons-react';
import LegalLayout from '../Components/LegalLayout';

const highlights = [
  { icon: IconReceipt, title: "Clear Payments", desc: "Upfront deposit, milestone billing and 14-day invoice terms — no hidden fees." },
  { icon: IconRefresh, title: "Agreed Revisions", desc: "Every project includes the revision rounds set out in your proposal." },
  { icon: IconCopyright, title: "You Own the Work", desc: "Final deliverables become yours once the project is paid in full." },
];

const sections = [
  {
    id: 'agreement',
    title: 'Agreement to These Terms',
    paragraphs: [
      'These Terms of Service govern your use of the Maystone Digital website and any services we provide to you. By using our website or engaging our services, you agree to these terms. If you do not agree, please do not use our website or services.',
      'Specific projects may also be covered by a separate proposal, statement of work or contract. If there is a conflict, the project-specific agreement takes priority.',
    ],
  },
  {
    id: 'services',
    title: 'Our Services',
    paragraphs: [
      'Maystone Digital provides web development, mobile app development, software and SaaS development, creative branding and UI/UX design, digital marketing, AI automation, financial reporting and back-office support services. The exact scope, deliverables and timelines for each project are agreed in writing before work begins.',
    ],
  },
  {
    id: 'quotes-payments',
    title: 'Quotes & Payments',
    list: [
      'Quotes are valid for 30 days from the date they are issued unless stated otherwise.',
      'Most projects require an upfront deposit before work starts, with the balance paid at agreed milestones or on completion.',
      'Invoices are payable within 14 days unless otherwise agreed in writing.',
      'We may pause work on a project if invoices remain unpaid past their due date.',
      'Prices are shown exclusive of VAT, which will be added where applicable.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    paragraphs: ['To help us deliver your project on time, you agree to:'],
    list: [
      'Provide accurate information, content, feedback and approvals in a timely manner.',
      'Make sure you have the rights to any content, images, logos or materials you supply to us.',
      'Nominate a point of contact who can make decisions about the project.',
    ],
  },
  {
    id: 'revisions',
    title: 'Revisions & Changes',
    paragraphs: [
      'Each project includes the number of revision rounds stated in your proposal. Requests that fall outside the agreed scope, or extra revision rounds, may be charged separately and can affect delivery timelines. We will always confirm any additional costs with you before going ahead.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    paragraphs: [
      'Once a project is paid in full, ownership of the final deliverables created specifically for you transfers to you. Until full payment is received, all work remains the property of Maystone Digital.',
      'We keep ownership of our pre-existing tools, code libraries, frameworks and know-how, and grant you a licence to use them as part of your deliverables. Third-party assets such as fonts, stock images, plugins and software are subject to their own licence terms.',
      'Unless you ask us not to, we may display completed work in our portfolio and marketing materials.',
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    paragraphs: [
      'Both parties agree to keep confidential any non-public business information shared during a project. We are happy to sign a separate Non-Disclosure Agreement (NDA) on request.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    paragraphs: [
      'We take great care in everything we deliver, but we cannot guarantee specific business results such as rankings, traffic, leads or revenue. To the extent permitted by law, our total liability for any claim is limited to the amount you paid us for the service in question. We are not liable for indirect or consequential losses, such as loss of profit or data.',
      'Nothing in these terms limits liability that cannot be limited under UK law, such as liability for death or personal injury caused by negligence, or for fraud.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    paragraphs: [
      'Either party may end a project with written notice. If a project is cancelled, you agree to pay for all work completed up to the date of cancellation. Deposits cover initial planning and resource allocation and are non-refundable once work has started, unless otherwise agreed.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    paragraphs: [
      'These terms are governed by the laws of England and Wales, and any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.',
      'We may update these terms from time to time. The latest version will always be available on this page.',
    ],
  },
];

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of"
      highlight="Service"
      intro="The terms that apply when you use our website or work with Maystone Digital on a project."
      lastUpdated="October 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
