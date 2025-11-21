import ProgramCard from "../common/ProgramCard";
import { bonuses } from "../../data/programs";

export default function Bonuses() {
  return (
    <section className="relative section-spacing">
      <div className="container-padding">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          SPECIAL BONUSES
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Digital Launchpad will help you not only to succeed in your business,
          <br />
          but also to improve your health, self-esteem and performance.
        </p>

        {/* Bonuses Grid */}
        <div className="grid gap-6 max-w-3xl mx-auto">
          {bonuses.map((bonus) => (
            <ProgramCard key={bonus.id} program={bonus} />
          ))}
        </div>
      </div>
    </section>
  );
}
