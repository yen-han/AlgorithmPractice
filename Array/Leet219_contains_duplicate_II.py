"""
Source LeetCode
219. Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii/description/
1st: 2025-01-12

Given an integer array nums and an integer k, return true if there are 
two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    0 <= k <= 105
"""

# 1st Attempt
# LOGIC: Use hash map to store the index of the element. If element already exists, check the difference
# Time : O(n^2)   | Space: O(n)
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hash_map = {}
        for i in range(len(nums)):
            if nums[i] in hash_map:
                hash_map[nums[i]].append(i)
            else:
                hash_map[nums[i]] = [i]

        for hash_m in hash_map.values():
            if len(hash_m)>1:
                for i in range(len(hash_m)):
                    for j in range(i+1, len(hash_m)):
                        if abs(hash_m[i]-hash_m[j]) <= k: 
                            return True
        return False