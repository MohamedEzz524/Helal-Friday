import heroImage from "../../assets/hero.jpeg";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/LxUkHkmslyH5MLqdXjyC7B?mode=wwt";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Blurred accent backgrounds */}
      <div className="blur-accent-left top-[-200px] left-[-200px]" />
      <div className="blur-accent-right top-[-100px] right-[-200px]" />

      <div className="container-padding relative z-10 text-center pb-20">
        {/* Hero Image */}
        <div className="mb-8 flex justify-center">
          <img
            src={heroImage}
            alt="Digital Launchpad Black Friday"
            className="max-w-md w-full h-auto rounded-2xl"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black/50 border border-[#df1124]/30 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium whitespace-nowrap">
            SUNDAY, NOV. 23RD, AT 12 PM EST
          </span>
        </div>

        {/* Main heading */}
        <h1 className="hero-heading font-bold leading-tight mb-6">
          Get{" "}
          <span className="bg-[#df1124] text-white px-3 py-1 rounded">
            Lifetime Access
          </span>{" "}
          To 10+ High-Income Business
          <br />
          Programs Inside Digital Launchpad{" "}
          <span className="bg-[#df1124] text-white px-3 py-1 rounded">
            For Less
          </span>{" "}
          Than
          <br />
          What Most People Pay For A Single Course
        </h1>

        {/* Subheading */}
        <p className="hero-subheading text-gray-400 mb-8 max-w-3xl mx-auto">
          You'll have less than 12 hours to get Digital Launchpad at the lowest
          price
          <br />
          ever on Sunday, November 23rd, at 12 PM EST, inside the WhatsApp
          Group.
        </p>

        {/* CTA Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#df1124] to-[#f03d4e] text-white text-lg font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity"
        >
          JOIN THE WHATSAPP GROUP
        </a>

        {/* 3D Rectangles */}
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 flex items-end justify-center">
        {/* SVG wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <img
            src="https://ext.same-assets.com/1874618372/2827580057.svg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
