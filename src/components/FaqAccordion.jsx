import { useState } from 'react'
import { faqs } from '../data/mockData'

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="faq" className="scroll-mt-20 py-16 dark:bg-black sm:py-20">
      <div className="section-wrap">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="eyebrow">Bạn cần biết</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#1D1D1F] dark:text-[#F5F5F7] sm:text-4xl">
              Câu hỏi thường gặp.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-black/10 dark:divide-white/10">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id

              return (
                <article key={faq.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    onClick={() => setOpenId((current) => (current === faq.id ? null : faq.id))}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-[#1D1D1F] dark:text-[#F5F5F7] sm:text-lg">
                      {faq.question}
                    </span>
                    <span className={`shrink-0 text-2xl font-light text-[#86868B] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <p className="overflow-hidden pr-10 text-sm leading-7 text-[#6E6E73] dark:text-[#a1a1a6]">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
