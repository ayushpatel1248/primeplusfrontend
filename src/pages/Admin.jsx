import React, { useState, useEffect } from 'react';

const Admin = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            const response = await fetch('https://primeplus.onrender.com/api/inquiries');
            const data = await response.json();
            setInquiries(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: 'calc(100vh - 80px)',
            paddingTop: '80px',
            paddingBottom: '4rem',
            background: 'var(--bg-dark)',
            color: 'var(--text-primary)'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                    Admin Dashboard
                </h1>

                {loading ? (
                    <p style={{ color: 'var(--text-muted)' }}>Loading inquiries...</p>
                ) : inquiries.length === 0 ? (
                    <p style={{ color: 'var(--text-muted)' }}>No inquiries found.</p>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {inquiries.map((inq) => (
                            <div key={inq._id} className="glass-panel" style={{
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-emerald)' }}>{inq.name}</h3>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        {new Date(inq.createdAt).toLocaleString()}
                                    </span>
                                </div>
                                
                                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Email</p>
                                        <p>{inq.email}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Source</p>
                                        <p style={{ 
                                            background: inq.source === 'Specific Property' ? 'rgba(13, 240, 122, 0.1)' : 'rgba(255,255,255,0.1)',
                                            padding: '0.2rem 0.5rem',
                                            borderRadius: '4px',
                                            fontSize: '0.9rem'
                                        }}>
                                            {inq.source}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Message</p>
                                    <p style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>{inq.message}</p>
                                </div>

                                {inq.propertyDetails && (
                                    <div style={{ background: 'rgba(13, 240, 122, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(13, 240, 122, 0.1)' }}>
                                        <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Property Details</h4>
                                        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                                            <p><strong>Title:</strong> {inq.propertyDetails.title}</p>
                                            <p><strong>Price:</strong> {inq.propertyDetails.price}</p>
                                            <p><strong>Location:</strong> {inq.propertyDetails.location}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
