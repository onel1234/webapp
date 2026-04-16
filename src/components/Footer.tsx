import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const BrandIconSVG = ({ name, size = 18 }: { name: string, size?: number }) => {
  switch (name) {
    case 'Facebook':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
    case 'Twitter':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
    case 'Instagram':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
    case 'Linkedin':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
    case 'Github':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 20,
      background: '#0a0a0f',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '80px 24px 40px',
      color: '#A1A1AA',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(114, 221, 247, 0.5) 50%, transparent 100%)',
        boxShadow: '0 0 20px rgba(114, 221, 247, 0.5)'
      }}></div>

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        columnGap: '64px',
        rowGap: '48px'
      }}>
        
        {/* Brand Section */}
        <div>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 24 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
              <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(30 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(90 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(150 12 12)" />
            </svg>
            <span style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>React Bits</span>
          </a>
          <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 32, maxWidth: 300 }}>
            We build digital futures. Transform your ideas into powerful web and mobile applications with our expert team.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Github'].map((iconName, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -2, color: '#fff' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  color: '#A1A1AA',
                  transition: 'background 0.2s',
                }}
              >
                <BrandIconSVG name={iconName} size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', flex: 1 }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['About Us', 'Careers', 'Our Works', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: '#A1A1AA', textDecoration: 'none', transition: 'color 0.2s' }}
                     onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                     onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Web Development', 'Mobile Apps', 'AI & Automation', 'UI/UX Design', 'Cloud & DevOps'].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: '#A1A1AA', textDecoration: 'none', transition: 'color 0.2s' }}
                     onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                     onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: '#fff', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <MapPin size={20} color="#72DDF7" style={{ marginTop: 2 }} />
              <span>123 Innovation Drive,<br/>Tech City, TC 10010</span>
            </li>
            <li style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Phone size={20} color="#72DDF7" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Mail size={20} color="#72DDF7" />
              <span>hello@reactbits.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        maxWidth: 1200,
        margin: '64px auto 0',
        paddingTop: 32,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <p style={{ fontSize: 14 }}>© {new Date().getFullYear()} React Bits. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 24, fontSize: 14 }}>
          <a href="#" style={{ color: '#A1A1AA', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}>Privacy Policy</a>
          <a href="#" style={{ color: '#A1A1AA', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}