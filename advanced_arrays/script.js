
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log(newArray);
// undefined ^

console.log(double);

// map, filter, reduce

// Notice that num below doesn't have brackets.
// Doesn't need them if it's only one parameter.
const mapArray = array.map(num => num * 2);

// otherwise with a regular function definition, you
// must return something when using map().

console.log(mapArray);

// filter

const filterArray = array.filter(num => {
    return num > 5;
});

console.log(filterArray);

// reduce

const reduceArray = array.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(reduceArray);
