import React, { useEffect, useState } from 'react';
import { Shield, FileText, Search, ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuyLands = () => {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg-dark)',
            color: 'white',
            overflowX: 'hidden'
        }}>
            {/* Immersive Parallax Header */}
            <div style={{
                height: '80vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'url(https://images.unsplash.com/photo-1623594831633-875c742c366a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80) center/cover',
                    transform: `translateY(${scrollY * 0.4}px)`,
                    opacity: 0.3,
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark) 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem' }}>
                    <div style={{
                        animation: 'fadeUp 1s ease-out forwards',
                        display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}>
                        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(13, 240, 122, 0.1)', border: '1px solid var(--accent-emerald)', borderRadius: '20px', color: 'var(--accent-emerald)', fontSize: '0.9rem', marginBottom: '1.5rem', letterSpacing: '2px', fontWeight: 600 }}>
                            15,000+ VERIFIED ACRES
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            lineHeight: 1.1,
                            letterSpacing: '-1px',
                            marginBottom: '1rem',
                            textShadow: '0 10px 30px rgba(0,0,0,0.8)'
                        }}>
                            Acquire with <span className="text-gradient">Absolute Certainty</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            lineHeight: 1.6,
                            marginTop: '1rem'
                        }}>
                            Eliminate 90% of acquisition risks. Navigate the legal landscape with our elite advisory and discover India's largest verified land inventory.
                        </p>
                    </div>
                </div>
            </div>

            {/* Verification Process Section */}
            <div className="container" style={{ position: 'relative', zIndex: 10, padding: '6rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The <span className="text-gradient-gold">Verification</span> Matrix</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>From boundary demarcation to strict zoning laws, we mandate rigorous due diligence on every parcel.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Feature 1 */}
                    <div className="glass-panel hover-scale" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--accent-emerald)' }}>
                        <Shield size={40} color="var(--accent-emerald)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>100% Clear Title</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Our legal aggregation experts trace ownership histories down to root deeds, ensuring zero litigation footprints and immediate transfer readiness.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="glass-panel hover-scale" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--accent-gold)' }}>
                        <FileText size={40} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Zoning & Conversions</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Navigating agricultural to commercial conversions seamlessly. We secure all requisite state and local regulatory clearances before listing.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="glass-panel hover-scale" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--text-primary)' }}>
                        <Search size={40} color="var(--text-primary)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Feasibility Scouting</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Beyond legalities, we assess infrastructure potential—water tables, highway access, and topography—for visionary plot developments.
                        </p>
                    </div>
                </div>
            </div>

            {/* Map & Inventory CTA Section */}
            <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                <div className="container" style={{ padding: '6rem 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Explore India's Largest <br /><span className="text-gradient">Verified Map View</span></h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                            Whether you're an institution seeking vast agricultural aggregation or a developer hunting for premium town-planning parcels, our spatial inventory provides unparalleled clarity.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-muted)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}><MapPin size={18} color="var(--accent-emerald)" /> Bangalore Peripheral Ring Road Acres</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}><MapPin size={18} color="var(--accent-emerald)" /> Wayanad Agricultural Estates</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><MapPin size={18} color="var(--accent-emerald)" /> Coastal Gokarna Cliffside Plots</li>
                        </ul>
                        <button
                            onClick={() => navigate('/properties')}
                            style={{
                                padding: '1rem 2rem',
                                background: 'linear-gradient(135deg, var(--accent-emerald) 0%, #0abce6 100%)',
                                color: 'var(--bg-dark)',
                                fontWeight: 'bold',
                                border: 'none',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontSize: '1.1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Open Map Inventory <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Abstract Spatial Representation */}
                    <div style={{ flex: '1', minWidth: '350px', position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            border: '1px solid var(--accent-emerald)',
                            borderRadius: '50%',
                            opacity: 0.2,
                            animation: 'spin 20s linear infinite'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            width: '200px',
                            height: '200px',
                            border: '2px dashed var(--accent-gold)',
                            borderRadius: '50%',
                            opacity: 0.3,
                            animation: 'spin-reverse 15s linear infinite'
                        }}></div>

                        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', position: 'relative', zIndex: 10, backdropFilter: 'blur(10px)' }}>
                            <Search size={48} color="white" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Search Topography</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Live spatial mapping enabled</p>
                        </div>

                        <style>
                            {`
                            @keyframes spin { 100% { transform: rotate(360deg); } }
                            @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
                            `}
                        </style>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BuyLands;
