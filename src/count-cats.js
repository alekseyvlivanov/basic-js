module.exports = function countCats(backyard) {
  return backyard
    .map(innerArray =>
      innerArray.reduce(
        (accumulator, currentValue) =>
          accumulator + (currentValue === '^^' ? 1 : 0),
        0,
      ),
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
