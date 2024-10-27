import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ basketCount }) => {
    const location = useLocation(); // Get current location to set active link

    return (
        <div className="fixed h-screen w-64 bg-gradient-to-b from-yellow-600 to-yellow-200 text-black flex flex-col">
            {/* Logo */}
            <div className="p-4 flex items-center justify-center">
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="Pokémon Logo"
                    className="w-16 h-16"
                />
                <h1 className="ml-2 text-2xl font-bold">PokeMenu</h1>
            </div>

            {/* Navigation Links */}
            <nav className="mt-10 flex-grow">
                <Link 
                    to="/" 
                    className={`block py-2.5 px-4 rounded ${location.pathname === '/' ? 'bg-yellow-400' : 'hover:bg-yellow-500'} transition duration-200`}
                    aria-label="Home"
                >
                    Home
                </Link>
                <Link 
                    to="/sets" 
                    className={`block py-2.5 px-4 rounded ${location.pathname === '/sets' ? 'bg-yellow-400' : 'hover:bg-yellow-500'} transition duration-200`}
                    aria-label="Sets"
                >
                    Sets
                </Link>
                <Link 
                    to="/transfer" 
                    className={`block py-2.5 px-4 rounded ${location.pathname === '/transfer' ? 'bg-yellow-400' : 'hover:bg-yellow-300'} transition duration-200`}
                    aria-label="Transfer"
                >
                    Transfer
                </Link>
                
                <Link 
                    to="/mycards" 
                    className={`block py-2.5 px-4 rounded ${location.pathname === '/mycards' ? 'bg-yellow-400' : 'hover:bg-yellow-300'} transition duration-200`}
                    aria-label="My Cards"
                >
                    MyCards
                </Link>
                
            </nav>

            {/* Basket Count */}
            <div className="p-4 mt-auto text-lg flex justify-between">
                <span>Basket</span>
                <span className="bg-yellow-500 rounded-full px-3 py-1 text-black">{basketCount}</span>
            </div>
        </div>
    );
};

export default Sidebar;
