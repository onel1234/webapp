import { motion } from 'framer-motion';
import ElectricBorder from './ElectricBorder';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: "Who We Are",
    eyebrow: "Global Delivery. Local Accountability.",
    icon: <Target className="w-10 h-10 text-cyan-400 mb-6" />,
    content: "A Sri Lanka based software studio trusted by teams that need speed, quality, and dependable execution.",
    highlights: [
      "Senior engineers with product mindset",
      "Transparent communication from kickoff to launch",
      "Global delivery standards with regional agility"
    ]
  },
  {
    id: 2,
    title: "Our Edge",
    eyebrow: "Premium Capability. Efficient Model.",
    icon: <Zap className="w-10 h-10 text-purple-400 mb-6" />,
    content: "We combine high caliber engineering with practical engagement models so you can ship faster without cost bloat.",
    highlights: [
      "Architecture first thinking, not just delivery",
      "Lean teams that scale up when required",
      "Quality gates that protect timelines"
    ]
  },
  {
    id: 3,
    title: "Philosophy",
    eyebrow: "Build What Moves the Business.",
    icon: <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6" />,
    content: "Our approach is agile, measurable, and user centered. Every sprint is designed to create business value, not feature clutter.",
    highlights: [
      "User outcomes drive technical decisions",
      "Iterative delivery with measurable checkpoints",
      "Long term maintainability from day one"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 }
  }
};

const WhyChooseUs = () => {
  return (
    <section id="about" className="snap-start min-h-screen py-16 md:py-24 px-6 relative z-20 w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      
      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24 mt-12 md:mt-0"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase tracking-widest drop-shadow-sm">
              Why Choose Us
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full blur-[1px]"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide mt-6">
            Discover what makes us the ideal technology partner for your next big idea.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {cards.map((card) => (
            <motion.div key={card.id} variants={cardVariants} className="w-full h-full group">
              <ElectricBorder
                color={card.id === 1 ? "#22d3ee" : card.id === 2 ? "#c084fc" : "#34d399"}
                speed={2}
                chaos={0.15}
                borderRadius={24}
                className="w-full h-full bg-black/40 backdrop-blur-sm border border-white/5 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)]"
              >
                <div className="flex flex-col items-center text-center p-8 sm:p-10 min-h-[500px] h-full relative z-10">
                  <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-500 ease-out border border-white/10 shadow-inner">
                    {card.icon}
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h3 className="font-bold text-3xl text-white tracking-tight">{card.title}</h3>
                    <p className={`text-[12px] uppercase tracking-[0.15em] font-bold ${card.id === 1 ? 'text-cyan-400' : card.id === 2 ? 'text-purple-400' : 'text-emerald-400'}`}>
                      {card.eyebrow}
                    </p>
                  </div>

                  <p className="text-gray-400 text-[15px] leading-relaxed mx-auto mb-8">
                    {card.content}
                  </p>

                  <ul className="mt-auto space-y-4 w-full text-left bg-white/[0.02] p-6 rounded-2xl border border-white/[0.05]">
                    {card.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] leading-tight text-gray-300">
                        <span className={`shrink-0 mt-1 h-1.5 w-1.5 rounded-full ${card.id === 1 ? 'bg-cyan-400' : card.id === 2 ? 'bg-purple-400' : 'bg-emerald-400'} shadow-[0_0_8px_currentColor]`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
