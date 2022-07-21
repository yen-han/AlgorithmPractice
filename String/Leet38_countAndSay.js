/*********************************************************************** 
Source LeetCode
38 Count and Say
(https://leetcode.com/problems/count-and-say/)
1st 2022-07-21

The count-and-say sequence is a sequence of digit strings defined by 
the recursive formula:

    countAndSay(1) = "1"
    countAndSay(n) is the way you would "say" the digit string from 
    countAndSay(n-1), which is then converted into a different digit string.

To determine how you "say" a digit string, split it into the minimal 
number of substrings such that each substring contains exactly one unique 
digit. Then for each substring, say the number of digits, then say the 
digit. Finally, concatenate every said digit.

Constraints:
    1 <= n <= 30

 * @param {number} n
 * @return {string}
************************************************************************/

// 1st Attempt
// LOGIC: Check for the number of occurrence of the digit and store it 
// in string, go on in recursive formula
var countAndSay = function(n) {
    let say = "1";
    for(let i = 2;i <= n;i++){
        let temp = "";
        for(let j = 0, count = 1;j < say.length; j++){
            if(say[j+1] && say[j] == say[j+1]) {
                count++;
            }
            else {
                temp += (count+ say[j]);
                count = 1;
            }
        }
        say = temp;
    }
    return say;
};