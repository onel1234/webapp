import ElectricBorder from './ElectricBorder';

const cards = [
  {
    id: 1,
    tag: "FEATURED",
    title: "Who We Are",
    content: "A premier software development agency based in Sri Lanka, delivering world-class digital solutions globally."
  },
  {
    id: 2,
    tag: "FEATURED",
    title: "Our Edge (USP)",
    content: "Bridging top-tier engineering talent with cost-effective models without compromising quality or speed."
  },
  {
    id: 3,
    tag: "FEATURED",
    title: "Philosophy",
    content: "Agile, transparent, and user-centric. We don't just write code; we build sustainable business growth."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="snap-start min-h-screen py-24 px-6 relative z-20 w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
            <h2 className="text-4xl font-extrabold text-white uppercase tracking-wider">Why Choose Us</h2>
            <div style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)', width: '64px', height: '4px', backgroundColor: '#ffffff', borderRadius: '9999px' }}></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
            Discover what makes us the ideal technology partner for your next big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card) => (
            <div key={card.id} className="w-full relative h-full">
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.12}
                borderRadius={24}
                className="w-full h-full"
              >
                <div className="flex flex-col text-left p-10 sm:p-12 h-full w-full min-h-[440px] relative z-10">
                  <div className="mb-6">
                    <span className="inline-flex items-center justify-center px-3.5 py-1 text-[11px] font-bold text-gray-300 bg-white/[0.08] rounded-full tracking-wider uppercase">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-[28px] text-white mb-4">{card.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed flex-grow">
                    {card.content}
                  </p>
                  
                  <div className="mt-8 flex flex-col">
                    <div className="flex gap-3 mb-6">
                      <span className="inline-flex items-center justify-center px-3.5 py-1 text-[13px] text-gray-300 bg-white/[0.08] rounded-full font-medium">
                        Live
                      </span>
                      <span className="inline-flex items-center justify-center px-3.5 py-1 text-[13px] text-gray-300 bg-white/[0.08] rounded-full font-medium">
                        v1.0
                      </span>
                    </div>
                    <button className="w-full py-3 bg-white text-black font-bold text-[15px] rounded-[14px] hover:bg-gray-200 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
