/*********************************************************************** 
From LeetCode
1 Two Sum
Date 2022-03-31

Given an array of integers numbers and an integer target, return indices of 
the two numbers such that they add up to target. You may assume that each 
input would have exactly one solution, and you may not use the same element 
twice. You can return the answer in any order.

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
************************************************************************/

// Logic) Check if target-numbers[i] includes in the remaining array. 

let twoSum = function(numbers, target) {
    let answer = [];
    for(let i = 0; i < numbers.length ; i++) {
        let diff = numbers.indexOf(target-numbers[i]);
        // Not the same element & have matched integer in the remaining array
        if(diff !== i &&  diff !== -1) {
            answer.push(i);
            answer.push(diff);
            return answer;
        }
    }

};

// TEST
// Output: [0,1]
console.log(twoSum([2,7,11,15], 9));
// Output: [1,2]
console.log(twoSum([3,2,4], 6));
// Output: [0,1]
console.log(twoSum([3,3], 6));
