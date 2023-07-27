
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};


const f = createHelloWorld();
f(); // "Hello World"

console.log(f());
console.log(f(9, 2,'' ,1,2, null));