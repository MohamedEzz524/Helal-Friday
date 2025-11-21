import { useState, useMemo } from "react";
import { faqs } from "../../data/programs";

export default function FAQ() {
  // Split FAQs into two arrays
  const { leftColumn, rightColumn } = useMemo(() => {
    const midPoint = Math.ceil(faqs.length / 2);
    return {
      leftColumn: faqs.slice(0, midPoint),
      rightColumn: faqs.slice(midPoint),
    };
  }, []);

  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null);
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

  const renderFAQItem = (
    faq: typeof faqs[0],
    index: number,
    isOpen: boolean,
    onToggle: () => void
  ) => (
    <div
      key={faq.id}
      className={`transition-all rounded-lg border ${
        isOpen ? "border-[#df1124]" : "border-[#df1124]/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-4 md:px-6 text-left"
      >
        <span className="text-base md:text-lg font-medium pr-4 text-white">
          {faq.question}
        </span>
        <span
          className={`text-xl md:text-2xl flex-shrink-0 transition-transform ${
            isOpen ? "rotate-45 text-[#df1124]" : "text-gray-400"
          }`}
        >
          +
        </span>
      </button>
      {isOpen && faq.answer && (
        <div className="px-4 md:px-6 pb-4 text-gray-400">{faq.answer}</div>
      )}
    </div>
  );

  return (
    <section className="relative section-spacing">
      <div className="container-padding relative z-10 max-w-6xl">
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <span className="text-[#df1124] text-sm font-semibold uppercase tracking-wider">
            Frequently Asked Questions
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Get Your Questions Answered
        </h2>

        {/* FAQ Container with Large Blur */}
        <div className="relative">
          {/* Large Blurred Accent Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#df1124]/40 to-[#f03d4e]/40 rounded-3xl blur-[100px] scale-110" />

          {/* FAQ Content - 2 Columns */}
          <div className="relative bg-gradient-to-br from-[#df1124]/20 to-black/30 backdrop-blur-sm border border-[#df1124]/20 rounded-3xl p-6 md:p-8 shadow-xl shadow-[#df1124]/10">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Left Column */}
              <div className="flex-1 space-y-4">
                {leftColumn.map((faq, index) =>
                  renderFAQItem(
                    faq,
                    index,
                    openLeftIndex === index,
                    () =>
                      setOpenLeftIndex(
                        openLeftIndex === index ? null : index
                      )
                  )
                )}
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-4">
                {rightColumn.map((faq, index) =>
                  renderFAQItem(
                    faq,
                    index,
                    openRightIndex === index,
                    () =>
                      setOpenRightIndex(
                        openRightIndex === index ? null : index
                      )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
