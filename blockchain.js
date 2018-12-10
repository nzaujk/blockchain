
const createGenesis = require('./helper').createGenesis;
const latestBlock = require('./helper').latestBlock();
class Blockchain {
  constructor() {
    this.chain = [createGenesis];
  }
  latestBlock
}
