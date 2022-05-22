/*********************************************************************** 
Source LeetCode
1221 Split a String in Balanced Strings
(https://leetcode.com/problems/split-a-string-in-balanced-strings/)
1st 2022-05-19

Balanced strings are those that have an equal quantity of 'L' and 'R' 
characters.

Given a balanced string s, split it in the maximum amount of balanced 
strings.

Return the maximum amount of split balanced strings.

 * @param {string} s
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: count up for R, count down for L 
// add when count==0, there is a balanced string
var balancedStringSplit = function(s) {
    let count = 0;
    let balanced = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'R') count++;
        else count--;
        //count === 0 means there is a balanced string
        if(!count) balanced++;
    }
    return balanced;
};