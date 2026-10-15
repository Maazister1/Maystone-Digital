import React from 'react';
import { IconBuilding, IconWorld, IconAccessible } from '@tabler/icons-react';
import LegalLayout from '../Components/LegalLayout';

const highlights = [
  { icon: IconBuilding, title: "Registered in the UK", desc: "Our UK office is based at 71-75 Shelton Street, London." },
  { icon: IconWorld, title: "Serving 3 Countries", desc: "Clients across the United Kingdom, United States and Canada." },
  { icon: IconAccessible, title: "Accessible by Design", desc: "We follow WCAG guidelines so our website works for everyone." },
];

const sections = [
  {
    id: 'company-information',
    title: 'Company Information',
    paragraphs: [
      'This website is operated by Maystone Digital, a digital agency serving clients in the United Kingdom, the United States and Canada.',
    ],
    list: [
      'Trading name: Maystone Digital',
      'UK address: 71-75 Shelton Street, London, WC2H 9JQ, United Kingdom',
      'USA address: 1001 S Main St, Kalispell, MT 59901, United States',
      'Canada: Toronto, ON M5V 2T6, Canada',
      'Email: support@maystonedigital.com',
      'Phone: +1 (406) 209-8706',
    ],
  },
  {
    id: 'data-protection',
    title: 'Data Protection Compliance',
    paragraphs: [
      'We comply with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 and the Privacy and Electronic Communications Regulations (PECR). Details of how we collect and use personal data are set out in our Privacy Policy.',
    ],
  },
  {
    id: 'consumer-rights',
    title: 'Consumer Rights',
    paragraphs: [
      'If you are a consumer in the UK, you have rights under the Consumer Rights Act 2015 and the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. Nothing in our terms or policies affects your statutory rights.',
    ],
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    paragraphs: [
      'We aim to make our website usable for everyone and follow the Web Content Accessibility Guidelines (WCAG) where possible. If you have difficulty using any part of this website, please contact us and we will do our best to help.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Website Content & Intellectual Property',
    paragraphs: [
      'All content on this website, including text, graphics, logos, designs and code, is owned by Maystone Digital or our licensors and is protected by copyright and trademark law. You may not copy, reproduce or distribute any content without our written permission. Client logos and project images are shown with permission and remain the property of their owners.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    paragraphs: [
      'Our website may contain links to other websites. We are not responsible for the content, security or privacy practices of those websites, and a link does not mean we endorse them.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    paragraphs: [
      'The information on this website is provided for general purposes only. While we work hard to keep it accurate and up to date, we make no guarantees about its completeness or accuracy. Any statistics, results or case studies shown reflect past projects and do not guarantee future results.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    paragraphs: [
      'Use of this website is governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.',
    ],
  },
];

export default function LegalRequirements() {
  return (
    <LegalLayout
      title="Legal"
      highlight="Requirements"
      intro="Company information, compliance details and the legal notices that apply to the Maystone Digital website."
      lastUpdated="October 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
