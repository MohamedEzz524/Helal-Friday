interface Program {
  id: number;
  category: string;
  title: string;
  description?: string;
  author: string;
  image: string;
}

export default function ProgramCard({ program }: { program: Program }) {
  if (!program) {
    return null;
  }

  return (
    <div className="bg-transparent border border-[#2a2219] rounded-2xl overflow-hidden card-shadow">
      <div className="flex">
        <div className="w-32 flex-shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="text-xs text-[#df1124] font-semibold mb-2 uppercase tracking-wider">
            {program.category}
          </div>
          <h3 className="text-xl font-bold mb-3">{program.title}</h3>
          {program.description && (
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {program.description}
            </p>
          )}
          <p className="text-sm text-gray-500">{program.author}</p>
        </div>
      </div>
    </div>
  );
}
