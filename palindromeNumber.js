/*********************************************************************** 
Source LeetCode
9 Palindrome Number
(https://leetcode.com/problems/palindrome-number/)
Date 2022-04-01

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.

 * @param {number} x
 * @return {boolean}
************************************************************************/

// Logic) Convert number to string, find mid-index, compare until mid-index

let isPalindrome = function(x) {
    let str = x.toString();
    let strLen = str.length;
    let palindrome = true;
    for(let i = 0; palindrome && i < (strLen/2) ; i++){
        (str[i] === str[strLen-(i+1)]) ? palindrome = true: palindrome = false;
    }
    return palindrome;
};

// TEST
// Output: true
console.log(isPalindrome(121));
// Output: false
console.log(isPalindrome(-121));
// Output: false
console.log(isPalindrome(10));
// Output: true
console.log(isPalindrome(13431));