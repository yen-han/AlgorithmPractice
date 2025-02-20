"""
Source LeetCode
150. Evaluate Reverse Polish Notation
https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
1st 2024-12-10

You are given an array of strings tokens that represents an arithmetic 
expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
    The valid operators are '+', '-', '*', and '/'.
    Each operand may be an integer or another expression.
    The division between two integers always truncates toward zero.
    There will not be any division by zero.
    The input represents a valid arithmetic expression in a reverse polish notation.
    The answer and all the intermediate calculations can be represented in a 32-bit integer.

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6

Constraints:
    1 <= tokens.length <= 104
    tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
"""

# 1st Attempt
# LOGIC: using stack. pop 2 elements and perform the operation and push the result back to stack.
# Time : O(n)  | Space: O(n)
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operators = ['+', '-', '*', '/']
        res = 0
        stack = []
        for i in range(len(tokens)):
            if tokens[i] not in operators:
                stack.append(tokens[i])
                
            else:
                int2 = int(stack.pop())
                int1 = int(stack.pop())
                match tokens[i]:
                    case '+': 
                        res = int1+int2
                    case '-':
                        res = int1-int2
                    case '*':
                        res = int1*int2
                    case '/':
                        res = int(int1/int2)
                stack.append(res)
        return int(stack.pop())