import React from 'react';
import Layout from '../components/Layout';

const Accueil = () => {
    // Array of Pokémon data (IDs and names)
    const pokemons = [
        { id: 1, name: 'Bulbasaur' },
        { id: 25, name: 'Pikachu' },
        { id: 4, name: 'Charmander' },
        { id: 7, name: 'Squirtle' },
        { id: 133, name: 'Eevee' },
        { id: 150, name: 'Mewtwo' },
    ];

    return (
        <div className="flex h-screen">
            <div className="flex-grow ml-64 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-600 to-yellow-200 text-black text-center">
                <h1 className="text-5xl font-bold mb-4">
                    Trainer, welcome to the 100th Pokemon Trading Card Game website!
                </h1>
                <p className="text-xl mb-6">💰💰 Explore the world of cash Pokemon! 💰💰</p>
                <div className="flex flex-wrap justify-center">
                    {pokemons.map(pokemon => (
                        <div key={pokemon.id} className="m-4">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                alt={`${pokemon.name} sprite`}
                                aria-label={`${pokemon.name} sprite`}
                                className="w-40 h-40"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accueil;
