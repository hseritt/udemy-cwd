#!/usr/bin/env node

function moveCommand(direction) {
    var whatHappens;
    console.log(direction);
    switch(direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;

        case "back":
            whatHappens = "you arrived home";
            break;

        case "right":
            whatHappens = "you found a river";
            break;

        case "left":
            whatHappens = "you run into a troll";
            break;

        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand("forward"));
console.log(moveCommand("back"));
console.log(moveCommand("left"));
console.log(moveCommand("right"));
console.log(moveCommand("huh?"));
