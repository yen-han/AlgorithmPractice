"""
Source LeetCode
2358. Maximum Number of Groups Entering a Competition
https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/description/
1st 2025-10-20

You are given a positive integer array grades which represents the grades of students in a university. 
You would like to enter all these students into a competition in ordered non-empty groups, such that the 
ordering meets the following conditions:

    The sum of the grades of students in the ith group is less than the sum of the grades of students 
    in the (i + 1)th group, for all groups (except the last).
    The total number of students in the ith group is less than the total number of students in the (i + 1)th group,
    for all groups (except the last).

Return the maximum number of groups that can be formed.

Return true if n is a happy number, and false if not.
Constraints:
    1 <= grades.length <= 105
    1 <= grades[i] <= 105

"""

# 1st Attempt
# LOGIC: Using Floyd's Cycle-Finding Algorithm
class Solution:
    def maximumGroups(self, grades: List[int]) -> int:
        if len(grades) < 3:
            return 1

        def groups(grades):
            total = 0
            n = len(grades)
            k = 0
            while total + (k+1) <=n:
                k += 1
                total += k
            return k
        return groups(grades)
        