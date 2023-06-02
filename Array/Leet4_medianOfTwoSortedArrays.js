/*********************************************************************** 
Source LeetCode
4. Median of Two Sorted Arrays
https://leetcode.com/problems/median-of-two-sorted-arrays/description/
Date 2023-06-02

Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Constraints:
    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Calculate the median number of the two sorted arrays
// make sorted array until the median number, then return the calculated median
// Time : O(log(m+n))  | Space : O(m+n)
var findMedianSortedArrays = function (nums1, nums2) {
  let median = Math.floor((nums1.length + nums2.length) / 2) + 1;
  let merged = [];
  let i = 0,
    j = 0;

  while (merged.length < median) {
    if (nums1[i] != undefined && nums2[j] != undefined) {
      if (nums1[i] <= nums2[j]) {
        merged.push(nums1[i]);
        i += 1;
      } else {
        merged.push(nums2[j]);
        j += 1;
      }
    } else if (nums1[i] != undefined) {
      merged.push(nums1[i]);
      i += 1;
    } else {
      merged.push(nums2[j]);
      j += 1;
    }
  }
  return (nums1.length + nums2.length) % 2
    ? merged[merged.length - 1]
    : (merged[merged.length - 1] + merged[merged.length - 2]) / 2;
};
