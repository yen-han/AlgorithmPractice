"""
Source LeetCode
345. Reverse Vowels of a String
https://leetcode.com/problems/reverse-vowels-of-a-string/description/
1st 2025-11-24

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"

Example 2:
Input: s = "leetcode"
Output: "leotcede"


Constraints:
    1 <= s.length <= 3 * 105
    s consist of printable ASCII characters.
"""

# 1st Attempt
# LOGIC: Collect indices and vowels, then replace in reverse order.
# Time : O(n)  | Space: O(n)
class Solution:
    def reverseVowels(self, s: str) -> str:        
        vowels = set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
        index = []
        vowel = []

        for i in range(len(s)):
            if s[i] in vowels:
                index.append(i)
                vowel.append(s[i])
        s_list = list(s)   
        for j in range(len(vowel)):
            s_list[index[j]] = vowel[len(vowel)-1-j]
        return "".join(s_list)

# 2nd Attempt
# LOGIC: Two pointer approach to swap vowels from start and end.
# Time : O(n)  | Space: O(n)
class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])   
        s_list = list(s) 
        i = 0
        j = len(s_list) - 1  
        while i < j:
            if s_list[i] not in vowels:
                i += 1
            if s_list[j] not in vowels:
                j -= 1
            if s_list[i] in vowels and s_list[j] in vowels: 
                s_list[i], s_list[j] = s_list[j], s_list[i]
                i += 1
                j -= 1
        return "".join(s_list)  