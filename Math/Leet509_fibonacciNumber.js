/*********************************************************************** 
Source LeetCode
509 Fibonacci Number
(https://leetcode.com/problems/fibonacci-number/)
1st 2022-04-25
2nd 2023-06-11

The Fibonacci numbers, commonly denoted F(n) form a sequence, called 
the Fibonacci sequence, such that each number is the sum of the two 
preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).

 * @param {number} n
 * @return {number}
************************************************************************/

// 2nd Attempt
// LOGIC: Make an array of fibonacci numbers, then return the nth element
// Time: O(n) | Space: O(n)
var fib = function (n) {
  let fibonacci = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) fibonacci[i] = i;
    else fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci[n];
};

// 1st Attempt
// LOGIC: Recursion
// Time: O(2^n) | Space: O(n)
var fib = function (n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

// TEST
console.log(fib(4));
