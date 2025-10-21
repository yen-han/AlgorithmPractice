"""
Source LeetCode
1859. Sorting the Sentence
https://leetcode.com/problems/sorting-the-sentence/description/
1st 2025-10-20

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

    For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".

Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Example 1:
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"

Example 2:
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"

Constraints:
    2 <= s.length <= 200
    s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
    The number of words in s is between 1 and 9.
    The words in s are separated by a single space.
    s contains no leading or trailing spaces.
"""

# 1st Attempt
# LOGIC: Using a list to store words and their positions, then sorting the list based on positions
# Time : O(n)  | Space: O(n)
class Solution:
    def sortSentence(self, s: str) -> str:
        splited = s.split()

        map = dict()
        for item in splited:
            order = item[len(item)-1:]
            map[order] = item[:len(item)-1]

        sorted_dict = dict(sorted(map.items()))
        result = sorted_dict.values()

        return ' '.join(result)