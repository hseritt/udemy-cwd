#!/usr/bin/env node

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy",
];

for (var i=0; i < todos.length; i++) {
    console.log(todos[i]);
}

todos.forEach(function(todo, i) {
    console.log(todo, i);
});

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);

