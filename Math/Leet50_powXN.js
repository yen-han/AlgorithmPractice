/*********************************************************************** 
Source LeetCode
50. Pow(x, n)
https://leetcode.com/problems/powx-n/description/
1st 2024-08-08

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Constraints:
    -100.0 < x < 100.0
    -231 <= n <= 231-1
    n is an integer.
    Either x is not zero or n > 0.
    -104 <= xn <= 104

 * @param {number} x
 * @param {number} n
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Using recursive function, calculate power by reducing n by half each time.
// Time : O(logN)  | Space : O(logN)
var myPow = function (x, n) {
  if (n < 0) return 1 / myPow(x, -n);

  if (x === 1 || n === 0) return 1;

  if (n === 1) return x;

  var res = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return res * res;
  } else {
    return res * res * x;
  }
};
