/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n
    return function() {
        return n++;
    };
};

 
const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

/*

User: sunil12
-------------------
This is classical example example of closure where inner function still have access to outer function variable although outer function goes out of context after first call.
On line number 12, now counter function holds the inner function only and because of closure can still access the value of "n". In javascript this is one of the way to hide the variable from manipulation from outside world.



User: PrateekSrivastava_
-------------------------------
what is the benefit of returning nested function instead of just an incremented value?
Answer:
This is a good example of closure.

One benefit of returning a nested function instead of just an incremented value is that it allows you to create multiple independent counters, each with its own internal state, without having to create a separate function for each one.

A closure is a function that has access to variables in its outer (enclosing) function's scope chain.
In this code, the inner function that is returned by the "createCounter" function is a closure, and it has access to the "n" variable in the outer "createCounter" function's scope.

Example:

var createCounter = function(n) {
return function() {
return n++;
};
};

const counter1 = createCounter(10);
const counter2 = createCounter(20);

now call counter1 and counter2 function one by one, you will see the difference.

counter1 will print: 10, 11, 12...
counter2 will print: 20, 21, 22...

counter1();
counter2();

*/
