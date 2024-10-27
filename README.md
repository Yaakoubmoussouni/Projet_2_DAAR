# Collectible Card Game

Welcome to the DAAR project. The idea will be to implement a Collectible Card Game in a decentralized way on Ethereum. This will force you to iterate through the creation of CCG cards as NFTs, create a marketplace for players to exchange NFTs, and run a frontend to create collections.

## Authors

- Rania KABTANE
- Yaakoub MOUSSOUNI

## Demo

## Installation

### With HTTPS
```bash
git clone https://github.com/ghivert/collectible-card-game-daar.git
```
Or with SSH
```bash
git clone git@github.com:ghivert/collectible-card-game-daar.git
```
You’ll need to install dependencies. You’ll need HardHat, Node.js, NPM, and Yarn. You’ll need to install Metamask as well to communicate with your blockchain.

HardHat is a local blockchain development tool, allowing you to iterate quickly and avoid wasting Ether during development. Fortunately, you have nothing to do to install it.
Node.js is used to build the frontend and run Truffle, which is a utility to deploy contracts.
NPM or Yarn is a package manager used to install dependencies for your frontend development. Yarn is recommended.
Metamask is a browser utility to interact with decentralized applications.
Some Setup
Once everything is installed, launch the project with:

```bash
yarn dev
```
You should have a local blockchain running. Open Metamask, set it up, and add an account from the private keys that HardHat displays. Now you can connect Metamask to the blockchain. To do this, add a network by clicking on Ethereum Mainnet and personalized RPC. Here, you should be able to add a network.

Ganache Config
Once you have done this, you’re connected to the HardHat blockchain!

Installation
Install the dependencies.
```bash
###Yarn Users
yarn
```
Run the complete project.
```bash
###Yarn Users
yarn dev
```
You’re good to go!

Subject
TCG, or Trading Card Game, sometimes called CCG for Collectible Card Game, are a type of game in which you're opening randomized packs of cards, called boosters, and you're building your pack of cards, called decks, to play against other players. This is a popular format nowadays, both physically and digitally. The most famous of them are Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Hearthstone, Marvel Snap, or even Legends of Runeterra. You probably heard about at least one, and maybe played with some of them.

The subject of this project will be to put yourself in the place of a TCG creator, and to create a TCG on Ethereum and other EVM-compatible blockchains. To fulfill this goal, you'll need to understand the different parts of the game, from the on-chain part (hosted on the blockchain) to the off-chain parts (the frontend and the backend) of the game.

While you could go to the end and build a complete, working TCG, you're not going to be asked to build a game engine. This would take more than a bunch of weeks, and it's not the scope of the project. The project will be focused on building the collectible part of the project. In other words, you'll build the way to collect digital cards, make them possible to exchange with friends, browse the cards on your web browser, and organize your collection as you want.

In a real TCG, a new set of cards is published approximately every 3 to 4 months. Your work will be to build a complete infrastructure able to manage a new collection of cards on a regular basis.

More specifications: the cards will be represented as NFTs, or Non-Fungible Tokens. It's the best way to represent collectibles on a blockchain. For this, you'll implement the ERC-721 standard, and you'll build the different frontends and backends on your own. The project is here to help you kickstart the infrastructure.
