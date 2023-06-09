/*********************************************************************** 
Source LeetCode
11. Container With Most Water
https://leetcode.com/problems/container-with-most-water/description/
1st 2023-06-09 

You are given an integer array height of length n. There are n vertical 
lines drawn such that the two endpoints of the ith line are (i, 0) and 
(i, height[i]).

Find two lines that together with the x-axis form a container, such that 
the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Constraints
    n == height.length
    2 <= n <= 105
    0 <= height[i] <= 104

 * @param {number[]} height
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Find lower heights from each pair and find the max area.
// Time: O(n)  |  Space: O(1)
var maxArea = function (height) {
  let mostWater = 0;
  let lower;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    if (height[start] > height[end]) lower = height[end];
    else lower = height[start];
    if (lower * (end - start) > mostWater) mostWater = lower * (end - start);
    if (height[start] <= height[end]) {
      start++;
    } else end--;
  }
  return mostWater;
};
