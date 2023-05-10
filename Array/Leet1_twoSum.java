/*********************************************************************** 
Source LeetCode
1. Two Sum
https://leetcode.com/problems/two-sum/description/
1st 2022-03-31 (JavaScript)
2nd 2023-05-10 (Java)

Given an array of integers numbers and an integer target, return indices of 
the two numbers such that they add up to target. 

You may assume that each input would have exactly one solution, and you 
may not use the same element 
twice. You can return the answer in any order.

Constraints:
    2 <= nums.length <= 10^4
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9
    Only one valid answer exists.

************************************************************************/

// 2nd Attempt
// LOGIC: Check if target-nums[i] includes in the remaining array.
// Time: O(n^2)  |  Space: O(1)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i = 0; i < nums.length;i++){
            int index = -1;
            boolean found = false;
            for(int j = 0; !found && j < nums.length; j++){
                if(nums[j] == target-nums[i]) {
                    index = j;
                    found = true;
                }
            }
            if(index != i && index != -1){
                return new int[]{i, index};
            }
        }
        return null;
    }
}
