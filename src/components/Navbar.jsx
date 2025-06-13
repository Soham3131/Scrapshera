// src/components/Navbar.jsx (or wherever you prefer to place it)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion for animations
import logo from "../assets/logo.png"

const Navbar = () => {
  const phoneNumber = "9253625099"; // Your phone number for direct call

  return (
    // Add motion.nav for animation effects
    <motion.nav
      className="p-4 flex items-center justify-between bg-gradient-to-r from-green-700 to-green-900 shadow-lg text-white"
      initial={{ y: -100, opacity: 0 }} // Starts from above, invisible
      animate={{ y: 0, opacity: 1 }}    // Animates to its final position, visible
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.4 }} // Smooth spring animation
    >
      <Link to="/" className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors duration-300">
        {/* Logo - using placeholder URL to avoid compilation issues */}
        <img
          src={logo} // Placeholder for ScrapShera logo
          alt="ScrapShera Logo"
          className="w-10 h-10 rounded-full"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/CCCCCC/000000?text=Logo"; }}
        />
        <span className="text-xl font-bold">ScrapShera</span>
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="px-3 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
          Home
        </Link>
        <Link to="/scrap-rates" className="px-3 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
          Scrap Rates
        </Link>
        {/* Changed from Schedule Pickup to Call Us with direct tel: link */}
        <a
          href={`tel:${phoneNumber}`} // Direct phone call link
          className="px-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors duration-300"
        >
          Call Us
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
