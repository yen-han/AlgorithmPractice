/*********************************************************************** 
Source LeetCode
67. Add Binary
https://leetcode.com/problems/add-binary/description/
1st 2024-08-08

Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.

 * @param {string} a
 * @param {string} b
 * @return {string}
************************************************************************/

// 1st Attempt
// LOGIC: Convert to bigint and add two binaries and change back to binary
// Time : O(n)  | Space : O(1)
var addBinary = function (a, b) {
  let intA = BigInt("0b" + a);
  let intB = BigInt("0b" + b);

  let combined = intA + intB;
  if (combined == 0) return "0";

  let res = "";
  let remainder;
  while (combined > 0) {
    remainder = combined % 2n;
    res = remainder + res;
    combined = combined / 2n;
  }
  return res;
};
