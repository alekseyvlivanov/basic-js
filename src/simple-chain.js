const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const realPosition = Number.isInteger(position) ? position - 1 : -1;

    if (realPosition < 0 || position > this.getLength()) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(realPosition, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainString = this.chain.join('~~');
    this.chain = [];
    return chainString;
  },
};

module.exports = chainMaker;
