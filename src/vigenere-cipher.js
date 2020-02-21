class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    const aMessage = message.toUpperCase();
    const aKey = key.toUpperCase();
    const shift = 65;
    const divider = 26;

    let msgIndex = 0;
    let keyIndex = 0;
    let result = '';

    while (msgIndex < aMessage.length) {
      if (aMessage[msgIndex].match(/[A-Z]/)) {
        result += String.fromCharCode(
          ((aMessage.charCodeAt(msgIndex) -
            shift +
            aKey.charCodeAt(keyIndex) -
            shift) %
            divider) +
            shift,
        );

        keyIndex++;

        if (keyIndex === aKey.length) {
          keyIndex = 0;
        }
      } else {
        result += aMessage[msgIndex];
      }
      msgIndex++;
    }

    return this.direct
      ? result
      : result
          .split('')
          .reverse()
          .join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }

    const aMessage = encryptedMessage.toUpperCase();
    const aKey = key.toUpperCase();
    const shift = 65;
    const divider = 26;

    let msgIndex = 0;
    let keyIndex = 0;
    let result = '';

    while (msgIndex < aMessage.length) {
      if (aMessage[msgIndex].match(/[A-Z]/)) {
        result += String.fromCharCode(
          ((aMessage.charCodeAt(msgIndex) +
            divider -
            aKey.charCodeAt(keyIndex)) %
            divider) +
            shift,
        );

        keyIndex++;

        if (keyIndex === aKey.length) {
          keyIndex = 0;
        }
      } else {
        result += aMessage[msgIndex];
      }
      msgIndex++;
    }

    return this.direct
      ? result
      : result
          .split('')
          .reverse()
          .join('');
  }
}

module.exports = VigenereCipheringMachine;
