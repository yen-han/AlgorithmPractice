"""
Source LeetCode
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/description/
1st 2024-08-27
2nd 2024-08-30

You are given an m x n integer matrix matrix with the following two properties:
    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104
"""

# 1st Attempt
# LOGIC: check the first and last index and find the range.
# Time : O(max(m,n)) | Space : O(1)
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:        
        # edge case: out of boundary
        if(target < matrix[0][0] or target > matrix[len(matrix)-1][len(matrix[0])-1]):
            return False
        # pick the row in range
        row = -1
        for i in range(0, len(matrix)):
            if(matrix[i][0] <= target & target<= matrix[i][len(matrix[i])-1]):
                row = i
                break
        # check for exact match
        for j in range (0, len(matrix[row])):
            if(matrix[row][j] == target):
                return True
        return False

# 2nd Attempt
# LOGIC: using 2d matrix, make matrix one line and do binary search
# Time: O(log(m * n)) | Space : O(m+n)
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:   
        def binarySearch(arr, target):
            start = 0
            end = len(arr)-1
            while start <= end:
                mid = (start + end) // 2
                if(arr[mid] == target):
                    return True
                elif(arr[mid] < target):
                    start = mid + 1
                elif(arr[mid] > target):
                    end = mid - 1
            return False

        flattened_matrix = []
        for row in range(len(matrix)):
            for col in range(len(matrix[row])):
                flattened_matrix.append(matrix[row][col])
        return binarySearch(flattened_matrix, target)
