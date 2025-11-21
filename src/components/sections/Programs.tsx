import ProgramCard from "../common/ProgramCard";
import { programs } from "../../data/programs";

const WHATSAPP_LINK = "https://chat.whatsapp.com/LxUkHkmslyH5MLqdXjyC7B?mode=wwt";

export default function Programs() {
  return (
    <section className="relative section-spacing">
      <div className="container-padding">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-black/50 border border-gray-700 rounded-full px-4 py-2 text-sm">
            Programs
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Here's What You Get Inside Digital Launchpad
          <br />
          For The Lowest Price Ever:
        </h2>

        {/* Programs Grid */}
        <div className="grid gap-6 max-w-3xl mx-auto">
          {programs.slice(0, 11).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
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
