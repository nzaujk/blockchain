const SHA = require('crypto-js/sha256');
const Block = require('./index');

const calculateHash = item => SHA(item).toString();
createGenesis = () => {
  new Block(0, "01/01/2018", "Genesis block", "0")
};
const latestBlock = (chain) => {
  const chains = [createGenesis()];
  if(chain) {
    return chain[chains.length-1]
  }
};

const addBlock = (newblock) => {

}

module.exports = {
  calculateHash,
  createGenesis,
  latestBlock,
};

