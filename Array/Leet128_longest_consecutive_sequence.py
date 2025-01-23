"""
Source LeetCode
128. Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/description/
1st: 2025-01-19

Given an unsorted array of integers nums, return the length of 
the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
"""
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest_seq = 0
        
        for num in num_set:
            if num-1 not in num_set:
                current_num = num
                current_seq = 1
                while current_num+1 in num_set:
                    current_num += 1
                    current_seq += 1
                longest_seq = max(longest_seq, current_seq)
                
        return longest_seq