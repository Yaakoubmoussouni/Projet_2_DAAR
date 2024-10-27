import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { BACKEND_URL } from '../../../constants';
import LoadingSpinner from '../components/LoadingSpinner'; // For the loading spinner

function MyCards() {
    const [userCards, setUserCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [connectedAccount, setConnectedAccount] = useState('');

    useEffect(() => {
        const getConnectedAccount = async () => {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setConnectedAccount(accounts[0]);
            } catch (error) {
                console.error('Error fetching connected account:', error);
                setIsLoading(false);
            }
        };
        
        getConnectedAccount();
    }, []);

    useEffect(() => {
        const fetchUserCards = async () => {
            if (!connectedAccount) return; // Exit if no connected account

            try {
                const response = await axios.get(`${BACKEND_URL}/getUserNFTs/${connectedAccount}`);
                console.log(response.data);

                const list = await Promise.all(response.data.map(async (card) => {
                    const res = await axios.get(card.tokenURI);
                    return { id: card.id, image: res.data.image, name: res.data.name }; // Include name if available
                }));

                setUserCards(list);
            } catch (error) {
                console.error('Error while fetching user cards:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserCards();
    }, [connectedAccount]); // Only fetch user cards when connectedAccount changes

    return (
        <div className="flex h-full">
            {/* Main content area */}
            <div className="flex-grow ml-64 h-screen p-6 bg-gradient-to-b from-yellow-600 to-purple-500">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">My Pokémon Cards</h1>

                {isLoading ? (
                    <LoadingSpinner />  // Show loading spinner while fetching data
                ) : userCards.length > 0 ? (
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
                        {userCards.map(card => (
                            <div
                                key={card.id}
                                className="cursor-pointer rounded-lg p-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <img src={card.image} alt={card.name} className="w-full mb-2 rounded" />
                                <h2 className="text-lg font-bold">{card.name}</h2>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center mt-10">
                        <p className="text-center text-lg font-semibold text-gray-500 mb-4">
                            No minted cards for you yet.
                        </p>
                        <Link
                            to="/sets"
                            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                        >
                            Go to Sets and start your Trainer journey.
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyCards;
