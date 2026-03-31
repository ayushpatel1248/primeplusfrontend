import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';

const Home = () => {
    const [isFullScreenMap, setIsFullScreenMap] = useState(false);

    const handleMapClick = () => {
        if (!isFullScreenMap) {
            setIsFullScreenMap(true);
        }
    };

    const closeFullScreen = (e) => {
        e.stopPropagation();
        setIsFullScreenMap(false);
    };

    // Prevent scrolling when full screen
    useEffect(() => {
        if (isFullScreenMap) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isFullScreenMap]);

    return (
        <main className="main-content">
            <Hero />

            <section id="properties" className="property-explorer container">
                <div
                    className="map-container glass-panel"
                    onClick={handleMapClick}
                    style={isFullScreenMap ? {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 9999,
                        borderRadius: 0,
                        cursor: 'default',
                        background: 'var(--bg-darker)',
                        transition: 'all 0.4s ease'
                    } : { cursor: 'zoom-in', transition: 'all 0.4s ease' }}
                    title={isFullScreenMap ? "" : "Click to View Full Screen Map"}
                >
                    {isFullScreenMap && (
                        <button
                            onClick={closeFullScreen}
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                zIndex: 10000,
                                background: 'rgba(0,0,0,0.7)',
                                border: '1px solid var(--border-light)',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--text-primary)',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-emerald)';
                                e.currentTarget.style.color = 'var(--accent-emerald)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-light)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                        >
                            <X size={24} />
                        </button>
                    )}

                    {/* Real Interactive Map */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        opacity: isFullScreenMap ? 1 : 0.4,
                        transform: isFullScreenMap ? 'scale(1)' : 'scale(1.1)',
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: isFullScreenMap ? 'auto' : 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0" 
                            src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Bangalore+(Primeplains)&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            style={{ filter: isFullScreenMap ? 'none' : 'contrast(1.2) brightness(0.8) grayscale(1)' }}
                            title="Interactive Property Map"
                        ></iframe>
                    </div>

                    {!isFullScreenMap && (
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', transition: 'all 0.5s ease' }}>
                            <div style={{
                                width: 25,
                                height: 25,
                                background: 'var(--accent-emerald)',
                                borderRadius: '50%',
                                margin: '0 auto 10px',
                                boxShadow: '0 0 30px var(--accent-emerald-glow)',
                            }}></div>
                            <p style={{
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                fontSize: '1.2rem',
                                textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                            }}>
                                Interactive Map Region
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--accent-emerald)',
                                marginTop: '8px',
                                fontWeight: 500,
                                textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                            }}>
                                Click to Expand Full Screen
                            </p>
                        </div>
                    )}
                </div>

                <div className="listings-container">
                    <PropertyGrid />
                </div>
            </section>
        </main>
    );
};

export default Home;
