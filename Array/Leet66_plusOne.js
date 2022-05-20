/*********************************************************************** 
Source LeetCode
66 Plus One
(https://leetcode.com/problems/plus-one/)
1st 2022-04-09

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. The digits are 
ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 * @param {number[]} digits
 * @return {number[]}
************************************************************************/

// 1st Attempt
// LOGIC: check for consecutive 9's, if it does add 1 to the first index,
// if not increment by 1
// Time: O(n)  |  Memory: O(1)
var plusOne = function(digits) {
    let last = digits.length - 1;
    if(digits[last] !== 9) {
        digits[last]++;
    } else {
        for(let i = last; i >= 0; i--) {
            if(digits[i] === 9){
                digits[i] = 0;
            }
            else {
                digits[i]++; 
                return digits;
            }
        }    
        digits.unshift(1)
    } 
    return digits;
};

// TEST
// Output [1,2,4]
console.log(plusOne([1,2,3]));
// Output [4,3,2,2]
console.log(plusOne([4,3,2,1]));
// Output [1,0]
console.log(plusOne([9]));