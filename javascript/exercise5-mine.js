#!/usr/bin/env nodejs

function checkDriverAge() {
    return Number(prompt("What is your age?"));
}

var checkDriverAge2 = function() {
    return Number(prompt("What is your age?"));
};

var age = checkDriverAge2();

if (age < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
}

else if (age > 18) {
    alert("Powering On. Enjoy the ride!");
}

else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
