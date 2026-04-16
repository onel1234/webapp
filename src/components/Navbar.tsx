const BrandIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(150 12 12)" />
  </svg>
);

export default function Navbar() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'center' }}>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '680px',
          margin: '24px 24px 0',
          padding: '8px 8px 8px 20px',
          borderRadius: '999px',
          background: 'linear-gradient(90deg, rgba(100, 150, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 40%, rgba(255, 255, 255, 0.01) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <BrandIcon />
          <span style={{ fontSize: 16, fontWeight: 500, color: '#fff', letterSpacing: '-0.01em' }}>React Bits</span>
        </a>

        {/* Links & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: '#8A8F98', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8F98'}>Features</a>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: '#8A8F98', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFF'} onMouseLeave={e => e.currentTarget.style.color = '#8A8F98'}>About</a>
          </div>
          <button
            style={{
              background: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '999px',
              padding: '10px 20px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(0.98)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}

