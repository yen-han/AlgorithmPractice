/*********************************************************************** 
Source LeetCode
69 Sqrt(x)
(https://leetcode.com/problems/sqrtx/)
1st 2022-07-20

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, 
and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or 
operator, such as pow(x, 0.5) or x ** 0.5.

Constraints:
    0 <= x <= 231 - 1

 * @param {number} x
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Check which square number is the closest
// Time O(n) | Space O(1)
var mySqrt = function(x) {
    let result;
    if(x === 0) return 0;
    for(let i = 0;i*i <= x; i++){
        result = i;
    }
    return result;
};