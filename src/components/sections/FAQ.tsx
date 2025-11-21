import { useState } from "react";
import { faqs } from "../../data/programs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative section-spacing">
      <div className="container-padding relative z-10">
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
        <div className="relative max-w-3xl mx-auto">
          {/* Large Blurred Accent Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#df1124]/40 to-[#f03d4e]/40 rounded-3xl blur-[100px] scale-110" />

          {/* FAQ Content */}
          <div className="relative bg-gradient-to-br from-[#df1124]/20 to-black/30 backdrop-blur-sm border border-[#df1124]/20 rounded-3xl shadow-xl shadow-[#df1124]/10">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`transition-all rounded-lg ${
                    openIndex === index
                      ? "bg-[#df1124]/15"
                      : "bg-transparent"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between py-6 px-8 text-left"
                  >
                    <span
                      className={`text-lg font-medium pr-8 transition-colors ${
                        openIndex === index
                          ? "text-[#df1124]"
                          : "text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl flex-shrink-0 transition-transform ${
                        openIndex === index
                          ? "rotate-45 text-[#df1124]"
                          : "text-gray-400"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-6 text-gray-400">
                      {/* Add answer content here if available */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
