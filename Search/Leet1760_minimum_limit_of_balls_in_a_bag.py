"""
Source LeetCode
1760. Minimum Limit of Balls in a Bag
https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/
1st 2025-11-09

You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations.

You can perform the following operation at most maxOperations times:

    Take any bag of balls and divide it into two new bags with a positive number of balls.
        For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls.

Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations.

Return the minimum possible penalty after performing the operations.

Example 1:
Input: nums = [9], maxOperations = 2
Output: 3

Example 2:
Input: nums = [2,4,8,2], maxOperations = 4
Output: 2

Constraints:
    1 <= nums.length <= 105
    1 <= maxOperations, nums[i] <= 109
"""

# 1st Attempt
# LOGIC: Using binary search to find the minimum possible penalty
# Time : O(logn)  |  Space: O(1)
class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        low, high = 1, max(nums)
        while low < high:
            mid = (low + high) // 2
            operations = 0
            for n in nums:
                operations += (n - 1) // mid

            if operations <= maxOperations:
                high = mid
            else:
                low = mid + 1
        return high