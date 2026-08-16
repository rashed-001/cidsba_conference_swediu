'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import { faqs } from '@/data/faq';

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <FaQuestionCircle className="mx-auto mb-5 text-5xl text-sky-700" />
          <span className="section-label">FAQ</span>
          <h1 className="section-heading">Frequently asked questions</h1>
          <p className="section-copy mx-auto">
            Browse answers to the most common questions about participation, paper submission, registration, and event logistics.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-10">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="mb-6 text-2xl font-black text-slate-900 md:text-3xl">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((item, itemIndex) => {
                  const key = `${section.category}-${itemIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div key={itemIndex} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_14px_30px_rgba(13,27,61,0.04)]">
                      <button
                        onClick={() => toggleItem(section.category, itemIndex)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-slate-50"
                      >
                        <span className="pr-4 text-base font-semibold text-slate-900 md:text-lg">{item.question}</span>
                        {isOpen ? <FaChevronUp className="flex-shrink-0 text-sky-700" /> : <FaChevronDown className="flex-shrink-0 text-sky-700" />}
                      </button>
                      {isOpen && (
                        <div className="border-t border-slate-200 px-6 py-4">
                          <p className="leading-7 text-slate-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-[0_18px_50px_rgba(13,27,61,0.06)] md:p-10">
          <h3 className="text-2xl font-black text-slate-900 md:text-3xl">Still have questions?</h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Reach out to our organizing team for more information about the conference and participation details.
          </p>
          <a href="/contact" className="primary-button mt-8">Contact us</a>
        </div>
      </div>
    </div>
  );
}