#!/usr/bin/env node

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

// console.log(array);

// const newArray = [];

// array.forEach(user => {
//     let { username } = user;
//     newArray.push(username + "!");
// });

// console.log(newArray);


// const mapArray = array.map(user => user.username + "?");
// console.log(mapArray);

// const filterArray = array.filter(user => user.team === "red");
// console.log(filterArray);


// const scoreTotal = array.reduce((acc, user) => {
//     return acc + user.score;
// }, 0);
// console.log(scoreTotal);

// const arrayNum = [1, 2, 4, 5, 8, 9];
// // const newArray = arrayNum.map((num, i) => {
// //     console.log(num, i);
// //     alert(num);
// //     return num * 2;
// // })

// const newArray = arrayNum.map(num => num * 2);
// console.log(newArray);


const newArray = array.map(user => {
    user.items = user.map(item => {
        return item + "!";
    });
    return user;
});

console.log(newArray);
