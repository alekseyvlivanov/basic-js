module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return JSON.stringify(arr) === JSON.stringify(arr.flat())
      ? 1
      : 1 + this.calculateDepth(arr.flat());
  }
};
