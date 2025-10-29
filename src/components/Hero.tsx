import { Sparkles, Users, Film } from 'lucide-react';
import FloatingVideoCard from './FloatingVideoCard';

export default function Hero() {
  const previewCards = [
    { id: 1, title: 'Crowd Energy', position: 'top-32 left-10' },
    { id: 2, title: 'Light Beams', position: 'top-32 right-10' },
    { id: 4, title: 'Festival Waves', position: 'bottom-40 right-12' },
    { id: 5, title: 'DJ Symphony', position: 'top-1/2 left-10' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

      {previewCards.map((card, index) => (
        <FloatingVideoCard
          key={card.id}
          title={card.title}
          position={card.position}
          delay={index * 0.2}
        />
      ))}

      <div className="relative z-10 text-center max-w-5xl">
        <div className="mb-8 inline-block">
          <h1 className="tracking-tight mb-4">
            <div className="text-7xl md:text-8xl solar-flare-title">
              Baldrhythms
            </div>
            <div className="text-4xl md:text-5xl solar-flare-title mt-2">
              Ad Labs
            </div>
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
        </div>

        <p className="text-2xl md:text-3xl font-serif bg-gradient-to-r from-purple-300 via-orange-300 to-purple-300 bg-clip-text text-transparent mb-12 max-w-3xl mx-auto leading-relaxed">
          Walk Among the Stars, Where Legends Reign
        </p>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 -mt-4 font-luxury font-light tracking-wide animate-glow-float">
          Each clip is a celestial jewel in your royal cosmos, awaiting your command to shine.
        </p>

        <button
          className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 text-white font-semibold text-lg rounded-full overflow-hidden shadow-2xl shadow-purple-500/50 hover:shadow-orange-500/80 transition-all duration-300 hover:scale-105 -mt-4"
          aria-label="Unlock the Vault"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            Unlock the Vault
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <MetricBadge icon={Film} label="10K+ Clips Curated" />
          <MetricBadge icon={Users} label="5K+ Creators Inspired" />
          <MetricBadge icon={Sparkles} label="Lifetime Access Available" />
        </div>
      </div>
    </section>
  );
}

function MetricBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-400/30 rounded-full shadow-lg shadow-purple-500/20">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/30">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-sm font-medium text-gray-100">{label}</span>
    </div>
  );
}
