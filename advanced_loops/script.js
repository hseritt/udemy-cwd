
let basket = ["oranges", "apples", "grapes"];

for (let i=0; i < basket.length; i++) {
    console.log(basket[i]);
}

basket.forEach(each => {
    console.log(each);
});

for (each of basket) {
    console.log(each);
}

let basketDetails = {
    oranges: 5,
    apples: 10,
    grapes: 100,
};

// for .. in
// enumrating
for (each in basket) {
    console.log(each);
    console.log(basket[each]);
}