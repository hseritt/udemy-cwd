#!/usr/bin/env node

var myArray = ["Banana", "Apples", "Oranges", "Blueberries"];

myArray.shift();

console.log(myArray);

myArray.sort();

console.log(myArray);

myArray.push("Kiwi");

console.log(myArray);

myArray.shift();

console.log(myArray);

myArray.reverse();

console.log(myArray);

var myArray2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(myArray2[1][1][0]);
