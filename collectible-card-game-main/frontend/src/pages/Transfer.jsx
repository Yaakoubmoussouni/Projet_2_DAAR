import Layout from '@/components/Layout';
import { buyCards } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const Transfer = ({ selectedCards, setSelectedCards }) => {
    const [connectedAccount, setConnectedAccount] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        const fetchAccount = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setConnectedAccount(accounts[0]);
        };

        fetchAccount();
    }, []);

    return (
        <div className="flex-grow ml-64 h-screen p-64 bg-gradient-to-b from-yellow-600 to-purple-200"> 
            <div className="flex flex-col items-center justify-center h-full">
                <div className='text-black text-lg mb-4'>Your wallet @: {connectedAccount}</div>

                <h1 className="text-4xl text-black font-bold mb-4">Transfer Pokemon Card</h1>

                {/* Pokemon Animation */}
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="Pokemon"
                    className="w-32 h-32 animate-bounce"
                />

                {/* Wallet Address Input */}
                <div className="mt-6 flex items-center">
                    <input
                        type="text"
                        placeholder="Enter Wallet Address"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button
                        onClick={() => buyCards(selectedCards, walletAddress, setSelectedCards)}
                        className="ml-4 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition cursor-pointer"
                        disabled={!walletAddress || selectedCards.length === 0}
                    >
                        Transfer
                    </button>
                </div>

                {connectedAccount.toLowerCase() === walletAddress.toLowerCase() && (
                    <div className='my-6 text-black'>Minting for yourself, huh!</div>
                )}
                {(walletAddress && connectedAccount.toLowerCase() !== walletAddress.toLowerCase()) && (
                    <div className='my-6 text-black'>You're sending it to a stranger's wallet!</div>
                )}
            </div>
        </div>
    );
};

export default Transfer;
