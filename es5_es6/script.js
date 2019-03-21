
// const player = "bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
// }

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
};


// "Destructuring"
// Instead of:

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// Do this ...

const { player, experience } = obj;

console.log(player, experience);

let { wizardLevel } = obj;
console.log(wizardLevel);


const name = 'john snow';

// Dynamic properties:
const obj2 = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
};
console.log(obj2);

const a = 'a'
const b = 'b';
const c = 'c';

const obj3 = {
    a, b, c
};

console.log(obj3);


// Template strings

const greeting = "Hello " + name + " you seem to be doing " + "ok" + "!";
console.log(greeting);

const name2 = "Sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name2} you seem to be ${age-10}. What is your ${pet}'s name?`;
console.log(greetingBest);


// default arguments

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What is your ${pet}'s name?`;
}

console.log(greet());
console.log(greet("Harlin", 49, "dog"));

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym1);

console.log(sym2 === sym3);



// arrow functions

function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

const add2 = () => a + b;
console.log(add(5, 10));
