"""
Source LeetCode
43. Multiply Strings
https://leetcode.com/problems/multiply-strings/description/
1st 2025-06-19

Given two non-negative integers num1 and num2 represented as strings, return 
the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

Constraints:
    1 <= num1.length, num2.length <= 200
    num1 and num2 consist of digits only.
    Both num1 and num2 do not contain any leading zero, except the number 0 itself.
"""

# 1st Attempt
# LOGIC: Convert string to integer using hash table, multiply the integers and convert back to string.
# Time: O(n)  | Space: O(1)
class Solution:
    def convertToInt(self, num:str) -> int:
        hash_table ={            
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5, 
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "0": 0
        }
        result = 0
        for i in range(len(num)):
            digit = hash_table.get(num[i])
            result = result * 10 + digit
        return result

    def convertToStr(self, num:str)-> str:
        hash_table_to_str = {            
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        }
        if num == 0:
            return hash_table_to_str[0]
        result = ""
        while num > 0:
            digit = num % 10
            result = hash_table_to_str[digit] + result
            num //= 10
        return result

    def multiply(self, num1: str, num2: str) -> str:
        result1 = self.convertToInt(num1)
        result2 = self.convertToInt(num2)
        return self.convertToStr(result1 * result2)