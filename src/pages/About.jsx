import React, { useEffect, useState } from 'react';
import { Map, ShieldCheck, FileText, Handshake, TrendingUp, ArrowRight, Activity, Globe, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Advisory = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(0);

    // Dynamic scroll progress for subtle effects
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = window.scrollY;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrolled(winScroll / height);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="advisory-layout">
            {/* Scoped Styles for a completely unique layout decoupled from other pages */}
            <style dangerouslySetInnerHTML={{__html: `
                .advisory-layout {
                    background-color: #050505;
                    color: #fff;
                    min-height: 100vh;
                    font-family: var(--font-body), sans-serif;
                    overflow-x: hidden;
                    position: relative;
                }
                
                /* Abstract Background Orbs */
                .adv-glow-1 {
                    position: absolute;
                    top: -10%; right: -5%;
                    width: 50vw; height: 50vw;
                    background: radial-gradient(circle, rgba(13, 240, 122, 0.06) 0%, transparent 60%);
                    filter: blur(100px);
                    z-index: 0;
                    pointer-events: none;
                }
                .adv-glow-2 {
                    position: absolute;
                    bottom: 10%; left: -10%;
                    width: 60vw; height: 60vw;
                    background: radial-gradient(circle, rgba(206, 177, 109, 0.05) 0%, transparent 60%);
                    filter: blur(100px);
                    z-index: 0;
                    pointer-events: none;
                }

                /* Hero Typography */
                .adv-hero {
                    position: relative;
                    z-index: 10;
                    padding: 12rem 2rem 6rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .adv-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    background: rgba(13, 240, 122, 0.08);
                    color: var(--accent-emerald);
                    padding: 0.5rem 1rem;
                    border-radius: 100px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                    border: 1px solid rgba(13, 240, 122, 0.2);
                }
                .adv-title {
                    font-size: clamp(3.5rem, 8vw, 7rem);
                    font-family: var(--font-heading), sans-serif;
                    font-weight: 600;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    margin-bottom: 2rem;
                    color: #fff;
                }
                .adv-desc {
                    font-size: clamp(1.1rem, 2vw, 1.4rem);
                    color: #888;
                    max-width: 650px;
                    line-height: 1.6;
                }

                /* Bento Box Intelligence Grid */
                .bento-grid {
                    position: relative;
                    z-index: 10;
                    max-width: 1400px;
                    margin: 2rem auto 8rem;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.5rem;
                }
                .bento-card {
                    background: #0d0d0d;
                    border: 1px solid #1f1f1f;
                    border-radius: 24px;
                    padding: 3rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s ease;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    min-height: 300px;
                }
                .bento-card:hover {
                    border-color: #333;
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .bento-icon-bg {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    opacity: 0.05;
                    transition: opacity 0.4s ease;
                }
                .bento-card:hover .bento-icon-bg {
                    opacity: 0.15;
                }
                .span-8 { grid-column: span 8; }
                .span-4 { grid-column: span 4; }
                
                @media (max-width: 1024px) {
                    .span-8, .span-4 { grid-column: span 12; }
                }

                .bento-metric {
                    font-size: 3.5rem;
                    font-family: var(--font-heading), sans-serif;
                    font-weight: 300;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                }
                .bento-text {
                    color: #888;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    max-width: 90%;
                }

                /* Sticky Services Timeline */
                .adv-sticky-wrapper {
                    position: relative;
                    z-index: 10;
                    border-top: 1px solid #1f1f1f;
                    background: #080808;
                }
                .adv-sticky-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 8rem 2rem;
                    display: flex;
                    gap: 8rem;
                }
                .adv-sticky-left {
                    width: 35%;
                    position: sticky;
                    top: 200px;
                    height: fit-content;
                }
                .adv-sticky-right {
                    width: 65%;
                    display: flex;
                    flex-direction: column;
                }
                @media (max-width: 900px) {
                    .adv-sticky-container {
                        flex-direction: column;
                        gap: 4rem;
                        padding: 4rem 2rem;
                    }
                    .adv-sticky-left {
                        width: 100%;
                        position: relative;
                        top: 0;
                    }
                    .adv-sticky-right {
                        width: 100%;
                    }
                }

                .service-row {
                    border-bottom: 1px solid #1f1f1f;
                    padding: 4rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .service-row:first-child {
                    padding-top: 0;
                }
                .service-row:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .s-num {
                    font-family: var(--font-heading), sans-serif;
                    font-size: 5rem;
                    font-weight: 200;
                    color: #1a1a1a;
                    line-height: 0.8;
                    transition: color 0.4s ease;
                }
                .service-row:hover .s-num {
                    color: var(--accent-gold);
                }
                .s-title {
                    font-family: var(--font-heading), sans-serif;
                    font-size: 2.2rem;
                    font-weight: 500;
                    color: #fff;
                }
                .s-desc {
                    font-size: 1.15rem;
                    color: #888;
                    line-height: 1.7;
                    max-width: 600px;
                }

                /* Massive CTA */
                .adv-cta {
                    padding: 10rem 2rem;
                    text-align: center;
                    position: relative;
                    z-index: 10;
                }
                .adv-cta-title {
                    font-size: clamp(3rem, 6vw, 5rem);
                    font-family: var(--font-heading), sans-serif;
                    margin-bottom: 3rem;
                    letter-spacing: -0.02em;
                }
                .btn-massive {
                    background: #fff;
                    color: #000;
                    padding: 1.2rem 3rem;
                    font-size: 1.2rem;
                    font-weight: 600;
                    border-radius: 100px;
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.3s ease;
                }
                .btn-massive:hover {
                    background: var(--accent-emerald);
                    color: #000;
                    transform: scale(1.05);
                }
            `}} />

            <div className="adv-glow-1"></div>
            <div className="adv-glow-2"></div>

            {/* Unique Minimalist Hero */}
            <header className="adv-hero">
                <div className="adv-tag">
                    <ShieldCheck size={16} /> Elite Intelligence & Advisory
                </div>
                <h1 className="adv-title">
                    Master the <br />
                    <span style={{ color: 'var(--text-secondary)' }}>Land Asset Class.</span>
                </h1>
                <p className="adv-desc">
                    Your institutional partner for compliant, value-driven land aggregations. We engineer risk out of the equation through rigorous due diligence and market intelligence.
                </p>
            </header>

            {/* Bento Grid: The 1Acre & Elem14 Intelligence merged */}
            <section className="bento-grid">
                {/* Large Map/Inventory Block */}
                <div className="bento-card span-8">
                    <Globe size={180} className="bento-icon-bg" style={{ right: '-2rem', top: '-1rem' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px' }}>INDUSTRY LEADING INVENTORY</div>
                        <h2 className="bento-metric">15,000+ Verified<br/>Acres Across India</h2>
                        <p className="bento-text">
                            Access a transparent, map-view driven ecosystem. Every parcel undergoes rigorous title scrubbing and physical verification before it reaches your desk.
                        </p>
                    </div>
                </div>

                {/* Risk Block */}
                <div className="bento-card span-4" style={{ background: 'linear-gradient(145deg, #0d0d0d 0%, #111 100%)' }}>
                    <ShieldCheck size={120} className="bento-icon-bg" />
                    <h2 className="bento-metric">90%</h2>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.5rem' }}>RISK ELIMINATED</div>
                    <p className="bento-text">
                        Through strict legal, environmental, and socio-political vetting protocols.
                    </p>
                </div>

                {/* Legal Block */}
                <div className="bento-card span-4">
                    <Scale size={120} className="bento-icon-bg" />
                    <h2 className="bento-metric" style={{ fontSize: '2.5rem' }}>Absolute <br/>Compliance</h2>
                    <p className="bento-text">
                        We navigate complex state and local legislation to shield your investments from unforeseen litigation.
                    </p>
                </div>

                {/* Direct Negotiation Block */}
                <div className="bento-card span-8">
                    <Handshake size={180} className="bento-icon-bg" style={{ right: '-2rem' }} />
                    <div style={{ color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px' }}>THE ART OF DEALMAKING</div>
                    <h2 className="bento-metric" style={{ fontSize: '2.5rem' }}>Discreet, Direct <br/>Negotiations</h2>
                    <p className="bento-text">
                        We engage landowners directly—treating them as stakeholders. By addressing concerns with empathy, we build the trust required to secure premium off-market parcels.
                    </p>
                </div>
            </section>

            {/* Sticky Timeline: Core Services from Elem14 */}
            <section className="adv-sticky-wrapper">
                <div className="adv-sticky-container">
                    <div className="adv-sticky-left">
                        <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading), sans-serif', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Architecting <br/>
                            <span style={{ color: 'var(--accent-gold)' }}>Acquisition</span>
                        </h2>
                        <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: 1.6 }}>
                            From ground zero to final registration, our multi-disciplinary core services ensure your vision is built on an unshakeable foundation.
                        </p>
                    </div>
                    
                    <div className="adv-sticky-right">
                        <div className="service-row">
                            <div className="s-num">01</div>
                            <h3 className="s-title">Land Identification & Suitability</h3>
                            <p className="s-desc">
                                We scout, assess, and qualify land parcels meticulously based on zoning regulations, ownership clarity, existing infrastructure potential, and overarching development feasibility.
                            </p>
                        </div>

                        <div className="service-row">
                            <div className="s-num">02</div>
                            <h3 className="s-title">Planning & Documentation</h3>
                            <p className="s-desc">
                                From precise boundary demarcation to comprehensive historical title checks, we seamlessly manage all regulatory compliance, permits, and legal documentation.
                            </p>
                        </div>

                        <div className="service-row">
                            <div className="s-num">03</div>
                            <h3 className="s-title">Transaction Management</h3>
                            <p className="s-desc">
                                We structure fair, respectful deals and provide complete end-to-end transaction support, bridging the gap between landowner expectations and institutional requirements.
                            </p>
                        </div>

                        <div className="service-row">
                            <div className="s-num">04</div>
                            <h3 className="s-title">Business Development</h3>
                            <p className="s-desc">
                                Creating immense value from the ground up by aligning unique land opportunities with your long-term residential, commercial, or industrial blueprints.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="adv-cta">
                <h2 className="adv-cta-title">Ready to scale your portfolio?</h2>
                <button className="btn-massive" onClick={() => navigate('/contact')}>
                    Consult Our Experts <ArrowRight size={24} />
                </button>
            </section>

        </div>
    );
};

export default Advisory;
