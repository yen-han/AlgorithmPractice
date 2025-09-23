"""
Source LeetCode
1233. Remove Sub-Folders from the Filesystem
https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/
1st: 2025-09-22

Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order.

If a folder[i] is located within another folder[j], it is called a sub-folder of it. A sub-folder of folder[j] must start with folder[j], 
followed by a "/". For example, "/a/b" is a sub-folder of "/a", but "/b" is not a sub-folder of "/a/b/c".

The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.

    For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.

Example 1:
Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
Output: ["/a","/c/d","/c/f"]

Example 2:
Input: folder = ["/a","/a/b/c","/a/b/d"]
Output: ["/a"]

Constraints:
    1 <= folder.length <= 4 * 104
    2 <= folder[i].length <= 100
    folder[i] contains only lowercase letters and '/'.
    folder[i] always starts with the character '/'.
    Each folder name is unique.
"""

# 1st Attempt
# LOGIC : check the path with previous one for parent folder
# Time : O(n)  | Space : O(n)
class Solution:
    def removeSubfolders(self, folder: List[str]) -> List[str]:     
        folder.sort()
        res = [folder[0]]
        for i in range(1, len(folder)):
            last_item = res[-1]
            if not folder[i].startswith(last_item + '/'):
                res.append(folder[i])
        return res
