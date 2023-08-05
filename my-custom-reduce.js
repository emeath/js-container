/*
2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for(let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }
    return val;    
};

//1
let array = [1,2,3,4]
function sum1(accum, curr) { return accum + curr; }
let initialVal = 0
console.log(reduce(array, sum1, initialVal))

//2
array = [1,2,3,4]
function sum2(accum, curr) { return accum + curr * curr; }
initialVal = 100
console.log(reduce(array, sum2, initialVal))

//3
array = []
function sum3(accum, curr) { return 0; }
initialVal = 25
console.log(reduce(array, sum3, initialVal))