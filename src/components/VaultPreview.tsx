import { useState } from 'react';
import { Play, Lock, User } from 'lucide-react';

export default function VaultPreview() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'festival', label: 'Festival Elegance' },
    { id: 'crowd', label: 'Crowd Harmony' },
    { id: 'cosmic', label: 'Cosmic Motion' },
  ];

  const videos = [
    { id: 1, title: 'Ethereal Crowd Waves', category: 'crowd', curator: 'DJ Aurora', locked: false },
    { id: 2, title: 'Golden Hour Stage', category: 'festival', curator: 'VJ Nexus', locked: true },
    { id: 3, title: 'Cosmic Light Trails', category: 'cosmic', curator: 'DJ Aurora', locked: false },
    { id: 4, title: 'Festival Energy Pulse', category: 'festival', curator: 'Visual Maven', locked: true },
    { id: 5, title: 'Harmonious Motion', category: 'crowd', curator: 'DJ Aurora', locked: false },
    { id: 6, title: 'Celestial Rhythm', category: 'cosmic', curator: 'VJ Nexus', locked: true },
    { id: 7, title: 'Neon Dreams', category: 'cosmic', curator: 'Visual Maven', locked: false },
    { id: 8, title: 'Crowd Symphony', category: 'crowd', curator: 'DJ Aurora', locked: true },
    { id: 9, title: 'Stage Majesty', category: 'festival', curator: 'VJ Nexus', locked: false },
  ];

  const filteredVideos = activeCategory === 'all'
    ? videos
    : videos.filter(v => v.category === activeCategory);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-purple-300 via-orange-300 to-purple-300 bg-clip-text text-transparent mb-6">
            The Exclusive Stock Footage Vault
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-luxury font-light tracking-wide animate-glow-float">
            for Visionary DJs, Promoters & Festivals
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-indigo-900/40 text-gray-200 border border-violet-400/30 hover:border-orange-400/50 hover:text-orange-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, index }: { video: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative aspect-[1.618/1] rounded-2xl overflow-hidden border-2 border-violet-400/20 shadow-xl shadow-indigo-600/30 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-500 hover:scale-105"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        transform: isHovered ? 'rotateY(5deg) rotateX(5deg)' : 'rotateY(0) rotateX(0)',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-violet-900/60 to-purple-900/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-400/40 transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          {video.locked ? (
            <Lock className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          )}
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-violet-400/30">
          <User className="w-3 h-3 text-orange-300" />
          <span className="text-xs text-orange-200">{video.curator}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h3 className="text-lg font-semibold text-white mb-1">{video.title}</h3>
        {video.locked && (
          <p className="text-xs text-orange-300 flex items-center gap-1">
            <Lock className="w-3 h-3" />
            Members Only Preview
          </p>
        )}
      </div>
    </div>
  );
}
