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
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between text-left py-12 h-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact us</h2>
            <p className="text-gray-400 text-lg max-w-md mt-12">
              Leave your email and we will get back to you within 24 hours
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white font-medium">hello@mantine.dev</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-white font-medium">+49 (800) 335 35 35</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <p className="text-white font-medium">844 Morris Park avenue</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div>
                <p className="text-gray-400 text-sm mb-1">Working hours</p>
                <p className="text-white font-medium">8 a.m. – 11 p.m.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ ...glassStyle, padding: '48px', overflow: 'hidden' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 500, color: '#D1D5DB', marginLeft: '4px' }}>Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                id="email" 
                placeholder="your@email.com" 
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 500, color: '#D1D5DB', marginLeft: '4px' }}>Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 500, color: '#D1D5DB', marginLeft: '4px' }}>Your message <span className="text-red-500">*</span></label>
              <textarea 
                id="message" 
                rows={5} 
                placeholder="I want to order your goods" 
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>

            <div className="flex justify-start sm:justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                style={{
                  marginTop: '8px',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  width: 'fit-content',
                }}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
