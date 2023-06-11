/*********************************************************************** 
Source LeetCode
412 Fizz Buzz
(https://leetcode.com/problems/fizz-buzz/)
1st 2022-03-30
2nd 2022-11-26
3rd 2023-06-11

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
************************************************************************/

/***********************************************************************
 * @Notes
 * switch-case statement with mod() is faster than if-else.
 **********************************************************************/

// 3rd Attempt
// LOGIC: Using switch-case, Go through every integer, modulus 3, 5, or 15
// Time O(n) | Space O(n)
var fizzBuzz = function (n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 == 0:
        res.push("FizzBuzz");
        break;
      case i % 3 == 0:
        res.push("Fizz");
        break;
      case i % 5 == 0:
        res.push("Buzz");
        break;
      default:
        res.push(`${i}`);
        break;
    }
  }
  return res;
};

// 2nd Attempt
// LOGIC: Go through every integer, modulus 3, 5, or 15
// Time O(n) | Space O(n)
let fizzBuzz = function (n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 15 === 0) {
      answer[i] = "FizzBuzz";
    } else if ((i + 1) % 3 === 0) {
      answer[i] = "Fizz";
    } else if ((i + 1) % 5 === 0) {
      answer[i] = "Buzz";
    } else {
      answer[i] = `${i + 1}`;
    }
  }
  return answer;
};

// 1st Attempt
// LOGIC: Go through every integer, modulus 3, 5, or 3 and 5
// Time O(n) | Space O(n)
// let fizzBuzz = function(n) {
//     let answer = [];
//     for(let i = 0; i < n; i++){
//         if((i+1) % 3 === 0 && (i+1) % 5 === 0){
//             answer[i] = "FizzBuzz";
//         }
//         else if((i+1) % 3 === 0){
//             answer[i] = "Fizz";
//         }
//         else if((i+1) % 5 === 0){
//             answer[i] = "Buzz";
//         } else {
//             answer[i] = `${i+1}`;
//         }
//     }
//     return answer;
// };

// TEST
// Output: ["1","2","Fizz"]
console.log(fizzBuzz(3));
//Output: ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(5));
//["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz(15));
