"""
Source LeetCode
1813. Sentence Similarity III
https://leetcode.com/problems/sentence-similarity-iii/description/
1st 2025-06-03

You are given two strings sentence1 and sentence2, each representing a sentence 
composed of words. A sentence is a list of words that are separated by a single 
space with no leading or trailing spaces. Each word consists of only uppercase and lowercase English characters.

Two sentences s1 and s2 are considered similar if it is possible to insert an arbitrary 
sentence (possibly empty) inside one of these sentences such that the two sentences become equal. 
Note that the inserted sentence must be separated from existing words by spaces.

For example,

    s1 = "Hello Jane" and s2 = "Hello my name is Jane" can be made equal by inserting 
    "my name is" between "Hello" and "Jane" in s1.
    s1 = "Frog cool" and s2 = "Frogs are cool" are not similar, since although there is a sentence 
    "s are" inserted into s1, it is not separated from "Frog" by a space.

Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are similar. Otherwise, return false.


Example 1:
Input: sentence1 = "My name is Haley", sentence2 = "My Haley"
Output: true

Example 2:
Input: sentence1 = "of", sentence2 = "A lot of words"
Output: false

Constraints:
    1 <= sentence1.length, sentence2.length <= 100
    sentence1 and sentence2 consist of lowercase and uppercase English letters and spaces.
    The words in sentence1 and sentence2 are separated by a single space.
"""

# 1st Attempt
# LOGIC: using two pointer, count from the start and end of both sentences to find subsequences that match.
# Time : O(n)  | Space: O(n)
class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        long_s = sentence1.split()
        short_s = sentence2.split()

        if len(short_s) > len(long_s):
            long_s, short_s = short_s, long_s

        prefix = 0
        while prefix < len(short_s) and long_s[prefix] == short_s[prefix]:
            prefix += 1

        suffix = 0
        while suffix < len(short_s) - prefix and long_s[-1 - suffix] == short_s[-1 - suffix]:
            suffix += 1

        return prefix + suffix == len(short_s)