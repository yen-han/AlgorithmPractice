/*********************************************************************** 
Source LeetCode
202 Happy Number
(https://leetcode.com/problems/happy-number/)
1st 2022-06-06

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum 
    of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), 
    or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
Constraints:
    1 <= n <= 231 - 1

 * @param {number} n
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Using set to check for cycle
var isHappy = function(n) {
    if (n == 1) return true;
    let set = new Set();
    let sum = 0;
    while (n != 1 && !set.has(sum)) {
        set.add(sum);
        sum = 0;
        n.toString().split('').forEach(x => sum += x ** 2)
        n = sum;
    }
    return sum === 1;
};