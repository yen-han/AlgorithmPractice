'''
Source LeetCode
2605. Form Smallest Number From Two Digit Arrays
https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/description/
1st 2025-12-04

Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array. 

Example 1:
Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15

Example 2:
Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
Output: 3

Constraints
    1 <= nums1.length, nums2.length <= 9
    1 <= nums1[i], nums2[i] <= 9
    All digits in each array are unique.
'''

# 1st Attempt
# LOGIC: Find the common minimum digit between the two arrays. If there is no common digit, combine the smallest digits from both arrays in ascending order.
# Time: O(n)  | Space: O(1)
class Solution:
    def minNumber(self, nums1: List[int], nums2: List[int]) -> int:
        common_min = -1
        common_elements = list(set(nums1) & set(nums2))
        if(len(common_elements)>0):
            common_min = min(common_elements)

        min_arr1 = min(nums1)
        min_arr2 = min(nums2)
        combined_12 = str(min_arr1)+str(min_arr2)
        combined_21 = str(min_arr2)+str(min_arr1)
        combined= int(combined_12)
        if int(combined_12) > int(combined_21):
            combined= int(combined_21)

        if common_min > 0 and common_min < combined:
            return common_min
        return combined