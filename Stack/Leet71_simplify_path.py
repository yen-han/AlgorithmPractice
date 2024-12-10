"""
Source LeetCode
71. Simplify Path
https://leetcode.com/problems/simplify-path/description/
1st 2024-12-09

You are given an absolute path for a Unix-style file system, which always begins 
with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

The rules of a Unix-style file system are as follows:

    A single period '.' represents the current directory.
    A double period '..' represents the previous/parent directory.
    Multiple consecutive slashes such as '//' and '///' are treated as a single 
    slash '/'.
    Any sequence of periods that does not match the rules above should be treated 
    as a valid directory or file name. For example, '...' and '....' are valid directory or file names.

The simplified canonical path should follow these rules:

    The path must start with a single slash '/'.
    Directories within the path must be separated by exactly one slash '/'.
    The path must not end with a slash '/', unless it is the root directory.
    The path must not have any single or double periods ('.' and '..') used to denote 
    current or parent directories.

Return the simplified canonical path.

Example 1:
Input: path = "/home/"
Output: "/home"

Example 2:
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"

Constraints:
    1 <= path.length <= 3000
    path consists of English letters, digits, period '.', slash '/' or '_'.
    path is a valid absolute Unix path.
"""

# 1st Attempt
# LOGIC: using stack. split by / and add valid path to the stack
# Time : O(n)  | Space: O(n)
class Solution:
    def simplifyPath(self, path: str) -> str:
        parts = path.split("/")
        stack = []
        for i in range (len(parts)):
            if parts[i] == '' or parts[i]=='.':
                continue
            elif parts[i]=='..':
                if stack:
                    stack.pop()
            else:
                stack.append(parts[i])

        return '/' + '/'.join(stack)
