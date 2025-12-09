"""
Source LeetCode
1390. Four Divisors
https://leetcode.com/problems/four-divisors/description/
1st 2025-12-08

Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. 
If there is no such integer in the array, return 0.

Example 1:
Input: nums = [21,4,7]
Output: 32

Example 2:
Input: nums = [21,21]
Output: 64

Example 3:
Input: nums = [1,2,3,4,5]
Output: 0

Constraints:
    1 <= nums.length <= 104
    1 <= nums[i] <= 105
"""

# 1st Attempt
# LOGIC: Brute Force - Find all divisors for each number and check if count is 4
# Time : O(sqrt(N)) | Space: O(1)
class Solution:
    def findDivisor(self, num) -> List[int]:
        res = []
        i = 1
        while i*i <= num:
            if num % i ==0:
                res.append(i)
                if i != num // i:
                    res.append(num // i)
            if len(res) > 4:
                return [0,0,0,0,0]
            i += 1
        return res

    def sumFourDivisors(self, nums: List[int]) -> int:
        sum_of_divisors = 0
        for item in nums:
            return_arr = self.findDivisor(item) 
            if(len(return_arr) == 4):
                sum_of_divisors += sum(return_arr)
        return sum_of_divisors

