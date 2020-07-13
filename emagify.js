const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');

const emagify = function(str) {
    results = [];

    for (const strIndex of str) {
        if (words.includes(strIndex)) {
            results.push(symbols[words.indexOf(strIndex)]);
        } else {
            results.push(strIndex);
            }
        }
    return results;
}

module.exports = emagify;