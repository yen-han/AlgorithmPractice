/*********************************************************************** 
Source LeetCode
13. Roman to Integer
https://leetcode.com/problems/roman-to-integer/description/
1st 2022-06-03 (JavaScript)
2nd 2022-06-03 (JavaScript)
3rd 2023-05-16 (Java)
4th 2023-05-16 (Java)

Roman numerals are represented by seven different symbols: I, V, X, L, 
C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added 
together. 12 is written as XII, which is simply X + II. The number 27 is 
written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is
written as IV. Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Constraints:
    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].

 * @return {number}
************************************************************************/

// 3rd Attempt
// LOGIC: Using HashMap, add every value, then subtract for special cases.
// Time: O(n)  |  Space: O(1)
import java.util.HashMap;
class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;
        for(int i = 0; i < s.length(); i++) {
            result += map.get(s.charAt(i));
        }

        for(int i = 0; i < s.length()-1; i++){
            if(s.charAt(i) == 'I' && (s.charAt(i+1) == 'V'|| s.charAt(i+1) == 'X')){
                result -= 2;
            }else if(s.charAt(i) == 'X' && (s.charAt(i+1) == 'L'|| s.charAt(i+1) == 'C')){
                result -=20;
            }else if(s.charAt(i) == 'C' && (s.charAt(i+1) == 'D'|| s.charAt(i+1) == 'M')){
                result -=200;
            }
        }
        
        return result;
    }
}

// 4th Attempt
// LOGIC: Using HashMap, if the current index is larger than or equal to the next one, add value
// if the current index is smaller than the next one, subtract value
// Time: O(n)  |  Space: O(1)
import java.util.HashMap;
class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;

        for(int i = 0; i < s.length(); i++){
            if((i+1 != s.length()) && (map.get(s.charAt(i)) < map.get(s.charAt(i+1)))){
                result += (map.get(s.charAt(i+1)) - map.get(s.charAt(i)));
                i++;
            } else {
                result += map.get(s.charAt(i));
            }
        }        
        return result;
    }
}