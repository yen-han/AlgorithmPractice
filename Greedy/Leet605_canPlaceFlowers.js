/*********************************************************************** 
Source LeetCode
605 Can Place Flowers
(https://leetcode.com/problems/can-place-flowers/)
1st 2022-05-19

You have a long flowerbed in which some of the plots are planted, and 
some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means 
empty and 1 means not empty, and an integer n, return if n new flowers 
can be planted in the flowerbed without violating the no-adjacent-flowers 
rule.

Constraints:
    1 <= flowerbed.length <= 2 * 104
    flowerbed[i] is 0 or 1.
    There are no two adjacent flowers in flowerbed.
    0 <= n <= flowerbed.length

 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: If flower is empty on left & right, there is space
var canPlaceFlowers = function(flowerbed, n){
    let space = 0;
    for(let i = 0;i < flowerbed.length; i++){
        if(!flowerbed[i]){
            // left & right empty
            if(!flowerbed[i-1] && !flowerbed[i+1]) {
                flowerbed[i] = 1;
                space++;
            }
        }
    }
    return n <= space;
};

// TEST
//let flowerbed = [1,0,0,0,1]; let n = 2
//Output: false
// let flowerbed = [1,0,0,0,1]; let n = 1
//Output: true
console.log(canPlaceFlowers(flowerbed, n));