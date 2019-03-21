const first = () => {
    const greet = 'Hi';
    const second = () => {
        // alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures a function ran. The function executed. It will never execute again.AbortController
// But it's going to remember there are references to those variables.
// so the child scope always has access to the parent scope.

//Currying
const multiply = (a, b) => {
    a * b;
}

const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3));
console.log(curriedMultiply(3)(4));
console.log(curriedMultiply(3, 4));

const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(3));

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(
    compose(sum, sum)(5)
);