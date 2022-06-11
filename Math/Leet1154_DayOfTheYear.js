/*********************************************************************** 
Source LeetCode
1154 Day of the Year
(https://leetcode.com/problems/day-of-the-year/)
1st 2022-06-09

Given a string date representing a Gregorian calendar date formatted as 
YYYY-MM-DD, return the day number of the year.
Return true if n is a happy number, and false if not.

Constraints:    
    date.length == 10
    date[4] == date[7] == '-', and all other date[i]'s are digits
    date represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.

 * @param {string} date
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Store calculated day of the Month
// Time: O(1) Space: O(1)
var dayOfYear = function(date) {
            //     1   2   3    4    5   6    7    8     9    10   11   12
    let days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]

    let givenDate = new Date(date);
    let day =  givenDate.getDate()
    let month = givenDate.getMonth();
    let year= givenDate.getFullYear();
    if(month + 1 > 2 && year % 4 === 0  && (year % 100 !== 0 || year % 400 === 0)) 
        return days[month]+day+1;

    return days[month]+day;
};