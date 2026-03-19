import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { ArrowRight } from 'lucide-react';

const mockEstates = [
    {
        id: 1,
        title: "Chateau de Lumiere",
        price: "$45,000,000",
        details: "15 Acres | 12 Beds | 14 Baths",
        specs: "24,000 sq ft",
        location: "Beverly Hills, CA",
        image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        featured: true
    },
    {
        id: 2,
        title: "The Glass Manor",
        price: "$28,500,000",
        details: "8 Acres | 6 Beds | 8 Baths",
        specs: "12,500 sq ft",
        location: "Montecito, CA",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 3,
        title: "Highland Reserve",
        price: "$19,250,000",
        details: "40 Acres | 5 Beds | 7 Baths",
        specs: "9,800 sq ft",
        location: "Jackson Hole, WY",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 4,
        title: "Villa Paradiso",
        price: "$32,000,000",
        details: "12 Acres | 8 Beds | 10 Baths",
        specs: "15,000 sq ft",
        location: "Lake Como, Italy",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true
    }
];

const Estates = () => {
    return (
        <div style={{
            minHeight: 'calc(100vh - 80px)',
            paddingTop: '80px',
            background: 'var(--bg-dark)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(206, 177, 109, 0.05) 0%, transparent 60%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingBottom: '6rem' }}>

                {/* Header Section */}
                <div style={{ marginTop: '4rem', marginBottom: '6rem', maxWidth: '800px', animation: 'fadeUp 0.8s ease-out forwards' }}>
                    <span style={{
                        color: 'var(--accent-gold)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        The Pinnacle Collection
                    </span>
                    <h1 className="text-gradient-gold" style={{ fontSize: '4.5rem', lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '2rem' }}>
                        SIGNATURE <br />ESTATES
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '600px' }}>
                        Discover architectural masterpieces and legacy properties. Curated for those who demand the absolute best in design, location, and pedigree.
                    </p>
                </div>

                {/* Asymmetric Masonry Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

                    {/* Left Column (Pushed down) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', marginTop: '10rem' }}>
                        <div style={{ animation: 'fadeUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
                            <PropertyCard property={mockEstates[0]} />
                        </div>
                        <div style={{ animation: 'fadeUp 0.8s ease-out 0.4s forwards', opacity: 0 }}>
                            <PropertyCard property={mockEstates[2]} />
                        </div>
                    </div>

                    {/* Right Column (Starts higher) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                        <div style={{ animation: 'fadeUp 0.8s ease-out 0.3s forwards', opacity: 0 }}>
                            <PropertyCard property={mockEstates[1]} />
                        </div>
                        <div style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards', opacity: 0 }}>
                            <PropertyCard property={mockEstates[3]} />
                        </div>

                        {/* View All Card */}
                        <div className="glass-panel" style={{
                            padding: '4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            border: '1px solid var(--accent-gold)',
                            background: 'linear-gradient(135deg, rgba(206,177,109,0.1) 0%, transparent 100%)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            animation: 'fadeUp 0.8s ease-out 0.6s forwards',
                            opacity: 0
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(206,177,109,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                        >
                            <h3 className="text-gradient-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>View Private Collection</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Access off-market estates requiring an NDA.</p>
                            <button style={{
                                width: '60px', height: '60px', borderRadius: '50%',
                                background: 'var(--accent-gold)', color: 'var(--bg-dark)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: 'none', cursor: 'pointer'
                            }}>
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Estates;
