const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');

const emagiSearch = function(str) {
let result = [];

for (const wordIndex of words) {

        if (wordIndex.includes(str)) {
            result.push(symbols[words.indexOf(wordIndex)]);
    }

}
return result;
}



module.exports = emagiSearch;