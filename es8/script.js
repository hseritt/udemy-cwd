
console.log("Elephant".padStart(15));
console.log("Elephant".padEnd(15));
console.log("Elephant".padStart(15).padEnd(15));

// Trailing commas:

function a (b, c, d, e,) {
    console.log(b);
}

a(2, 4, 6, 8,);


const obj = {
    name1: "Harlin",
    name2: "Bridget",
    name3: "Jacob",
};

Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(val => {
    console.log(val);
});

Object.entries(obj).forEach(entry => {
    console.log(entry);
});

let newArray = [];

newArray = Object.entries(obj).map( entry => {
    return entry[1] + entry[0].replace("name", "");
});

console.log(newArray);
