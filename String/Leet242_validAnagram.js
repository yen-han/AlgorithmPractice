/*********************************************************************** 
Source LeetCode
125 Valid Anagram
(https://leetcode.com/problems/valid-anagram/)
1st 2022-04-05
2nd 2022-04-07

Given two strings s and t, return true if t is an anagram of s, and false 
otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, typically using all the original letters exactly once.

 * @param {string} s
 * @param {string} t
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: sort alphabetical order - find exact match
// Time: O(n)  |  Memory: n
// var isAnagram = function(s, t) {
//     s = Array.from(s).sort();
//     t = Array.from(t).sort();
//     for(let i = 0; i < s.length; i++){
//         if(s.length !== t.length || s[i] !== t[i]) {
//             return false;
//         }
//     }
//     return true;
// };

// 2nd Attempt
// LOGIC: Create object with alphabet of the first string & subtract occurrence of alphabet from the second string
// Time: O(n)  |  Memory: O(1)  
var isAnagram = function(s, t) {
    if(s.length === t.length){
        let object={};
        for(i = 0; i < s.length; i++){
            !object[s[i]]?  object[s[i]]=1:  object[s[i]]++;
        }
        for(i = 0; i < t.length; i++){
            if(!object[t[i]]){
                return false;
            } else {
                object[t[i]]--;
            }
        }
        return true;
    }
    return false;
};

// TEST
// Output: true
 console.log(isAnagram("anagram", "nagaram"));
 // Output: false
 console.log(isAnagram("rat", "car"));
 // Output: false
 console.log(isAnagram("ab", "ac"));
