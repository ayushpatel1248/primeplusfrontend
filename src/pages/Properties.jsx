import React, { useState, useRef, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const mockProperties = [
    {
        id: 1,
        title: "Stags Leap Villa",
        price: "$14,500,000",
        details: "12.4 Acres | 7 Beds | 8.5 Baths",
        specs: "6,800 sq ft",
        location: "Napa, CA",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 2,
        title: "Hillside Lodge",
        price: "$8,200,000",
        details: "28.3 Acres",
        specs: "0 sq ft (Land)",
        location: "Aspen, CO",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Coastal Estate",
        price: "$22,900,000",
        details: "4.1 Acres | 5 Beds | 6 Baths",
        specs: "8,200 sq ft",
        location: "Malibu, CA",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 4,
        title: "Emerald Valley Retreat",
        price: "$5,750,000",
        details: "45.0 Acres",
        specs: "Farm/Ranch",
        location: "Willamette Valley, OR",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Skyline Penthouse",
        price: "$35,000,000",
        details: "0.2 Acres | 4 Beds | 5 Baths",
        specs: "5,500 sq ft",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const Properties = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setTimeout(checkScroll, 350); // check after animation
        }
    };

    return (
        <div style={{
            minHeight: 'calc(100vh - 80px)',
            paddingTop: '80px',
            background: 'var(--bg-dark)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Dynamic Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--accent-emerald-subtle) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '3rem',
                    paddingTop: '2rem'
                }}>
                    <div>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.4rem 1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '20px',
                            color: 'var(--accent-emerald)',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            letterSpacing: '1px'
                        }}>CURATED COLLECTION</span>
                        <h1 className="text-gradient" style={{ fontSize: '3.5rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
                            Exceptional <br />Properties
                        </h1>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', paddingBottom: '0.5rem' }}>
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            style={{
                                width: '50px', height: '50px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: canScrollLeft ? 'var(--surface-light)' : 'transparent',
                                border: `1px solid ${canScrollLeft ? 'var(--border-emerald)' : 'var(--border-light)'}`,
                                color: canScrollLeft ? 'var(--accent-emerald)' : 'var(--text-muted)',
                                cursor: canScrollLeft ? 'pointer' : 'default',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            style={{
                                width: '50px', height: '50px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: canScrollRight ? 'var(--surface-light)' : 'transparent',
                                border: `1px solid ${canScrollRight ? 'var(--border-emerald)' : 'var(--border-light)'}`,
                                color: canScrollRight ? 'var(--accent-emerald)' : 'var(--text-muted)',
                                cursor: canScrollRight ? 'pointer' : 'default',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                style={{
                    display: 'flex',
                    gap: '2.5rem',
                    padding: '0 2rem 4rem 2rem',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none',  /* IE and Edge */
                    position: 'relative',
                    zIndex: 10
                }}
                className="hide-scrollbar"
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />

                {/* Offset for first item alignment with container */}
                <div style={{ minWidth: 'calc((100vw - 1440px) / 2)', display: 'block' }}></div>

                {mockProperties.map((property, index) => (
                    <div key={property.id} style={{
                        minWidth: '280px',
                        scrollSnapAlign: 'start',
                        animation: `fadeUp 0.6s ease-out ${index * 0.15}s forwards`,
                        opacity: 0,
                        transform: 'translateY(30px)'
                    }}>
                        <PropertyCard property={property} />
                    </div>
                ))}

                {/* End padding */}
                <div style={{ minWidth: '4vw', display: 'block' }}></div>
            </div>
        </div>
    );
};

export default Properties;
