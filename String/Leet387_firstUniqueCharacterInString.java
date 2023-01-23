/*********************************************************************** 
Source LeetCode
387 First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/description/
1st 2023-01-23

Given a string s, find the first non-repeating character in it and return 
its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "aabb"
Output: -1

 * @param {string} s
 * @return {number}

Constraints
    1 <= s.length <= 105
    s consists of only lowercase English letters.
************************************************************************/

// 1st Attempt
// LOGIC: Brute Force - Going through loops 
// Time: O(n2)  |  Space: O(1)
class Solution {
    public int firstUniqChar(String s) {
        for(int i = 0; i < s.length(); i++){
            boolean found = false;
            int j;
            for(j = 0; !found && j<s.length(); j++){
                if(i != j && s.charAt(i) == s.charAt(j)) found = true;
            }
            if(!found) return i;
        }
        return -1;
    }
}