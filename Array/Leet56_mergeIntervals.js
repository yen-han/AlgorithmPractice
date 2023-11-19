/*********************************************************************** 
Source LeetCode
56. Merge Intervals
https://leetcode.com/problems/merge-intervals/description/
1st 2023-11-19

Given an array of intervals where intervals[i] = [starti, endi], merge 
all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104

 * @param {number[][]} intervals
 * @return {number[][]}
************************************************************************/

// 1st Attempt
// LOGIC: Sort the given `intervals` array with the first element.
// Compare the range to verify overlapping and merge.
// Time: O(nlogn) |  Space: O(n)
var merge = function (intervals) {
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  res.push(intervals[0]);
  let j = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (res[j][1] < intervals[i][0] && res[j][1] < intervals[i][1]) {
      res.push(intervals[i]);
      j++;
    } else {
      res[j][0] = Math.min(intervals[i][0], res[j][0]);
      res[j][1] = Math.max(intervals[i][1], res[j][1]);
    }
  }
  return res;
};
