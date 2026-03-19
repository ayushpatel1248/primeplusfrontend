import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X, Hexagon, Sparkles, Send, Loader2 } from 'lucide-react';
import './Navbar.css';

const MOCK_ORACLE_RESPONSES = [
  "Analyzing global distribution vectors... I've identified a 15% increase in demand for sovereign land parcels in South India.",
  "The Nexus currently tracks 50,000+ acres of unencumbered earth. Would you like me to filter by coastal proximity or agricultural yield?",
  "Your alliance request has been logged. An elite curator will establish contact shortly.",
  "According to real-time metrics, coastal estates are appreciating. Shall I pull up the latest listings in Gokarna?",
  "Fascinating inquiry. The Primeplains architecture is designed precisely for that scale of transaction."
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  // Chatbot State
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'oracle', text: 'Greetings. I am the Oracle, your real-time intelligence node. How may I assist your acquisitions or distribution today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, isTyping, aiOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const newHistory = [...chatHistory, { role: 'user', text: chatInput }];
    setChatHistory(newHistory);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      const randomResponse = MOCK_ORACLE_RESPONSES[Math.floor(Math.random() * MOCK_ORACLE_RESPONSES.length)];
      setChatHistory([...newHistory, { role: 'oracle', text: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container container">
        <div
          className="nav-logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
        >
          <div className="text-gradient-gold" style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              lineHeight: '0.8',
              fontFamily: 'var(--font-heading), sans-serif',
              paddingRight: '4px'
          }}>
            P
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingTop: '6px' }}>
            <span style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#ffffff'
            }}>rime</span>
            <span style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#ffffff'
            }}>lus</span>
          </div>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/buy-lands" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Buy Lands</NavLink>
          <NavLink to="/sell-lands" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Sell Lands</NavLink>
          <NavLink to="/advisory" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Advisory</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </div>

        <div className="nav-actions" style={{ position: 'relative' }}>

          {/* AI Assistant Toggle */}
          <button
            className={`icon-btn ai-btn ${aiOpen ? 'active-icon' : ''}`}
            onClick={() => { setAiOpen(!aiOpen); setLoginOpen(false); }}
            style={{
              color: aiOpen ? 'var(--accent-gold)' : 'inherit',
              animation: aiOpen ? 'none' : 'pulse-glow 2s infinite'
            }}
          >
            <Sparkles size={20} />
          </button>

          <button className="icon-btn search-btn">
            <Search size={20} />
          </button>

          <button
            className={`icon-btn user-btn ${loginOpen ? 'active-icon' : ''}`}
            onClick={() => { setLoginOpen(!loginOpen); setAiOpen(false); }}
            style={{ color: loginOpen ? 'var(--accent-emerald)' : 'inherit' }}
          >
            <User size={20} />
          </button>

          {/* Real-Time AI Assistant Dropdown */}
          {aiOpen && (
            <div className="glass-panel" style={{
              position: 'absolute',
              top: '120%',
              right: '0',
              width: '320px',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid var(--accent-gold)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 30px rgba(206, 177, 109, 0.2)',
              animation: 'fadeUp 0.3s ease-out forwards',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.8rem' }}>
                <Sparkles size={18} color="var(--accent-gold)" />
                <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Primeplains Oracle</h4>
              </div>

              <div style={{ height: '250px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingRight: '0.5rem' }} className="hide-scrollbar">
                {chatHistory.map((msg, index) => (
                  <div key={index} style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    background: msg.role === 'user' ? 'rgba(13, 240, 122, 0.15)' : 'rgba(206, 177, 109, 0.1)',
                    border: `1px solid ${msg.role === 'user' ? 'var(--border-emerald)' : 'rgba(206, 177, 109, 0.2)'}`,
                    padding: '0.8rem',
                    borderRadius: '12px',
                    borderBottomRightRadius: msg.role === 'user' ? '2px' : '12px',
                    borderBottomLeftRadius: msg.role === 'oracle' ? '2px' : '12px',
                    fontSize: '0.9rem',
                    color: msg.role === 'user' ? 'white' : 'var(--text-secondary)',
                    maxWidth: '90%'
                  }}>
                    {msg.text}
                  </div>
                ))}
                {isTyping && (
                  <div style={{
                    alignSelf: 'flex-start',
                    background: 'rgba(206, 177, 109, 0.1)',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    borderBottomLeftRadius: '2px',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Loader2 size={14} className="spin" /> Oracle is processing...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Inquire about the Nexus..." style={{
                    flex: 1, padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.5)', color: 'white', outline: 'none', fontSize: '0.9rem'
                  }} />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping || !chatInput.trim()}
                  className="btn-primary-emerald" style={{
                    padding: '0.8rem', border: 'none', borderRadius: '8px', cursor: isTyping || !chatInput.trim() ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, var(--accent-gold) 0%, #a68435 100%)',
                    opacity: isTyping || !chatInput.trim() ? 0.5 : 1
                  }}>
                  <Send size={16} color="var(--bg-dark)" />
                </button>
              </div>
            </div>
          )}

          {/* Interactive Login Dropdown */}
          {loginOpen && (
            <div className="glass-panel" style={{
              position: 'absolute',
              top: '120%',
              right: '0',
              width: '280px',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid var(--border-emerald)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(13, 240, 122, 0.1)',
              animation: 'fadeUp 0.3s ease-out forwards',
              zIndex: 1000
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>Client Portal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="email" placeholder="Email Address" style={{
                  padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.5)', color: 'white', outline: 'none'
                }} />
                <input type="password" placeholder="Password" style={{
                  padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.5)', color: 'white', outline: 'none'
                }} />
                <button className="btn-primary-emerald" style={{ padding: '0.8rem', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Secure Login
                </button>
              </div>
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Request Private Access
              </p>
            </div>
          )}

          <button
            className="mobile-toggle icon-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
