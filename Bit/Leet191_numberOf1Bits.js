/*********************************************************************** 
Source LeetCode
191 Number of 1 Bits
https://leetcode.com/problems/number-of-1-bits/description/
1st 2023-01-21

Write a function that takes an unsigned integer and returns the number 
of '1' bits it has (also known as the Hamming weight).

Note:

    Note that in some languages, such as Java, there is no unsigned integer 
    type. In this case, the input will be given as a signed integer type. 
    It should not affect your implementation, as the integer's internal 
    binary representation is the same, whether it is signed or unsigned.
    In Java, the compiler represents the signed integers using 2's 
    complement notation. Therefore, in Example 3, the input represents 
    the signed integer. -3.


 * @param {number} n - a positive integer
 * @return {number}

Constraints
    The input must be a binary string of length 32.
************************************************************************/

// 1st Attempt
// LOGIC: Divide n by 2 and check if remainder is 1
// Time: -  |  Space: O(1)
var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 == 1) count += 1;
    n = Math.floor(n / 2);
  }
  return count;
};
