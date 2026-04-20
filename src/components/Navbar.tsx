import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {isOpen ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </>
    ) : (
      <>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </>
    )}
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const currentScrollY = target.scrollTop;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    // The container that scrolls is the main div in Home.tsx
    // Since Navbar is inside that div, we can find the closest scrollable container
    // or just attach the event to the document but with capturing phase if bubbling.
    // In this app structure, adding an event listener to the scrolling div is best.
    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY]);

  const handleNavClick = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, bounce: 0.4 }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'center' }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
          maxWidth: '680px',
          margin: '24px 24px 0',
          padding: '8px 20px',
          borderRadius: isMobileMenuOpen ? '24px' : '999px',
          background: 'linear-gradient(90deg, rgba(100, 150, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 40%, rgba(255, 255, 255, 0.01) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <a href="#home" onClick={handleNavClick('home')} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <img src="/logo-img-removebg-preview.png" alt="RanVith Logo" width="29" height="29" />
            <span style={{ fontSize: 16, fontWeight: 500, color: '#fff', letterSpacing: '-0.01em' }}>RanVith Solutions</span>
          </a>

          {/* Actually, let's just use Tailwind classes since this project has Tailwind */}
          <div className="hidden sm:flex items-center gap-6">
            <a href="#our-services" onClick={handleNavClick('our-services')} className="text-sm font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent">Services</a>
            <a href="#testimonials" onClick={handleNavClick('testimonials')} className="text-sm font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent">Testimonials</a>
            <a href="#contact" onClick={handleNavClick('contact')} className="text-sm font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="sm:hidden flex items-center justify-center p-2 text-white bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="sm:hidden flex flex-col items-center overflow-hidden"
              style={{ width: '100%' }}
            >
              <div className="flex flex-col items-center w-full py-4 gap-4 mt-2" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <a href="#our-services" onClick={handleNavClick('our-services')} className="text-lg font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent w-full text-center py-2">Services</a>
                <a href="#testimonials" onClick={handleNavClick('testimonials')} className="text-lg font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent w-full text-center py-2">Testimonials</a>
                <a href="#contact" onClick={handleNavClick('contact')} className="text-lg font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent w-full text-center py-2">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
      )}
    </AnimatePresence>
  );
}

