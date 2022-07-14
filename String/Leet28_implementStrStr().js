/*********************************************************************** 
Source LeetCode
28 Implement strStr()
(https://leetcode.com/problems/implement-strstr/)
1st 2022-07-11

Implement strStr().

Given two strings needle and haystack, return the index of the first 
occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great 
question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty 
string. This is consistent to C's strstr() and Java's indexOf().

Constraints:
    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.

 * @param {string} haystack
 * @param {string} needle
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: If the match of first index in needle is found check the rest
// of needle. If not, iterate from the next index
// Time O(m * n) | Space O(1)
var strStr = function(haystack, needle) {
    let matched;
    for(let i = 0;i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            matched = true;
            for(let j = 0; matched && j < needle.length; j++){
                if(haystack[i+j] !== needle[j]) matched = false;
            }  
        }
        if(matched) return i;
    }
    return -1;
};