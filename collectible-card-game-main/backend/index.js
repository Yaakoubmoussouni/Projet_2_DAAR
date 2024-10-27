const express = require('express');
const app = express();
const port = 3000;
const initServer = require('./controllers/initServer');
const POKEMONURL = 'https://api.pokemontcg.io/v2';

const API_KEY = '8b467d29-299a-42ad-a0e5-da506f3e01ec';

module.exports = {
    POKEMONURL,
    API_KEY
};
/*
    * The goal of this backend is to provide a REST API for the pokemon TCG API,
    * We'll be able to get cards, sets, types, etc.
    * We'll also be able to create users, and manage their collection of cards.
    * 
    * We've based on `https://docs.pokemontcg.io/` for the API documentation. 
    */
initServer(app); // init the server

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
}
);

