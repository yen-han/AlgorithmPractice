/*********************************************************************** 
Source LeetCode
274. H-Index
https://leetcode.com/problems/h-index/description/
1st 2024-01-13
2nd 2024-01-13

Given an array of integers citations where citations[i] is the number of 
citations a researcher received for their ith paper, return the 
researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is 
defined as the maximum value of h such that the given researcher has 
published at least h papers that have each been cited at least h times.

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and 
each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and 
the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:

Input: citations = [1,3,1]
Output: 1

Constraints:
    n == citations.length
    1 <= n <= 5000
    0 <= citations[i] <= 1000

 * @param {number[]} citations
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: H-Index means the largest number h that h papers have at least h citations.
// Sort the given `citations` array in an ascending order.
// Starting from the maximum number of citations.
// Access hth index from the end and check the value is bigger than the number of citations.
// Edge case for array with 1 element.
// Time: O(nlogn) |  Space: O(1)
var hIndex = function (citations) {
  if (citations.length == 1) return citations[0] > 0 ? 1 : 0;
  citations.sort((a, b) => a - b);
  let total = citations.length;
  for (let h = citations[total - 1]; h >= 0; h--) {
    if (citations[total - h] >= h) return h;
  }
  return 0;
};
// 2nd Attempt
// LOGIC: Brute force, H-Index means the largest number h that h papers have at least h citations.
// Sort the given `citations` array in an ascending order.
// Starting from the maximum number of citations.
// Count the papers that is more than h citations and
// see if the number of paper is more than h citations in total
// if not subtract citation number and lop through the logic
// Edge case for array with 1 element.
// Time: O(n^2) |  Space: O(1)
var hIndex = function (citations) {
  if (citations.length == 1) return citations[0] > 0 ? 1 : 0;
  let max = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > max) max = citations[i];
  }

  let count = 0;
  let h = citations[citations.length - 1];
  for (let i = 0; i < citations.length && h >= 0; i++) {
    if (citations[i] >= h) count++;
    if (i == citations.length - 1 && count >= h) {
      return h;
    } else if (i == citations.length - 1) {
      i = -1;
      h--;
      count = 0;
    }
  }
  return 0;
};
