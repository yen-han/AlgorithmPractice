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
// LOGIC: Using bit manipulation
// Time: -  |  Space: O(1)
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int count = 0; 
        while(n!=0){
            count += (n & 1);
            n >>>= 1;
        }
        return count;
    }
}