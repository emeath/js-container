// 2635. Apply Transform Over Each Element in Array

/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    resultArr = [];
    for(let i = 0; i < arr.length; i++) {
        const ans = fn(arr[i], i);
        resultArr.push(ans);
    }
    return resultArr;
};

// 1 
function plusOne(n) { return n+1 }
let array1 = [1,2,3]
let res1 = map(array1, plusOne)
console.log(res1) // [2, 3, 4]

//2 
function plusI(n, i) { return n+i; }
let array2 = [1,2,3]
let res2 = map(array2, plusI)
console.log(res2) // [1, 3, 5]

//3
function constant() { return 42; }
let array3 = [10,20,30]
let res3 = map(array3, constant)
console.log(res3) // [42, 42, 42]