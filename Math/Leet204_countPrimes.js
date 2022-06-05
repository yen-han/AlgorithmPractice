/*********************************************************************** 
Source LeetCode
204 Count Primes
(https://leetcode.com/problems/count-primes/)
1st 2022-06-04

Given an integer n, return the number of prime numbers that are strictly
less than n.

Constraints:
    0 <= n <= 5 * 106

 * @param {number} n
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Remove multiple of prime number
var countPrimes = function(n) {
    let arr = new Array(n).fill(1);
    let prime = 0;
    
    // if n==0 or n==1, return 0
    if(n<2) return 0;
    
    for(let i = 2; i < n ; i++){
         if(arr[i]){
             // change to false for multiple of prime number
             for(let j = i + i; j < n; j += i) {
                 arr[j] = 0;
             }                     
         }
    }
    
    // count for prime number
    for(let i = 2;i < arr.length; i++){
        if(arr[i]) prime++;
    }
    return prime ;
};
// n = 10
// n = 0 
console.log(countPrimes(n));