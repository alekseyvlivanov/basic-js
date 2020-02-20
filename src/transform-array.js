module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let res = [];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === '--discard-next') {
      i += 2;
    } else if (arr[i] === '--discard-prev') {
      res.pop();
      i += 1;
    } else if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        res.push(arr[i + 1], arr[i + 1]);
      }
      i += 2;
    } else if (arr[i] === '--double-prev') {
      if (i > 0) {
        res.push(arr[i - 1]);
      }
      i += 1;
    } else {
      res.push(arr[i]);
      i += 1;
    }
  }

  // console.log(arr, res);
  return res;
};
