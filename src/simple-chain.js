const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],
  getLength() {
      const length = this.arr.length;
      return length;
  },
  addLink(value = '') {
      this.arr.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
      if (Number(position) && position >= 1 && position <= this.arr.length) {
          this.arr.splice(position-1, 1);
          return this
      } else {
          this.arr = []
          throw new Error("You can't remove incorrect link!")
      }
  },
  reverseChain() {
     this.arr.reverse();
     return this;
  },
  finishChain() {
      const chain = this.arr.join('~~');
      this.arr = [];
      return chain
  }
};

module.exports = {
  chainMaker
};
