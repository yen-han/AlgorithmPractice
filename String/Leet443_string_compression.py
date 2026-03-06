"""
Source LeetCode
443. String Compression
https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75
1st 2026-03-05

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

    If the group's length is 1, append the character to s.
    Otherwise, append the character followed by the group's length.

The compressed string s should not be returned separately, but instead, be stored in the 
input character array chars. Note that group lengths that are 10 or longer will be split 
into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Note: The characters in the array beyond the returned length do not matter and should be ignored.

Example 1:
Input: chars = ["a","a","b","b","c","c","c"]
Output: 6

Example 2:
Input: chars = ["a"]
Output: 1

Constraints:
    1 <= chars.length <= 2000
    chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
"""

# 1st Attempt
# LOGIC: Use two pointers to track the current character and its count. When a new character is encountered, update the array with the previous character and its count if greater than 1.
# Time : O(n)  | Space: O(1)
class Solution:
    def compress(self, chars: List[str]) -> int:
        track_index = 0
        prev = chars[0]
        count = 1
        for i in range(1, len(chars)):
            if prev == chars[i]:
                count+=1
            else :
                chars[track_index] = prev
                track_index += 1

                if count >1:
                    for j in str(count):
                        chars[track_index] = j
                        track_index+=1
                prev = chars[i]
                count = 1
        # last 
        chars[track_index] = prev
        track_index += 1

        if count >1:
            for j in str(count):
                chars[track_index] = j
                track_index+=1

        return track_index