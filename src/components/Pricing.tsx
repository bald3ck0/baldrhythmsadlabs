import { useState } from 'react';
import { Check, Star, Crown, Sparkles, Mail } from 'lucide-react';

export default function Pricing() {
  const [email, setEmail] = useState('');

  const tiers = [
    {
      name: 'Signature Vault',
      subtitle: 'Lifetime Access',
      price: '$297',
      priceDetail: 'One-Time Payment',
      description: 'Unlock the complete vault forever',
      features: [
        '10,000+ Premium 4K Clips',
        'Royalty-Free Usage',
        'Beat-Synced Collections',
        'Unlimited Downloads',
        'New Content Monthly',
        'Commercial License',
        'Priority Support',
      ],
      icon: Crown,
      gradient: 'from-purple-600 to-orange-500',
      borderGlow: 'purple-400',
      popular: true,
    },
    {
      name: 'Grand Festival',
      subtitle: 'Premium Edition',
      price: '$597',
      priceDetail: 'One-Time Premium',
      description: 'Exclusive limited footage sets included',
      features: [
        'Everything in Signature Vault',
        'Exclusive Festival Collections',
        'Ultra-Premium 8K Clips',
        'Custom Request Credits',
        'VIP Curator Access',
        'Extended Commercial License',
        'White-Glove Support',
      ],
      icon: Sparkles,
      gradient: 'from-violet-600 to-fuchsia-600',
      borderGlow: 'violet-400',
      popular: false,
    },
  ];

  const testimonials = [
    { quote: 'Instantly elevated my visuals — worth every frame.', author: 'DJ Aether' },
    { quote: 'The vault transformed our festival experience completely.', author: 'Luna Events' },
    { quote: 'Unmatched quality. A game-changer for my performances.', author: 'VJ Cosmos' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="relative pt-16 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-purple-300 via-orange-300 to-purple-300 bg-clip-text text-transparent mb-6">
            Vault Access
          </h2>
          <p className="text-2xl text-orange-200 mb-4">
            No Subscriptions. Lifetime Access.
          </p>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Invest once, create forever. Join the elite circle of creators who refuse to compromise.
          </p>
          <div className="mt-6 inline-block px-6 py-2 bg-red-500/20 border border-red-400/30 rounded-full">
            <p className="text-sm text-red-300 font-medium">
              ⏳Discount Ending Soon
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                tier.popular ? 'shadow-2xl shadow-amber-500/50' : ''
              }`}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 py-2 bg-gradient-to-r from-purple-600 to-orange-500 text-center">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </p>
                </div>
              )}

              <div className={`h-full border-2 border-${tier.borderGlow}/30 hover:border-${tier.borderGlow} rounded-3xl bg-gradient-to-br from-indigo-950/50 to-violet-950/50 backdrop-blur-sm p-8 ${
                tier.popular ? 'pt-12' : ''
              }`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-serif text-white mb-1">{tier.name}</h3>
                <p className="text-sm text-orange-300 mb-4">{tier.subtitle}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-orange-300 to-purple-300 bg-clip-text text-transparent">{tier.price}</span>
                  </div>
                  {tier.priceDetail && (
                    <p className="text-sm text-gray-400">{tier.priceDetail}</p>
                  )}
                </div>

                <p className="text-gray-300 mb-8">{tier.description}</p>

                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 mb-8 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/50'
                      : 'bg-indigo-900/40 text-orange-300 border-2 border-violet-400/30 hover:border-orange-400/50'
                  }`}
                >
                  {tier.price === 'Free' ? 'Start Preview' : 'Unlock Now'}
                </button>

                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500/30 to-orange-500/30 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-orange-300" />
                      </div>
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-900/50 to-violet-900/50 backdrop-blur-sm border-2 border-purple-400/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif bg-gradient-to-r from-orange-300 to-purple-300 bg-clip-text text-transparent mb-4">
              Join the Vault Waitlist
            </h3>
            <p className="text-gray-200">
              Be notified when new collections drop and receive exclusive early access.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-violet-400/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 whitespace-nowrap"
            >
              Join the Vault
            </button>
          </form>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative max-w-xs p-6 bg-gradient-to-br from-indigo-900/40 to-violet-900/40 backdrop-blur-sm border border-purple-400/20 rounded-2xl shadow-lg hover:border-purple-400/50 hover:shadow-purple-500/30 transition-all duration-300"
              style={{
                animation: `float 6s ease-in-out infinite ${index * 0.5}s`,
              }}
            >
              <p className="text-gray-200 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-orange-300 text-sm font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
