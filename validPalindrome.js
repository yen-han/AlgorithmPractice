/*********************************************************************** 
Source LeetCode
125 Valid Palindrome
(https://leetcode.com/problems/valid-palindrome/)
1st 2022-04-05

A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads 
the same forward and backward. Alphanumeric characters include letters 
and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

 * @param {string} s
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: convert lower case - remove non-alphabet - find matching until mid-index
// Time: O(n)  |  Memory: n
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let len = s.length;
    for(let i = 0; i < len/2; i++) {
        if(s[i] !== s[len-i-1]) {
            return false;
        }
    }
    return true;
};

// TEST
// Output: true
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// Output: false
console.log(isPalindrome("race a car"));
// Output: true
console.log(isPalindrome(" "));