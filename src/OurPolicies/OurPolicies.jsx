import React from 'react';
import { IconHeadset, IconCalendarX, IconBadge } from '@tabler/icons-react';
import LegalLayout from '../Components/LegalLayout';

const highlights = [
  { icon: IconCalendarX, title: "Flexible Cancellation", desc: "Cancel projects with written notice and retainers with 30 days' notice." },
  { icon: IconHeadset, title: "Reliable Support", desc: "Free post-launch support and replies to requests within one business day." },
  { icon: IconBadge, title: "Quality Guaranteed", desc: "Every deliverable is reviewed and tested across devices before handover." },
];

const sections = [
  {
    id: 'refund-policy',
    title: 'Refund Policy',
    paragraphs: [
      'Because our services are custom-built for each client, refunds are handled case by case. Deposits are non-refundable once work has started. If you are not satisfied with a deliverable, please tell us and we will work with you to put it right within the agreed scope.',
      'If we are unable to deliver a service as agreed, we will refund any payments made for work that has not been completed.',
    ],
  },
  {
    id: 'cancellation-policy',
    title: 'Cancellation Policy',
    list: [
      'You can cancel a project at any time by giving us written notice by email.',
      'You will be invoiced for all work completed up to the date of cancellation.',
      'Monthly retainers (such as marketing or back-office support) can be cancelled with 30 days\' written notice.',
    ],
  },
  {
    id: 'support-policy',
    title: 'Support & Maintenance Policy',
    paragraphs: [
      'Every website and app we deliver includes a free post-launch support period, as stated in your proposal, to fix any bugs in the work we delivered. After this period, ongoing support, updates and maintenance are available through our monthly maintenance plans.',
      'We aim to respond to all support requests within one business day, and to urgent issues as quickly as possible.',
    ],
  },
  {
    id: 'communication-policy',
    title: 'Communication Policy',
    list: [
      'Our standard working hours are Monday to Friday, 9:00 to 18:00 (UK time).',
      'Every project has a dedicated point of contact who will keep you updated on progress.',
      'Project updates are shared by email, video call or a shared project board, depending on what suits you best.',
    ],
  },
  {
    id: 'quality-policy',
    title: 'Quality Assurance Policy',
    paragraphs: [
      'All work goes through internal review and testing before delivery. Websites and apps are tested across modern browsers and devices, and checked for performance, responsiveness and basic accessibility.',
    ],
  },
  {
    id: 'data-confidentiality',
    title: 'Data & Confidentiality Policy',
    paragraphs: [
      'We treat all client data and business information as strictly confidential. Access is limited to team members working on your project, and we are happy to sign a Non-Disclosure Agreement on request. For full details on how we handle personal data, please read our Privacy Policy.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use Policy',
    paragraphs: [
      'We do not take on projects that promote illegal activity, hate speech, violence, fraud, or that infringe the intellectual property rights of others. We reserve the right to decline or stop work on any project that breaches this policy.',
    ],
  },
  {
    id: 'complaints-policy',
    title: 'Complaints Policy',
    paragraphs: [
      'If you are unhappy with any part of our service, please email support@maystonedigital.com with the details. We will acknowledge your complaint within two business days and aim to resolve it within 14 days.',
    ],
  },
];

export default function OurPolicies() {
  return (
    <LegalLayout
      title="Our"
      highlight="Policies"
      intro="The policies that guide how we work with our clients, from refunds and cancellations to support and quality."
      lastUpdated="October 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
