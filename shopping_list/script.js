var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("deleteBtn");
var liList = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete"));

    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(delBtn);

    delBtn.addEventListener("click", function() {
        this.parentElement.remove();
    });

    li.addEventListener("click", function() {
        this.classList.toggle("done");
    });

    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function addToggleEventsForDelButtons() {
    var i;
    for (i=0; i < liList.length; i++) {
        liList[i].addEventListener("click", function() {
            this.classList.toggle("done");
        });
    }
}

function addRemoveEventsForDelButtons() {
    var i;
    for (i=0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", function() {
            this.parentElement.remove();
        });
    }
}

button.addEventListener( "click", addListAfterClick );
input.addEventListener( "keypress", addListAfterKeypress );
addToggleEventsForDelButtons();
addRemoveEventsForDelButtons();
