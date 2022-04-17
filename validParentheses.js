/*********************************************************************** 
Source LeetCode
20 Valid Parentheses
(https://leetcode.com/problems/valid-parentheses/)
1st 2022-04-16

Given a string s containing just the characters '(', ')', '{', '}', 
'[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

 * @param {string} s
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: If matched, pop from the stack
// Time: O(n)  |  Memory: O(n)  
var isValid = function(s) {
    let stack = [];
    for(let i = 0 ;i < s.length; i++){
        if(i === 0 || stack.length === 0) {
            stack.push(s[i]);
        } else if((stack[stack.length-1] === '(' && s[i] === ')')||
                (stack[stack.length-1] === '{' && s[i] === '}')||
                (stack[stack.length-1] === '[' && s[i] === ']')){
                stack.pop();
            }
         else {
             stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

// TEST
// Output : true
console.log(isValid("{[]}"));
// Output : true
console.log(isValid("()[]{}"));
// Output : false
console.log(isValid("()[]}{"));
// Output : false
console.log(isValid("(({{{}}}})"));