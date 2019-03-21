var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorBtn = document.getElementById("randomColorBtn");

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
    // color1.setGradient(color1.value);
    // color2.setGradient(color2.value);
}

function getRandNum() {
    return Math.floor(Math.random() * 256);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

randomColorBtn.addEventListener("click", function() {
    var randNum1 = getRandNum();
    var randNum2 = getRandNum();
    var randNum3 = getRandNum();
    var randNum4 = getRandNum();
    var randNum5 = getRandNum();
    var randNum6 = getRandNum();

    body.style.background = "linear-gradient(to right, rgb("
        + randNum1 + ", "
        + randNum2 + ", "
        + randNum3 + "), rgb("
        + randNum4 + ", "
        + randNum5 + ", "
        + randNum6 + ")";

    css.textContent = body.style.background + ";";
    color1.value = rgbToHex(randNum1, randNum2, randNum3);
    color2.value = rgbToHex(randNum4, randNum5, randNum6);
});