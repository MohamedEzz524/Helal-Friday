const WHATSAPP_LINK = "https://chat.whatsapp.com/LxUkHkmslyH5MLqdXjyC7B?mode=wwt";

export default function SkillStacking() {
  const skillCards = [
    {
      icon: "📈",
      title:
        "Start With One Skill, Master It, Then Add Another When You're Ready",
      points: [
        "No pressure to learn everything at once",
        'No guilt about "not finishing" before moving on',
        "Strategic skill acquisition over years to make you a full-fledged business owner, not a one-trick poney",
      ],
      image: "https://ext.same-assets.com/1874618372/264278863.png",
    },
    {
      icon: "🔄",
      title:
        "Pivot Between Business Models Without Losing Access To Your Foundation",
      points: [
        "Try e-commerce for 6 months",
        "If it's not clicking, shift to copywriting",
        "Want to combine both later? The training is still there",
        "You're not locked into one path forever",
      ],
      image: "https://ext.same-assets.com/1874618372/1327023303.png",
    },
    {
      icon: "⚡",
      title: "Cross-Progress Skills To Create Unique Competitive Advantages",
      points: [
        "Use copywriting to improve your e-commerce product pages",
        "Use sales skills to close bigger deals for your agency",
        "Use personal branding to attract better clients for your services",
        "The combinations are endless when you own all the programs",
      ],
      image: "https://ext.same-assets.com/1874618372/1463453729.png",
    },
  ];

  return (
    <section className="relative section-spacing">
      <div className="container-padding">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          The Skill Stacking Opportunity
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Here's how the most successful Digital Launchpad members actually use
          the platform:
        </p>

        {/* Month Timeline */}
        <div className="flex mb-16 overflow-hidden">
          <div className="flex-1 bg-gradient-to-br from-[#df1124]/20 to-[#df1124]/10 p-8 relative">
            <h3 className="text-[clamp(2rem,8vw,6rem)] font-bold text-[#df1124]/40 leading-none mb-4">
              Month 1
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              They start with copywriting. Learn to write persuasive words.
              Start freelancing.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-br from-[#df1124]/10 to-transparent blur-2xl" />
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#f03d4e]/15 to-[#df1124]/10 p-8 relative">
            <p className="text-sm md:text-base text-gray-300 mb-4">
              They learn sales and appointment setting. Now they can close their
              own deals.
            </p>
            <h3 className="text-[clamp(2rem,8vw,6rem)] font-bold text-[#df1124]/40 leading-none">
              Month 6
            </h3>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-[#df1124]/10 to-transparent blur-2xl" />
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#df1124]/10 to-black/40 p-8 relative">
            <h3 className="text-[clamp(2rem,8vw,6rem)] font-bold text-[#df1124]/40 leading-none mb-4">
              Month 12
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              They dive into personal branding. Now they can attract customers
              organically everyday.
            </p>
            <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-bl from-[#df1124]/10 to-transparent blur-2xl" />
          </div>
        </div>

        {/* Skill Cards */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className={`bg-transparent border border-[#2a2219] rounded-2xl overflow-hidden card-shadow flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-[43%] flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover aspect-[2/1]"
                />
              </div>
              <div className="flex-1 p-8">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-400 flex items-start"
                    >
                      <span className="mr-2 text-[#df1124]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
