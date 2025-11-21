import { testimonials } from "../../data/programs";

const WHATSAPP_LINK = "https://chat.whatsapp.com/LxUkHkmslyH5MLqdXjyC7B?mode=wwt";

export default function Testimonials() {
  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="relative section-spacing overflow-hidden">
      {/* Blurred accent backgrounds */}
      <div className="blur-accent-left top-[-200px] left-[-300px]" />
      <div className="blur-accent-right bottom-[-200px] right-[-300px]" />

      <div className="container-padding relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Let The Results Do The Talking...
        </h2>

        {/* First Row - Scrolling Left */}
        <div className="carousel-mask mb-6 overflow-hidden">
          <div className="flex gap-4 animate-scroll-left">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-80 h-96 rounded-xl overflow-hidden shadow-2xl border border-[#df1124]/20 hover:border-[#df1124]/40 transition-all"
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.id}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="carousel-mask overflow-hidden">
          <div className="flex gap-4 animate-scroll-right">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-80 h-96 rounded-xl overflow-hidden shadow-2xl border border-[#df1124]/20 hover:border-[#df1124]/40 transition-all"
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.id}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-lg text-gray-400 mt-12 font-medium">
          Yours can be the next one.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#df1124] to-[#f03d4e] text-white text-lg font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#df1124]/30"
          >
            JOIN THE WHATSAPP GROUP
          </a>
        </div>
      </div>
    </section>
  );
}
