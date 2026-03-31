import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://primeplus.onrender.com/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'General Contact' })
            });
            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setLoading(false);
        }
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
            {/* Interactive Background Map Element */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.4,
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 3s ease-out',
                pointerEvents: 'none' // Add this so the map doesn't block interactions if any
            }}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Beverly%20Hills,%20CA+(Primeplains)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    style={{ filter: 'contrast(1.2) brightness(0.8) grayscale(1)' }}
                    title="Primeplains Location"
                ></iframe>
            </div>

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

                {/* Contact Info Side */}
                <div style={{ flex: '1', minWidth: '280px', maxWidth: '500px', animation: 'fadeUp 0.8s ease-out forwards' }}>
                    <h1 className="text-gradient-gold" style={{ fontSize: '4rem', lineHeight: '1', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        FORGE YOUR<br />ALLIANCE
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
                        Whether you are an architect of skylines seeking flawless global distribution, or an elite curator of clientele requiring peerless inventory—your integration begins here.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(13, 240, 122, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)', border: '1px solid var(--border-emerald)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Global Headquarters</h4>
                                <p style={{ color: 'var(--text-muted)' }}>100 Prime Avenue, Beverly Hills, CA</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(206, 177, 109, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', border: '1px solid rgba(206, 177, 109, 0.3)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Direct Line</h4>
                                <p style={{ color: 'var(--text-muted)' }}>+1 (800) 555-PRIME</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', border: '1px solid var(--border-light)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Private Contact</h4>
                                <p style={{ color: 'var(--text-muted)' }}>estates@primeplans.io</p>
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
                        border: '1px solid rgba(13, 240, 122, 0.2)',
                        boxShadow: isHovered ? '0 20px 50px rgba(13, 240, 122, 0.15)' : '0 10px 30px rgba(0,0,0,0.5)',
                        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        animation: 'fadeUp 0.8s ease-out 0.2s forwards',
                        opacity: 0,
                        backdropFilter: 'blur(20px)'
                    }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>Private Inquiry</h3>
                        <div>
                            <input type="text" placeholder="Full Name or Entity" required style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-emerald)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                            />
                        </div>
                        <div>
                            <input type="email" placeholder="Preferred Email" required style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-emerald)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                            />
                        </div>
                        <div>
                            <textarea rows="4" placeholder="How may we assist you?" required style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'vertical', transition: 'all 0.3s ease', fontSize: '1rem', fontFamily: 'inherit' }}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-emerald)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                            ></textarea>
                        </div>
                        <button type="submit" disabled={loading} style={{
                            marginTop: '1rem',
                            padding: '1.2rem',
                            borderRadius: '12px',
                            border: 'none',
                            background: 'linear-gradient(135deg, var(--accent-emerald) 0%, #0abce6 100%)',
                            color: 'var(--bg-dark)',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            cursor: loading ? 'wait' : 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: loading ? 'none' : '0 5px 20px rgba(13, 240, 122, 0.4)',
                            opacity: loading ? 0.7 : 1
                        }}
                            onMouseEnter={(e) => {
                                if (!loading) {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(13, 240, 122, 0.6)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!loading) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(13, 240, 122, 0.4)';
                                }
                            }}
                        >
                            {loading ? 'Submitting...' : 'Submit Inquiry'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Popup Modal */}
            {submitted && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.8)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)'
                }} onClick={() => setSubmitted(false)}>
                    <div style={{
                        background: 'var(--bg-dark)',
                        padding: '3rem',
                        borderRadius: '24px',
                        width: '90%',
                        maxWidth: '450px',
                        border: '1px solid var(--border-emerald)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(13, 240, 122, 0.1)',
                        animation: 'scaleIn 0.3s ease-out',
                        textAlign: 'center'
                    }} onClick={e => e.stopPropagation()}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(13, 240, 122, 0.2)', color: 'var(--accent-emerald)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Send size={40} />
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Inquiry Received</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            An exclusive agent will contact you shortly to begin your journey.
                        </p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="btn-primary-emerald"
                            style={{ width: '100%', padding: '1rem', borderRadius: '12px', fontSize: '1.1rem' }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
