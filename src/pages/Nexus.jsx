import React, { useState, useEffect } from 'react';
import { Network, Building2, Trees, Users, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Nexus = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    // Node Definitions
    const nodes = [
        {
            id: 'developers',
            title: 'Top-Tier Developers',
            icon: <Building2 size={40} />,
            color: 'var(--accent-gold)',
            desc: 'Prestigious builders seeking elite distribution channels for high-value inventory.',
            stats: ['150+ Verified Developers', '₹10,000Cr+ Pipeline'],
            position: { x: 20, y: 20 }
        },
        {
            id: 'aggregators',
            title: 'Earth Custodians',
            icon: <Trees size={40} />,
            color: 'var(--accent-emerald)',
            desc: 'Sovereign entities controlling vast, untapped expanses of prime global earth.',
            stats: ['50,000+ Acres Available', 'Clear Titles Guaranteed'],
            position: { x: 80, y: 25 }
        },
        {
            id: 'partners',
            title: 'Channel Partners',
            icon: <Users size={40} />,
            color: 'var(--text-primary)',
            desc: 'Elite brokerage houses equipped with exclusive data to close legacy deals.',
            stats: ['5,000+ Verified Partners', 'Protected Commissions'],
            position: { x: 50, y: 80 }
        }
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isHovering) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10 deg
            const y = (e.clientY / window.innerHeight - 0.5) * -20;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovering]);

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            background: 'var(--bg-dark)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '100px', // Below navbar
            fontFamily: 'var(--font-body)'
        }}>
            {/* Background Grid & Gradient */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundSize: '40px 40px',
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                zIndex: 0,
                perspective: '1000px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    width: '150vw', height: '150vh',
                    background: 'radial-gradient(circle at center, transparent 0%, var(--bg-dark) 70%)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1
                }}></div>
            </div>

            {/* Header Content */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '4rem', padding: '0 2rem', animation: 'fadeUp 1s ease-out' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(13, 240, 122, 0.1)', border: '1px solid var(--border-emerald)', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: '1.5rem', color: 'var(--accent-emerald)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
                    <Network size={16} /> B2B Ecosystem Core
                </div>
                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1rem', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                    THE PLATFORM <br /> <span className="text-gradient">NEXUS</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    Interact with the digital nervous system that empowers Creators, Custodians, and Curators with absolute data superiority and protected momentum.
                </p>
            </div>

            {/* Interactive 3D Node Area */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    height: '600px',
                    zIndex: 10,
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                    transition: 'transform 0.1s ease-out',
                    margin: '0 auto'
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => { setIsHovering(false); setMousePos({ x: 0, y: 0 }); }}
            >
                {/* Central Platform Node */}
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: `translate(-50%, -50%) translateZ(50px)`,
                    width: '200px', height: '200px',
                    background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80) center/cover',
                    borderRadius: '24px',
                    boxShadow: '0 0 50px rgba(13, 240, 122, 0.4), inset 0 0 0 1px rgba(255,255,255,0.3)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                    className="hover-scale"
                    onMouseEnter={() => setActiveNode('platform')}
                    onMouseLeave={() => setActiveNode(null)}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', borderRadius: '24px', zIndex: 1 }}></div>
                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                        <HexagonCore active={activeNode === 'platform'} />
                        <h3 style={{ color: 'white', marginTop: '1rem', fontSize: '1.2rem', letterSpacing: '1px' }}>PRIMEPLAINS<br />CORE</h3>
                    </div>
                </div>

                {/* Connecting Lines (SVG) */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                    {nodes.map(node => (
                        <line
                            key={`line-${node.id}`}
                            x1="50%" y1="50%"
                            x2={`${node.position.x}%`} y2={`${node.position.y}%`}
                            stroke={activeNode === node.id || activeNode === 'platform' ? node.color : 'rgba(255,255,255,0.1)'}
                            strokeWidth={activeNode === node.id || activeNode === 'platform' ? "3" : "1"}
                            strokeDasharray={activeNode ? "0" : "5,5"}
                            style={{ transition: 'all 0.5s ease', filter: activeNode ? `drop-shadow(0 0 10px ${node.color})` : 'none' }}
                        />
                    ))}
                </svg>

                {/* Peripheral Nodes (Developers, Aggregators, Partners) */}
                {nodes.map((node) => (
                    <div key={node.id}
                        style={{
                            position: 'absolute',
                            top: `${node.position.y}%`, left: `${node.position.x}%`,
                            transform: `translate(-50%, -50%) translateZ(${activeNode === node.id ? '100px' : '20px'})`,
                            width: activeNode === node.id ? '380px' : '250px',
                            background: 'rgba(20, 20, 20, 0.8)',
                            backdropFilter: 'blur(15px)',
                            border: `1px solid ${activeNode === node.id ? node.color : 'rgba(255,255,255,0.1)'}`,
                            borderRadius: '20px',
                            padding: '2rem',
                            cursor: 'pointer',
                            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            boxShadow: activeNode === node.id ? `0 20px 40px rgba(0,0,0,0.8), 0 0 30px ${node.color}33` : '0 10px 30px rgba(0,0,0,0.5)',
                            zIndex: activeNode === node.id ? 20 : 5
                        }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: `${node.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: node.color, border: `1px solid ${node.color}55` }}>
                                {node.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', m: 0, color: 'white' }}>{node.title}</h3>
                        </div>

                        <div style={{
                            maxHeight: activeNode === node.id ? '200px' : '40px',
                            overflow: 'hidden',
                            transition: 'max-height 0.5s ease',
                            opacity: activeNode === node.id ? 1 : 0.7
                        }}>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                {node.desc}
                            </p>

                            {activeNode === node.id && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                                    {node.stats.map((stat, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontSize: '0.9rem' }}>
                                            <ShieldCheck size={16} color={node.color} /> {stat}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </div>

            {/* Bottom CTA */}
            <div style={{ position: 'relative', zIndex: 10, marginTop: '2rem', paddingBottom: '4rem' }}>
                <button
                    onClick={() => navigate('/contact')}
                    style={{
                        padding: '1.2rem 3rem',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--bg-dark)',
                        background: 'linear-gradient(135deg, var(--accent-emerald) 0%, #0abce6 100%)',
                        border: 'none',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        boxShadow: '0 10px 30px rgba(13, 240, 122, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(13, 240, 122, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(13, 240, 122, 0.3)';
                    }}
                >
                    <Zap size={20} /> Join The Ecosystem <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

// Helper component for the central core animation
const HexagonCore = ({ active }) => (
    <div style={{ position: 'relative', width: '60px', height: '60px', margin: '0 auto' }}>
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            border: `2px solid ${active ? 'var(--accent-emerald)' : 'white'}`,
            borderRadius: '10px',
            transform: `rotate(${active ? '180deg' : '45deg'})`,
            transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: active ? '0 0 20px rgba(13, 240, 122, 0.8)' : 'none'
        }}></div>
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: active ? 'rgba(13, 240, 122, 0.2)' : 'transparent',
            borderRadius: '50%',
            transform: active ? 'scale(1.2)' : 'scale(0.8)',
            transition: 'all 0.5s ease'
        }}></div>
        <Network size={30} color={active ? 'var(--accent-emerald)' : 'white'} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', transition: 'color 0.3s ease' }} />
    </div>
);

export default Nexus;
