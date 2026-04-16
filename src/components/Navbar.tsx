import { useState } from 'react';

const BrandIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(150 12 12)" />
  </svg>
);

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

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'center' }}>
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
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <BrandIcon />
            <span style={{ fontSize: 16, fontWeight: 500, color: '#fff', letterSpacing: '-0.01em' }}>React Bits</span>
          </a>

          {/* Desktop Links & CTA */}
          <div className="hidden sm:flex" style={{ display: 'none' /* Will use media query or classes if possible, but fallback to manual inline for now */ }}>
            {/* ... we need to inject CSS for this, or use tailwind classes. */}
          </div>

          {/* Actually, let's just use Tailwind classes since this project has Tailwind */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-5">
              <a href="#" className="text-sm font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent">Features</a>
              <a href="#" className="text-sm font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent">About</a>
            </div>
            <button className="bg-white text-black border-none rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer hover:opacity-90 hover:scale-95 transition-all">
              Sign up
            </button>
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
        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col items-center gap-4 pt-6 pb-4 fade-in">
            <a href="#" className="text-base font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent">Features</a>
            <a href="#" className="text-base font-medium text-[#8A8F98] hover:text-white transition-colors decoration-transparent">About</a>
            <button className="w-full bg-white text-black border-none rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer hover:opacity-90 mt-2">
              Sign up
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

