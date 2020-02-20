module.exports = function repeater(str, options) {
  if (typeof str !== 'string' || !(str instanceof String)) {
    str = String(str);
  }

  let {
    repeatTimes: rT = 1,
    separator: s = '+',
    addition: a = '',
    additionRepeatTimes: aRT = 1,
    additionSeparator: aS = '|',
  } = options;

  if (typeof a !== 'string' || !(a instanceof String)) {
    a = String(a);
  }

  const additionString = new Array(aRT).fill(a).join(aS);

  return new Array(rT).fill(`${str}${additionString}`).join(s);
};
