import React, { useState, useRef, useEffect } from 'react';
import { Heart, Share, MapPin, Square } from 'lucide-react';

const PropertyCard = ({ property }) => {
    const cardRef = useRef(null);
    const [{ x, y, active }, setHoverState] = useState({ x: 0, y: 0, active: false });
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://primeplus.onrender.com/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'Specific Property',
                    propertyDetails: {
                        title: property.title,
                        price: property.price,
                        location: property.location,
                        id: property.id
                    }
                })
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

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        setHoverState({ x, y, active: true });
    };

    const handleMouseLeave = () => {
        setHoverState({ x: 0, y: 0, active: false });
    };

    // Calculate 3D rotation based on mouse position relative to center
    const rotateX = active && cardRef.current ? ((y - cardRef.current.clientHeight / 2) / cardRef.current.clientHeight) * -15 : 0;
    const rotateY = active && cardRef.current ? ((x - cardRef.current.clientWidth / 2) / cardRef.current.clientWidth) * 15 : 0;

    return (
        <div
            ref={cardRef}
            className="property-card glass-panel"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${active ? 1.02 : 1})`,
                transition: active ? 'none' : 'transform 0.5s ease',
                transformStyle: 'preserve-3d',
                borderColor: active ? 'var(--accent-emerald)' : 'var(--accent-emerald-subtle)',
                boxShadow: active ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px var(--accent-emerald-glow)` : '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(13, 240, 122, 0.05)',
            }}
        >
            {/* Glare effect */}
            {active && (
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 40%)`,
                    pointerEvents: 'none',
                    zIndex: 10,
                    borderRadius: 'inherit'
                }}></div>
            )}

            <div className="card-image-wrapper" style={{ transform: 'translateZ(30px)' }}>
                <img
                    src={property.image}
                    alt={property.title}
                    className="card-image"
                    style={{
                        transform: active ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.5s ease'
                    }}
                />
                <button className="like-btn icon-btn" style={{ transform: 'translateZ(20px)' }}><Heart size={18} /></button>
                <button className="share-btn icon-btn" style={{ transform: 'translateZ(20px)' }}><Share size={16} /></button>
            </div>

            <div className="card-content" style={{ transform: 'translateZ(40px)' }}>
                <h3 className="card-title" style={{ textShadow: active ? '0 0 10px rgba(255,255,255,0.3)' : 'none', transition: 'text-shadow 0.3s' }}>
                    {property.title}
                </h3>
                <p className="card-price-details">
                    <span className="price">{property.price}</span>
                    <span className="divider">|</span>
                    <span className="details">{property.details}</span>
                </p>

                <div className="card-specs">
                    <div className="spec-item">
                        <Square size={14} className="spec-icon" />
                        <span>{property.specs}</span>
                    </div>
                    <div className="spec-item">
                        <MapPin size={14} className="spec-icon" />
                        <span>{property.location}</span>
                    </div>
                </div>

                <div className="card-actions" style={{ transform: 'translateZ(50px)' }}>
                    <button className="btn-secondary">View Details</button>
                    {/* Always show the emerald primary button as requested */}
                    <button className="btn-primary-emerald" onClick={() => setShowModal(true)} style={{ whiteSpace: 'nowrap' }}>Contact Agent</button>
                </div>
            </div>

            {/* Contact Agent Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.8)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)'
                }} onClick={() => setShowModal(false)}>
                    <div style={{
                        background: 'var(--bg-dark)',
                        padding: '2rem',
                        borderRadius: '16px',
                        width: '90%',
                        maxWidth: '400px',
                        border: '1px solid var(--border-emerald)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                        animation: 'scaleIn 0.3s ease-out'
                    }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            Contact Agent
                            <button onClick={() => setShowModal(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
                        </h3>
                        <p style={{ color: 'var(--accent-emerald)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>For {property.title}</p>
                        
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-primary)' }}>
                                <p style={{ fontSize: '1.1rem', color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>✓ Inquiry Sent</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>An agent will contact you shortly.</p>
                                <button onClick={() => setShowModal(false)} className="btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>Close</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                                <input type="email" placeholder="Your Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                                <textarea rows="3" placeholder="Message to Agent..." required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-light)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                                <button type="submit" disabled={loading} className="btn-primary-emerald" style={{ marginTop: '0.5rem', padding: '0.8rem', borderRadius: '8px', border: 'none', opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}>
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyCard;
