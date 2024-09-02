/*********************************************************************** 
Source LeetCode
190. Reverse Bits
https://leetcode.com/problems/reverse-bits/description/
1st 2024-09-02

Reverse bits of a given 32 bits unsigned integer.
Note:

    Note that in some languages, such as Java, there is no unsigned 
    integer type. In this case, both input and output will be given as 
    a signed integer type. They should not affect your implementation, 
    as the integer's internal binary representation is the same, whether 
    it is signed or unsigned.
    In Java, the compiler represents the signed integers using 2's 
    complement notation. Therefore, in Example 2 above, the input 
    represents the signed integer -3 and the output represents the 
    signed integer -1073741825.

Example 1:
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)

Constraints:
    The input must be a binary string of length 32

 * @param {number} n - a positive integer
 * @return {number} - a positive integer
************************************************************************/

// 1st Attempt
// LOGIC: move one bit forward and assign the last bits of given number in reverse way
// Time: O(n)  |  Space: O(1)
var reverseBits = function (n) {
  let ans = 0;
  for (let i = 1; i <= 32; i++) {
    ans = ans << 1;
    ans |= n & 1;
    n >>= 1;
  }
  return ans >>> 0;
};
