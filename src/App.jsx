import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Estates from './pages/Estates';
import Acres from './pages/Acres';
import Nexus from './pages/Nexus';
import Land from './pages/Land';
import About from './pages/About';
import Contact from './pages/Contact';
import Sell from './pages/Sell'; // Import the new Sell component
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy-lands" element={<Land />} />
            <Route path="/sell-lands" element={<Sell />} /> {/* Map to Sell component */}
            <Route path="/advisory" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/estates" element={<Estates />} />
            <Route path="/acres" element={<Acres />} />
            <Route path="/nexus" element={<Nexus />} />
            <Route path="/land" element={<Land />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
