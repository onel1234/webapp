import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Bot, Palette, Cloud, Layers, CheckCircle2, X } from 'lucide-react';
import Orb from '../components/Orb';
import Navbar from '../components/Navbar';
import TargetCursor from '../components/TargetCursor';
import SplashCursor from '../components/SplashCursor';
//import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  const [showCursor, setShowCursor] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      desc: "We build high-performance, scalable web applications tailored to your business needs.",
      bgColor: "rgba(108, 99, 255, 0.1)",
      color: "#9D94FF",
      keywords: ["custom web development", "web development company", "scalable web apps"],
      points: [
        "Full-stack development (React, Next.js, Node.js)",
        "E-commerce website development",
        "Progressive Web Apps (PWA)",
        "API development & integration"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Transform your ideas into powerful mobile apps with our end-to-end mobile app development services.",
      bgColor: "rgba(255, 107, 107, 0.1)",
      color: "#FF8E8E",
      keywords: ["mobile app development company", "iOS app development", "Android app development"],
      points: [
        "Android & iOS app development",
        "Cross-platform apps (Flutter, React Native)",
        "UI/UX optimized mobile experiences",
        "App maintenance & upgrades"
      ]
    },
    {
      icon: Bot,
      title: "AI & Automation Solutions",
      desc: "Leverage the power of AI to streamline operations and boost efficiency for modern businesses.",
      bgColor: "rgba(76, 201, 240, 0.1)",
      color: "#72DDF7",
      keywords: ["AI development services", "chatbot development", "business automation solutions"],
      points: [
        "AI chatbot development",
        "Business process automation",
        "Machine learning model integration",
        "Data-driven decision systems"
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design Services",
      desc: "We design user-centric interfaces that enhance engagement and conversion with aesthetics and usability.",
      bgColor: "rgba(240, 147, 43, 0.1)",
      color: "#F6AE54",
      keywords: ["UI UX design services", "user experience design", "web design company"],
      points: [
        "Website & app UI design",
        "UX research & wireframing",
        "Interactive prototypes",
        "Design system creation"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      desc: "Scale your applications with secure and reliable cloud and DevOps solutions. Deploy faster.",
      bgColor: "rgba(128, 90, 213, 0.1)",
      color: "#A27BEE",
      keywords: ["cloud computing services", "DevOps services", "cloud migration"],
      points: [
        "AWS / Azure / Google Cloud deployment",
        "CI/CD pipeline setup",
        "Serverless architecture",
        "Cloud migration services"
      ]
    },
    {
      icon: Layers,
      title: "SaaS Development",
      desc: "We build end-to-end SaaS platforms for startups and enterprises. From MVP to full-scale product.",
      bgColor: "rgba(26, 188, 156, 0.1)",
      color: "#46D2B3",
      keywords: ["SaaS development company", "SaaS application development", "startup MVP development"],
      points: [
        "SaaS product development",
        "Multi-tenant architecture",
        "Subscription & billing systems",
        "Scalable backend infrastructure"
      ]
    }
  ];

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar" style={{ background: 'var(--bg)', color: 'var(--primary)', position: 'relative' }}>
      {!showCursor && <SplashCursor />}
      <Navbar />
      
      {/* Hero Section with Orb Background */}
      <section id="home" className="snap-start" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        
        {/* Orb Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={270}
            forceHoverState={false}
            backgroundColor="#07070d" // matching the dark theme
          />
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              textShadow: '0 4px 24px rgba(0,0,0,0.5)',
              pointerEvents: 'auto'
            }}
          >
            Engineering the Next <br />Digital Frontier
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              textAlign: 'center',
              pointerEvents: 'auto'
            }}
          >
            RanVith delivers cutting-edge software, AI solutions, and scalable systems for modern businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', pointerEvents: 'auto' }}
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#fff',
                color: '#000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '14px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(0.98)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Contact Us
            </button>

            <button
              onClick={() => document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px 32px',
                borderRadius: '14px',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
            >
              Learn more
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="our-services"
        className="snap-start"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        style={{ padding: '120px 24px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: selectedService ? 110 : 10, background: 'linear-gradient(to bottom, transparent, rgba(10,10,15,0.8) 20%)' }}
      >
        {showCursor && <TargetCursor spinDuration={2} parallaxOn={true} hoverDuration={0.2} />}
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-block',
                color: '#A29BFE',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 16
              }}
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 24
              }}
            >
              Services We Provide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: 600,
                margin: '0 auto'
              }}
            >
              We build high-performance software for ambitious startups and enterprises. Tailored to your goals, optimized for scale.
            </motion.p>
          </div>

          {/* Custom Service Layout Matching Image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', marginTop: 40 }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
              {services.slice(0, 3).map((srv, idx) => (
                <ServiceButton key={idx} srv={srv} onClick={() => setSelectedService(srv)} />
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '800px' }}>
              {services.slice(3, 5).map((srv, idx) => (
                <ServiceButton key={idx + 3} srv={srv} onClick={() => setSelectedService(srv)} fullWidth={true} />
              ))}
            </div>
          </div>

        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <div 
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-sm"
              style={{ background: 'rgba(0, 0, 0, 0.7)' }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={e => e.stopPropagation()}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  background: '#0F0F1A',
                  border: `1px solid ${selectedService.color}40`,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: `0 24px 64px -12px ${selectedService.color}20`
                }}
              >
                {/* Colored top gradient */}
                <div style={{ 
                  height: 120, 
                  background: `linear-gradient(to bottom, ${selectedService.bgColor}, transparent)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 32px'
                }}>
                  <button 
                    onClick={() => setSelectedService(null)}
                    style={{
                      position: 'absolute', top: 24, right: 24,
                      background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                      width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: '#fff'
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div style={{ padding: '0 32px 40px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: 20, background: '#1C1C28', border: `1px solid ${selectedService.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 12px 24px rgba(0,0,0,0.4)'
                  }}>
                    <selectedService.icon size={40} color={selectedService.color} />
                  </div>
                  
                  <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 16 }}>
                    {selectedService.title}
                  </h2>
                  
                  <p style={{ fontSize: 16, color: '#A1A1AA', lineHeight: 1.6, marginBottom: 32 }}>
                    {selectedService.desc}
                  </p>

                  <h4 style={{ fontSize: 18, color: '#fff', fontWeight: 600, marginBottom: 16 }}>What's Included</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {selectedService.points.map((pt: string, i: number) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#E5E7EB' }}>
                        <CheckCircle2 color={selectedService.color} size={20} />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className="cursor-target"
                    style={{
                      background: selectedService.color,
                      color: '#000', border: 'none', borderRadius: '12px', padding: '16px 32px',
                      fontSize: 16, fontWeight: 600, cursor: 'pointer', width: '100%',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.98)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Why Choose Us Section 
     <WhyChooseUs />
     */}

      {/* Contact Section */}
      <ContactUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <div className="snap-start">
        <Footer />
      </div>

    </div>
  );
}

function ServiceButton({ srv, onClick, fullWidth = false }: { srv: any, onClick: () => void, fullWidth?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className="cursor-target"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: fullWidth ? 1 : '0 1 auto',
        minWidth: fullWidth ? '300px' : 'auto',
        background: hovered ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
        border: '1px dashed rgba(255, 255, 255, 0.15)',
        borderRadius: 24,
        padding: '24px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <h3 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 900, 
        color: hovered ? srv.color : '#C8B8FF', 
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        transition: 'color 0.3s ease'
      }}>
        {srv.title.split(' ')[0]} {/* Grab the first word for impact like "WEB", "MOBILE", etc. */}
      </h3>
    </motion.button>
  );
}

