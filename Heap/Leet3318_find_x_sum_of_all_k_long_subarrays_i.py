"""
Source LeetCode
3318. Find X-Sum of All K-Long Subarrays I
https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/description/
1st 2025-09-11

You are given an array nums of n integers and two integers k and x.

The x-sum of an array is calculated by the following procedure:

    Count the occurrences of all elements in the array.
    Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
    Calculate the sum of the resulting array.

Note that if an array has less than x distinct elements, its x-sum is the sum of the array.

Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the
nums[i..i + k - 1].

Example 1:
Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2
Output: [6,10,12]

Example 2:
Input: nums = [3,8,7,8,7,5], k = 2, x = 2
Output: [11,15,15,15,12]

Constraints:
    1 <= n == nums.length <= 50
    1 <= nums[i] <= 50
    1 <= x <= k <= nums.length
"""

# 1st Attempt
# LOGIC: Using max heap, keep track of top x frequent elements and sum for top x elements
# Time: O(n^2)  | Space: O(n)
class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        result = []
        for i in range(len(nums)-k+1):
            subarray = nums[i:i+k]

            pq = []
            counts = Counter(subarray)
            for count in counts:
                heapq.heappush(pq, (-counts[count], -count))

            answer = 0
            num_element = x
            while num_element > 0 and pq:
                occur, num = heapq.heappop(pq)
                answer += -occur * -num
                num_element -= 1
            result.append(answer)

        return result
