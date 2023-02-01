/*********************************************************************** 
Source LeetCode
350 Intersection of Two Arrays II
https://leetcode.com/problems/intersection-of-two-arrays-ii/
1st 2023-01-30

Given two integer arrays nums1 and nums2, return an array of their 
intersection. Each element in the result must appear as many times 
as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]} 

Constraints
    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000
************************************************************************/

// 1st Attempt
// LOGIC: Brute force using Array List
// Time: O(m * n)  |  Space: O(max(m, n)))
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        ArrayList<Integer> arr = new ArrayList<Integer>();

        for(int i = 0; i < nums1.length; i++){
            boolean once = false;
            for(int j = 0; !once && j < nums2.length; j++){
                if(nums1[i] == nums2[j]) {
                    nums2[j] = -1;
                    arr.add(nums1[i]);
                    once = true;
                }
            }
        }
        // Convert ArrayList to Array
        int[] newArr = new int[arr.size()];
        int k = 0;
        for (int i = 0; i < arr.size(); i++){
            newArr[k]=(arr.get(i));   
            k++;
        }
        return newArr;
    }
}