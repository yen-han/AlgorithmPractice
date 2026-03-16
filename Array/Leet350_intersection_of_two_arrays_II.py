'''
Source LeetCode
350. Intersection of Two Arrays II
https://leetcode.com/problems/wiggle-sort-ii/description/
1st 2026-03-12

Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and 
you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Constraints
    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000
'''

# 1st Attempt
# LOGIC: Use a hash map to count the occurrences of each element in the larger array. Then, iterate through the smaller array and check if the element exists in the hash map with a count greater than zero. If it does, add it to the result and decrement the count in the hash map.
# Time: O(n)  | Space: O(n)
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        if len(nums1) < len(nums2):
            nums1, nums2 = nums2, nums1
        my_map = {}
        for key in nums1:
            if key in my_map:
                my_map[key] += 1
            else: 
                my_map[key] = 1
        
        result =[]
        for num in nums2:
            if num in my_map and my_map[num] >0:
                result.append(num)
                my_map[num] -= 1

        return result