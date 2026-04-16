import React from 'react';

const ContactUs = () => {
  const glassStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(100, 150, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.01) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderRadius: '24px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '16px 20px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
    e.target.style.borderColor = 'rgba(100, 150, 255, 0.4)';
    e.target.style.boxShadow = '0 0 0 4px rgba(100, 150, 255, 0.1)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.background = 'rgba(255, 255, 255, 0.02)';
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section className="snap-start min-h-screen py-24 px-6 relative z-20 w-full flex flex-col justify-center items-center" id="contact">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
            <h2 className="text-4xl font-extrabold text-white">Let's Talk</h2>
            <div style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)', width: '64px', height: '4px', backgroundColor: '#ffffff', borderRadius: '9999px' }}></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ marginTop: '16px' }}>
            Ready to bring your idea to life? Drop us a message, and we'll get back to you shortly.
          </p>
        </div>

        <div style={{ ...glassStyle, padding: '48px', overflow: 'hidden' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 500, color: '#D1D5DB', marginLeft: '4px' }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 500, color: '#D1D5DB', marginLeft: '4px' }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="subject" style={{ fontSize: '14px', fontWeight: 500, color: '#D1D5DB', marginLeft: '4px' }}>Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="How can we help?" 
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 500, color: '#D1D5DB', marginLeft: '4px' }}>Message</label>
              <textarea 
                id="message" 
                rows={5} 
                placeholder="Tell us about your project..." 
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className=""
              style={{
                marginTop: '16px',
                background: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '12px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.2s, opacity 0.2s',
                width: '100%',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(0.98)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
