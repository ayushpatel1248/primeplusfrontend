import React, { useState } from 'react';
import { Shield, Handshake, Map, Send } from 'lucide-react';

const Sell = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div style={{
            position: 'relative',
            minHeight: 'calc(100vh - 80px)',
            paddingTop: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Map Element */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80) center/cover',
                opacity: 0.2,
                zIndex: 0,
                filter: 'contrast(1.2) brightness(0.8)',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 3s ease-out'
            }}></div>

            {/* Radial Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, var(--bg-dark) 100%)',
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center' }}>

                {/* Sell Info Side */}
                <div style={{ flex: '1', minWidth: '280px', maxWidth: '500px', animation: 'fadeUp 0.8s ease-out forwards' }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(206, 177, 109, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: '20px', color: 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '1px' }}>
                        LANDOWNER PARTNERSHIP
                    </div>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        Unlock the True Value of Your <span className="text-gradient">Land</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
                        We engage landowners as stakeholders. Our aggregation experts handle zoning, conversion, and legal documentation to connect your parcel with top-tier developers and institutions, ensuring fair negotiations and smooth transitions.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(13, 240, 122, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)', border: '1px solid var(--border-emerald)' }}>
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Rigorous Protection</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Discreet and transparent valuations.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(206, 177, 109, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', border: '1px solid rgba(206, 177, 109, 0.3)' }}>
                                <Handshake size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Direct Negotiation</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Empathetic, stakeholder-first approach.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', border: '1px solid var(--border-light)' }}>
                                <Map size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Global Reach</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Expose your asset to elite institutional buyers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side - Floating Glass Card */}
                <div
                    className="glass-panel"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '500px',
                        padding: '3rem',
                        borderRadius: '24px',
                        border: '1px solid rgba(206, 177, 109, 0.3)',
                        boxShadow: isHovered ? '0 20px 50px rgba(206, 177, 109, 0.15)' : '0 10px 30px rgba(0,0,0,0.5)',
                        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        animation: 'fadeUp 0.8s ease-out 0.2s forwards',
                        opacity: 0,
                        backdropFilter: 'blur(20px)'
                    }}
                >
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '3rem 0', animation: 'scaleIn 0.5s ease-out' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(206, 177, 109, 0.2)', color: 'var(--accent-gold)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Send size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Proposal Received</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Our aggregation advisory team will run an initial assessment and contact you.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>Add Your Asset</h3>
                            <div>
                                <input type="text" placeholder="Landowner / Entity Name" required style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input type="text" placeholder="Location (City/State)" required style={{ flex: 1, padding: '1.2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                                />
                                <input type="text" placeholder="Total Acreage" required style={{ width: '140px', padding: '1.2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                                />
                            </div>
                            <div>
                                <textarea rows="3" placeholder="Brief description of current zoning, ownership clarity, and infrastructure..." required style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'vertical', transition: 'all 0.3s ease', fontSize: '1rem', fontFamily: 'inherit' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                                ></textarea>
                            </div>
                            <button type="submit" style={{
                                marginTop: '1rem',
                                padding: '1.2rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #fcedba 0%, var(--accent-gold) 100%)',
                                color: 'var(--bg-dark)',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 5px 20px rgba(206, 177, 109, 0.3)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(206, 177, 109, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(206, 177, 109, 0.3)';
                                }}
                            >
                                Initiate Valuation
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sell;
