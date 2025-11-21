const WHATSAPP_LINK =
  "https://chat.whatsapp.com/LxUkHkmslyH5MLqdXjyC7B?mode=wwt";

export default function Pricing() {
  return (
    <section className="relative section-spacing">
      <div className="container-padding relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Success Online Doesn't Require Much Investment.
        </h2>

        <p className="text-center text-gray-400 mb-4 max-w-3xl mx-auto">
          We've created Digital Launchpad to be the most affordable online
          school out there, so you can start your online career without having
          to invest too much...
        </p>

        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          That's why you'll get everything you need in order to succeed online,
          for only:
        </p>

        {/* Pricing Card with Large Blur */}
        <div className="relative max-w-2xl mx-auto">
          {/* Large Blurred Accent Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#df1124]/40 to-[#f03d4e]/40 rounded-3xl blur-[100px] scale-110" />

          {/* Card Content */}
          <div className="relative bg-gradient-to-br from-[#df1124]/10 to-black/30 backdrop-blur-sm border border-[#df1124]/20 rounded-3xl p-12 shadow-xl shadow-[#df1124]/10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="text-3xl">🚀</div>
              <h3 className="text-2xl font-bold text-[#df1124]">
                DIGITAL LAUNCHPAD
              </h3>
            </div>

            <p className="text-center text-gray-300 mb-8">
              Digital Launchpad, with the original price, is already
              <br />
              the cheapest business program I've ever sold.
            </p>

            <p className="text-center text-gray-300 mb-8">
              But on Sunday (Nov 23rd), you'll have less than 12 hours to get it
              at the lowest price ever, with an exclusive discount inside the
              WhatsApp Group.
            </p>

            <div className="border-t border-[#df1124]/30 pt-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">
                  Digital Launchpad Programs (1 year access)
                </span>
                <span className="text-gray-400 line-through">$444</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">
                  Discounted Price (Lifetime)
                </span>
                <span className="text-gray-400">Unrevealed</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-[#df1124] mb-2">$XXX</div>
              <div className="text-gray-400 text-sm">To be revealed</div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#df1124] to-[#f03d4e] text-white text-lg font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity text-center shadow-lg shadow-[#df1124]/30"
            >
              JOIN THE WHATSAPP GROUP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
