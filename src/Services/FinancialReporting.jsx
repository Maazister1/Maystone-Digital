import React, { useState } from "react";
import { 
  IconArrowRight, 
  IconChevronDown, 
  IconCircleCheckFilled, 
  IconFileSpreadsheet, 
  IconCalculator, 
  IconShieldCheck, 
  IconClock, 
  IconHelpCircle 
} from "@tabler/icons-react";

export default function FinancialReporting() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const s = {
    heroDesc: "Clear financial oversight, compliant books, and proactive tax strategy designed to protect your margins and scale your enterprise.",
    intro: {
      heading: "Financial reporting that turns complex ledgers into clear visibility for executive decisions.",
      body: [
        "Maintaining rigorous financial records shouldn't feel like an administrative burden. We take over your ledgers, reconciliations, and reporting routines so you always know your exact financial position.",
        "From monthly balance sheets to annual tax filings, our team ensures complete statutory compliance while optimizing your tax efficiency across every operating structure."
      ],
      stats: [
        { value: "100%", label: "Tax & Statutory Compliance" },
        { value: "24/7", label: "Real-Time Ledger Visibility" },
        { value: "0", label: "Missed Filing Deadlines" }
      ]
    },
    capabilitiesHeading: {
      desc: "Comprehensive financial management tailored to modern high-growth businesses."
    },
    capabilities: [
      {
        title: "Monthly Bookkeeping & Reconciliations",
        desc: "Rigorous categorization of transactions, bank and credit card reconciliations, and clean ledger maintenance."
      },
      {
        title: "Financial Statements & Management Reports",
        desc: "Customized P&L statements, cash flow forecasts, and balance sheets delivered on a predictable monthly cadence."
      },
      {
        title: "Corporate & Indirect Tax Filing",
        desc: "Proactive tax preparation, filing, and strategic planning to minimize liabilities and ensure total regulatory compliance."
      },
      {
        title: "Payroll & Expense Management",
        desc: "Streamlined payroll processing, contractor payments, and structured employee expense tracking systems."
      }
    ],
    why: [
      {
        title: "Proactive Tax Planning",
        desc: "We don't just file taxes after the fact—we advise you throughout the year to strategically minimize your liabilities."
      },
      {
        title: "Zero Administrative Stress",
        desc: "Hand off your receipts, invoices, and statements. We organize everything into audit-ready digital records."
      },
      {
        title: "Executive Clarity",
        desc: "Receive clear, jargon-free explanations of your financial health so you can make confident capital allocation choices."
      }
    ],
    process: [
      { step: "01", title: "Initial Books Audit", desc: "We review your existing financial records to identify cleanup areas and establish a clean baseline." },
      { step: "02", title: "Workflow Integration", desc: "We connect your banking, invoicing, and payment tools to automate secure data feeds." },
      { step: "03", title: "Monthly Rhythm", desc: "Every month, we reconcile accounts, close books, and deliver your executive financial packet." },
      { step: "04", title: "Annual Tax & Review", desc: "We compile year-end reports and file corporate taxes smoothly ahead of deadlines." }
    ],
    faqs: [
      {
        q: "How do we transfer our existing books to your team?",
        a: "We securely connect to your existing accounting software (like QuickBooks, Xero, or spreadsheets) and handle the complete migration and cleanup process."
      },
      {
        q: "Do you handle both bookkeeping and tax filing?",
        a: "Yes. We offer an integrated service covering day-to-day bookkeeping, monthly financial reporting, and end-of-year tax preparation and filing."
      },
      {
        q: "How often will we receive financial updates?",
        a: "You receive a comprehensive financial reporting package every month, along with real-time access to your live dashboards."
      }
    ],
    disclaimer: "Disclaimer: Financial reporting and tax services are executed in accordance with applicable regional accounting standards and regulatory frameworks."
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] selection:bg-[#FE083B] selection:text-white">
      <main>
        {/* Page Hero Section - Shifted Up & Tightened */}
        <section className="relative pt-10 pb-12 lg:pt-14 lg:pb-16 bg-[#0a0a0a] overflow-hidden text-center border-b border-white/5">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#FE083B]/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Tag */}
            <div className="inline-block">
  <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Financial Reporting & Tax
  </span>
</div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Precise financial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">intelligence</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              {s.heroDesc}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white hover:opacity-90 shadow-xl shadow-[#FE083B]/25 transition-all"
              >
                Speak to us <IconArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/process" 
                className="inline-flex items-center px-8 py-4 rounded-xl font-semibold bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 text-white transition-all"
              >
                How we work
              </a>
            </div>
          </div>
        </section>

        {/* Statement Quote Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              "{s.intro.heading}"
            </blockquote>
          </div>
        </section>

        {/* Intro Detail with Image & Stats Section */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#12100f] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#141211] shadow-2xl p-3">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
                  alt="Financial reports and records prepared for review"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover rounded-2xl opacity-80"
                />
              </div>

              <div className="max-w-xl">
                {s.intro.body.map((p, index) => (
                  <p key={index} className="mt-5 text-neutral-400 first:mt-0 leading-relaxed text-base sm:text-lg">
                    {p}
                  </p>
                ))}
                
                <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3">
                  {s.intro.stats.map((st) => (
                    <div key={st.label} className="border-t border-white/10 pt-4">
                      <dt className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">{st.value}</dt>
                      <dd className="mt-2 text-xs text-neutral-400 font-medium">{st.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-[#FE5211] font-semibold text-sm tracking-wider uppercase">Capabilities</span>
              <h2 className="text-3xl font-bold sm:text-4xl mt-2">What we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">look after</span></h2>
              <p className="mt-3 text-neutral-400 text-sm sm:text-base">{s.capabilitiesHeading.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {s.capabilities.map((cap, i) => (
                <div key={cap.title} className="bg-[#141211] border border-white/10 rounded-2xl p-8 hover:border-[#FE083B]/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center text-[#FE083B] mb-6">
                      {i === 0 ? <IconFileSpreadsheet className="w-6 h-6" /> : i === 1 ? <IconCalculator className="w-6 h-6" /> : i === 2 ? <IconShieldCheck className="w-6 h-6" /> : <IconClock className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold">{cap.title}</h3>
                    <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clients Keep Records Here Section */}
        <section className="py-24 bg-[#12100f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-start">
              <div>
                <span className="text-[#FE5211] font-semibold text-sm tracking-wider uppercase">Value</span>
                <h2 className="text-3xl font-bold sm:text-4xl mt-2">Why clients keep these records <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">with us</span></h2>
              </div>
              
              <div className="space-y-6">
                {s.why.map((item, idx) => (
                  <div key={idx} className="bg-[#141211] border border-white/10 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold flex items-center gap-3">
                      <IconCircleCheckFilled className="w-5 h-5 text-[#FE083B] shrink-0" />
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-400 pl-8 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="text-[#FE5211] font-semibold text-sm tracking-wider uppercase">Process</span>
              <h2 className="text-3xl font-bold sm:text-4xl mt-2">A predictable monthly <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">rhythm</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {s.process.map((step) => (
                <div key={step.step} className="bg-[#141211] border border-white/10 rounded-2xl p-6 relative">
                  <span className="text-3xl font-extrabold text-[#FE083B]/40 mb-4 block">{step.step}</span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-[#12100f] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
              <div>
                <span className="text-[#FE5211] font-semibold text-sm tracking-wider uppercase">Support</span>
                <h2 className="text-3xl font-bold mt-2">Questions about <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">working with us</span></h2>
                <p className="text-neutral-400 text-sm mt-4">Everything you need to know about transitioning your accounts and ongoing reporting.</p>
              </div>

              <div className="space-y-4">
                {s.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-white/10 rounded-2xl bg-[#141211] overflow-hidden transition-all">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 text-left font-semibold flex items-center justify-between gap-4 hover:text-[#FE083B]"
                    >
                      <span className="flex items-center gap-3">
                        <IconHelpCircle className="w-4 h-4 text-[#FE083B] shrink-0" />
                        {faq.q}
                      </span>
                      <IconChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? "rotate-180 text-[#FE083B]" : "text-neutral-400"}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        {s.disclaimer && (
          <section className="py-6 bg-[#0a0a0a]">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <p className="text-xs text-neutral-500">{s.disclaimer}</p>
            </div>
          </section>
        )}

        {/* Closing CTA Banner */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#12100f] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#141211] border border-white/10 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE083B]/10 blur-3xl pointer-events-none rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Bring us your records as they are.</h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-base">
              We will tell you what needs tidying, what we can take over and what the monthly rhythm would look like.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white hover:opacity-90 shadow-lg shadow-[#FE083B]/25 transition-all"
              >
                Get started
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 rounded-xl font-semibold bg-[#0a0a0a] border border-white/10 hover:border-[#FE083B]/50 text-white transition-all"
              >
                View pricing
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}