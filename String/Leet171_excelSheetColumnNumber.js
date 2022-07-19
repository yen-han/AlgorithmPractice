/*********************************************************************** 
Source LeetCode
171 Excel Sheet Column Number
(https://leetcode.com/problems/excel-sheet-column-number/)
1st 2022-07-17

Given a string columnTitle that represents the column title as appears 
in an Excel sheet, return its corresponding column number.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Constraints:
    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].

 * @param {string} columnTitle
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Loop through each alphabet adding proper number
// Time O(n) | Space O(1)
var titleToNumber = function(columnTitle) {
    let output = 0, times = 1;
    for(let i = columnTitle.length-1 ;i >= 0; i--){
        output += (columnTitle.charCodeAt(i)-64) * times;
        times *= 26;
    }
    return output;
};