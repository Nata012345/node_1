const { version } = require('./package.json');
console.log(`Hi, version is ${version}`);

const calcPolishBackNotation = require('./polishBackNotation');
console.log(calcPolishBackNotation("3 5 + 8 * 2 /"));

