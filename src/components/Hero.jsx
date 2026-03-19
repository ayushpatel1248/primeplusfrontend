import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="hero-content container">
                <h1 className="hero-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.4' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '2px', marginBottom: '-10px' }}>DISCOVER VERIFIED</span>

                    <div style={{ height: '70px', overflow: 'hidden', position: 'relative', marginTop: '10px' }}>
                        <div className="rotating-text-container">
                            <span className="text-gradient-gold rotating-word">LANDS</span>
                            <span className="text-gradient-gold rotating-word">PREMIUM PLOTS</span>
                            <span className="text-gradient-gold rotating-word">ESTATES</span>
                            <span className="text-gradient-gold rotating-word">LANDS</span> {/* Duplicate first for seamless loop */}
                        </div>
                    </div>

                    <span style={{ fontSize: '2rem', marginTop: '-5px' }}>ACROSS INDIA</span>
                </h1>
                <p className="hero-subtitle">
                    Navigating the legal landscape of premium land aggregation. We offer 15,000+ verified acreage, master planning, and elite advisory for visionary developers and investors.
                </p>

                <div className="search-bar glass-panel">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search Luxury Properties or Land by location..."
                        className="search-input"
                    />
                    <button className="search-submit">Search</button>
                </div>

                <div className="filter-tags">
                    <button className="filter-tag active" onClick={() => navigate('/buy-lands')}>Buy Lands</button>
                    <button className="filter-tag" onClick={() => navigate('/sell-lands')}>Sell Lands</button>
                    <button className="filter-tag" onClick={() => navigate('/advisory')}>Advisory</button>
                    <button className="filter-tag" onClick={() => navigate('/nexus')}>The Nexus</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
