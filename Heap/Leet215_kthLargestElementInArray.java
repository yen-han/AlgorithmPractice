/*********************************************************************** 
Source LeetCode
215. Kth Largest Element in an Array
https://leetcode.com/problems/kth-largest-element-in-an-array/description/
1st 2024-08-13

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints
    1 <= k <= nums.length <= 105
    -104 <= nums[i] <= 104
************************************************************************/

// 1st Attempt
// LOGIC: Using bit manipulation
// Time: O(n) |  Space: O(n)
class Solution {
    public int findKthLargest(int[] nums, int k) {
        // min heap
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();
        for (int num : nums) {
            minHeap.add(num);
            
            if (minHeap.size() > k) {
                minHeap.poll(); 
            }
        }
        // root of the heap
        return minHeap.peek();
    }
}