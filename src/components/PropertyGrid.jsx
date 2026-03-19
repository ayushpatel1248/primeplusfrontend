import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

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
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Emerald Valley Retreat",
        price: "$5,750,000",
        details: "45.0 Acres (Agricultural)",
        specs: "Farm/Ranch",
        location: "Willamette Valley, OR",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const PropertyGrid = () => {
    return (
        <div className="property-grid-header">
            <div className="grid-title">
                <span className="badge">Glowing & accents</span>
                <h2>EXCLUSIVE LISTINGS</h2>
            </div>
            <div className="grid-cards">
                {mockProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default PropertyGrid;
