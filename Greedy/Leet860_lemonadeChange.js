/*********************************************************************** 
Source LeetCode
860 Lemonade Change
(https://leetcode.com/problems/lemonade-change/)
1st 2022-05-19

At a lemonade stand, each lemonade costs $5. Customers are standing in 
a queue to buy from you and order one at a time (in the order specified 
by bills). Each customer will only buy one lemonade and pay with either 
a $5, $10, or $20 bill. You must provide the correct change to each 
customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer 
pays, return true if you can provide every customer with the correct 
change, or false otherwise.

Constraints:
    1 <= bills.length <= 105
    bills[i] is either 5, 10, or 20.

 * @param {number[]} bills
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Count or subtract $5, $10. If there is not enough change, return false
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5){
            // count $5
            five++;
        } else if(bills[i] === 10){
            if(!five) return false;
            // count $10
            ten++;
            // change $5
            five--;
        } else if(bills[i]===20){
            if(!five || (!ten && five < 3)) return false;
            // change $10 + $5
            else if(five > 0 && ten > 0){
                ten--; five--;
            }
            // change $5 + $5 + $5
            else if(five >= 3) {
                five -= 3;
            }
        }
    }
    return true;
};