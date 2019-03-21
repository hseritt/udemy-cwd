#!/usr/bin/env node

// Reference type
/*
    Objects are reference types.
    Other types are primitive types. Such that JS
    defines how they will be defined when created.
*/

console.log([] === []);
console.log([1] === [1]);

const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };
console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object1.value, object2.value);
console.log(object1.value === object2.value);
console.log(object3.value);

// context vs scope

function b() {
    let a = 4;
    console.log(this);
}

// console.log(a);

console.log(this);
b();

const object4 = {
    a: function() {
        console.log(this);
    }
};

object4.a();

// instantiation

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log(this); // Must be *after* super();
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}!`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduce();
wizard1.play();

wizard2.introduce();
wizard2.play();
