#!/usr/bin/env node

console.log(1 == '1');
console.log(1 === '1');

if (1) {
    console.log("Testing if 1 ...");
    console.log(5);
}

if (0) {
    console.log("Testing if 0 ...");
    console.log('zero');
}

if (false) {
    console.log("Testing if false ...");
    console.log('false');
}

console.log("Comparing signed zeros ...");
console.log(-0 === +0);
console.log("This time, using Object.is() ...");
console.log(Object.is(-0, +0));

console.log("Comparing NaNs with === ...");
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));