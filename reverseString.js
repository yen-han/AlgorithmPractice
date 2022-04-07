/*********************************************************************** 
Source LeetCode
344 Reverse String
(https://leetcode.com/problems/reverse-string/)
1st 2022-04-06
2nd 2022-04-07

Write a function that reverses a string. The input string is given as 
an array of characters s.
You must do this by modifying the input array in-place with O(1) extra 
memory.

 * @param {character[]} s
 * @return {character[]} s
************************************************************************/

// 1st Attempt
// LOGIC: Swap the first and the last
// Time: O(n)  |  Memory: O(1)
var reverseString = function(s) {
    let len = s.length
    for(let i = 0; i < (len/2); i++){  
        let temp = s[i];
        s[i] = s[len-i-1];
        s[len-i-1] = temp;
    }
    return s;
};

// 2nd Attempt
// LOGIC: Reverse using reverse()
// Time: O(n)  |  Memory: O(1)
var reverseString = function(s) {
    return s.reverse();
};

// TEST
// Output: ["o","l","l","e","h"]
console.log(reverseString(["h","e","l","l","o"]));
// Output: ["h","a","n","n","a","H"]
console.log(reverseString(["H","a","n","n","a","h"]));
