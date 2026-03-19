import React, { useState } from 'react';
import { Search, Filter, Map, List, ArrowDownUp } from 'lucide-react';

const mockAcres = [
    { id: 'LND-842', type: 'Agricultural', size: '1,250 Acres', price: '$8,500,000', pricePerAcre: '$6,800', location: 'Montana', status: 'Available' },
    { id: 'LND-915', type: 'Development', size: '45 Acres', price: '$12,000,000', pricePerAcre: '$266,666', location: 'Texas', status: 'In Escrow' },
    { id: 'LND-334', type: 'Timberland', size: '500 Acres', price: '$2,100,000', pricePerAcre: '$4,200', location: 'Oregon', status: 'Available' },
    { id: 'LND-102', type: 'Vineyard', size: '85 Acres', price: '$18,500,000', pricePerAcre: '$217,647', location: 'California', status: 'Available' },
    { id: 'LND-776', type: 'Recreational', size: '320 Acres', price: '$1,450,000', pricePerAcre: '$4,531', location: 'Colorado', status: 'Available' },
    { id: 'LND-889', type: 'Agricultural', size: '4,000 Acres', price: '$22,000,000', pricePerAcre: '$5,500', location: 'Nebraska', status: 'New Listing' }
];

const Acres = () => {
    const [activeTab, setActiveTab] = useState('data');

    return (
        <div style={{
            minHeight: 'calc(100vh - 80px)',
            paddingTop: '80px',
            background: 'var(--bg-dark)',
            position: 'relative'
        }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Header & Controls */}
                <div style={{ marginTop: '3rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ animation: 'fadeUp 0.8s ease-out forwards' }}>
                        <h1 className="text-gradient" style={{ fontSize: '3.5rem', letterSpacing: '-1px', marginBottom: '0.5rem' }}>Land Database</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Explore vast acreage, development plots, and strategic investments.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', animation: 'scaleIn 0.8s ease-out 0.2s forwards', opacity: 0 }}>
                        <div className="glass-panel" style={{ display: 'flex', padding: '0.5rem', borderRadius: '12px' }}>
                            <button
                                onClick={() => setActiveTab('data')}
                                style={{
                                    padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    background: activeTab === 'data' ? 'var(--accent-emerald)' : 'transparent',
                                    color: activeTab === 'data' ? 'var(--bg-dark)' : 'var(--text-secondary)',
                                    borderRadius: '8px', fontWeight: activeTab === 'data' ? '600' : '400',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <List size={18} /> Data View
                            </button>
                            <button
                                onClick={() => setActiveTab('map')}
                                style={{
                                    padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    background: activeTab === 'map' ? 'var(--accent-emerald)' : 'transparent',
                                    color: activeTab === 'map' ? 'var(--bg-dark)' : 'var(--text-secondary)',
                                    borderRadius: '8px', fontWeight: activeTab === 'map' ? '600' : '400',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Map size={18} /> Map View
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.8s ease-out 0.3s forwards', opacity: 0 }}>
                    <div style={{ flex: 1, minWidth: '250px', display: 'flex', alignItems: 'center', background: 'var(--bg-darker)', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                        <Search size={18} color="var(--text-muted)" style={{ marginRight: '0.8rem' }} />
                        <input type="text" placeholder="Search by ID, Location, or Type..." style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
                    </div>
                    <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Filter size={18} /> Filters</button>
                    <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowDownUp size={18} /> Sort: Price (High)</button>
                </div>

                {/* Data Table View */}
                {activeTab === 'data' && (
                    <div className="glass-panel" style={{ overflowX: 'auto', animation: 'fadeUp 0.5s ease-out forwards' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    <th style={{ padding: '1.5rem 1rem' }}>Property ID</th>
                                    <th style={{ padding: '1.5rem 1rem' }}>Type</th>
                                    <th style={{ padding: '1.5rem 1rem' }}>Size</th>
                                    <th style={{ padding: '1.5rem 1rem' }}>Total Price</th>
                                    <th style={{ padding: '1.5rem 1rem' }}>Price / Acre</th>
                                    <th style={{ padding: '1.5rem 1rem' }}>Location</th>
                                    <th style={{ padding: '1.5rem 1rem' }}>Status</th>
                                    <th style={{ padding: '1.5rem 1rem' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockAcres.map((acre, index) => (
                                    <tr key={acre.id} style={{
                                        borderBottom: '1px solid var(--border-light)',
                                        transition: 'background 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <td style={{ padding: '1.5rem 1rem', color: 'var(--text-primary)', fontWeight: '500' }}>{acre.id}</td>
                                        <td style={{ padding: '1.5rem 1rem', color: 'var(--text-secondary)' }}>{acre.type}</td>
                                        <td style={{ padding: '1.5rem 1rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>{acre.size}</td>
                                        <td style={{ padding: '1.5rem 1rem', color: 'var(--text-primary)' }}>{acre.price}</td>
                                        <td style={{ padding: '1.5rem 1rem', color: 'var(--text-secondary)' }}>{acre.pricePerAcre}</td>
                                        <td style={{ padding: '1.5rem 1rem', color: 'var(--text-secondary)' }}>{acre.location}</td>
                                        <td style={{ padding: '1.5rem 1rem' }}>
                                            <span style={{
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                background: acre.status === 'Available' ? 'rgba(13, 240, 122, 0.1)' : acre.status === 'New Listing' ? 'rgba(206, 177, 109, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                                                color: acre.status === 'Available' ? 'var(--accent-emerald)' : acre.status === 'New Listing' ? 'var(--accent-gold)' : 'var(--text-muted)'
                                            }}>
                                                {acre.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1.5rem 1rem' }}>
                                            <button style={{ color: 'var(--accent-emerald)', border: 'none', background: 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>Review</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Map View Placeholder */}
                {activeTab === 'map' && (
                    <div className="glass-panel" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80) center/cover', animation: 'scaleIn 0.5s ease-out forwards' }}>
                        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', backdropFilter: 'blur(30px)' }}>
                            <Map size={40} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem' }} />
                            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Topographic Map View</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Interactive plotting is active. Click pins to view land details.</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Acres;
