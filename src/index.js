"use strict";
exports.__esModule = true;
var consoleStart = function () {
    console.log('\x1b[33m', 'Running test cases...');
    console.log('');
};
var consoleEnd = function () {
    console.log('\x1b[33m', 'End of test cases...');
    console.log('\x1b[37m', '');
    console.log('');
};
var consoleBuffer = function () {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};
var formatOutput = function (fxn, answer) {
    var output = fxn;
    console.log('\x1b[36m%s\x1b[0m', 'Testing function...');
    if (output === answer) {
        console.log('\x1b[32m', 'CORRECT :: ' + output + ' === ' + answer);
    }
    else {
        console.log('\x1b[31m', 'WRONG -> Output was ' + output + ', expected ' + answer);
    }
    console.log();
};
function compute(array, n) {
    if (n === 0) {
        return array[n];
    }
    else if (array[n] < compute(array, n - 1)) {
        return array[n];
    }
    else {
        return compute(array, n - 1);
    }
}
consoleStart();
console.log(compute([1, 2, 3], 5));
console.log(compute([1, 2, 3, 4, 5, 6], 3));
console.log(compute([6, 3, 2, 0, 13], 3));
console.log(compute([36, 110, 42, 2], 1));
consoleEnd();
consoleBuffer();
