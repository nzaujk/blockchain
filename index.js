const calculateHash = require('./helper');
class Block {
  constructor(timestamp, data) {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = '0';
    this.hash = this.hashCalc();
    this.nonce = 0;
  }
  hashCalc = () => {
    const item = this.timestamp + this.prevHash + this.data + this.nonce;
    calculateHash(item)
  };
  mineBlock(difficulty) {};
}
module.exports = Block;
