# Algorithm Practice

The repository contains algorithm practices in various topics from LeetCode, codility.<br>

## Topics

- [Array](#array)
- [Bit](#bit)
- [Dynamic Programming](#dynamic-programming)
- [Graph](#graph)
- [Greedy](#greedy)
- [Linked-List](#linked-list)
- [Math](#math)
- [Queue](#queue)
- [Search](#search)
- [Stack](#stack)
- [String](#string)
- [Tree](#tree)

### Array

|    No    | Title                               | Language                                                      | Time                    | Space        | Level  | Description                                                            |
| :------: | ----------------------------------- | ------------------------------------------------------------- | ----------------------- | ------------ | ------ | ---------------------------------------------------------------------- |
| Codility | Binary Gap                          | [C](Array/Codility_binaryGap.c)                               | O(n)                    | O(n)         |        | Find the longest binary gap.                                           |
|  Leet1   | Two Sum                             | [JavaScript](Array/Leet1_twoSum.js)                           | O(n)                    | O(1)         | Easy   | Find indices of two numbers that add up to the target.                 |
|  Leet26  | Remove Duplicates from Sorted Array | [JavaScript](Array/Leet26_removeDuplicatesFromSortedArray.js) | O(n)                    | O(1)         | Easy   | Find duplicate elements and re-order the array without those elements. |
|  Leet27  | Remove Duplicates from Sorted Array | [JavaScript](Array/Leet27_removeElement.js)                   | O(n)                    | O(1)         | Easy   | Remove all occurrences of given number in array                        |
|  Leet35  | Search Insert Position              | [JavaScript](Array/Leet35_searchInsertPosition.js)            | -                       | -            | Easy   | Find the matched index or index to insert the target.                  |
|  Leet53  | Maximum Subarray                    | [JavaScript](Array/Leet53_maximumSubarray.js)                 | O(n^2)                  | O(1)         | Medium | Find the maximum sum of contiguous part of an array.                   |
|  Leet66  | Plus One                            | [JavaScript](Array/Leet66_plusOne.js)                         | O(n)                    | O(1)         | Easy   | Add one to the given array.                                            |
|  Leet78  | Subsets                             | [JavaScript](Array/Leet78_Subsets.js)                         | O(n^2)                  | O(n^2)       | Medium | Make all possible subsets.                                             |
| Leet121  | Best Time to Buy and Sell Stock     | [JavaScript](Array/Leet121_bestTimeToBuySellStock.js)         | O(n)                    | O(1)         | Easy   | Find the maximum profit.                                               |
| Leet136  | Single Number                       | [JavaScript](Array/Leet136_singleNumber.js)                   | O(n)                    | O(n)         | Easy   | Find single number in the array.                                       |
| Leet162  | Find Peak Element                   | [JavaScript](Array/Leet162_findPeakElement.js)                | O(n)                    | O(1)         | Medium | Find an element that is greater than its neighbors.                    |
| Leet169  | Majority Element                    | [JavaScript](Array/Leet169_majorityElement.js)                | O(nlogn)                | O(1)         | Easy   | Find an element occurs more than n/2 times.                            |
| Leet189  | Rotate Array                        | [JavaScript](Array/Leet189_rotateArray.js)                    | O(n)                    | O(n)/O(1)    | Medium | Rotate array with given number of times.                               |
| Leet217  | Contains Duplicate                  | [JavaScript](Array/Leet217_containsDuplicate.js)              | O(n)                    | O(1)         | Easy   | Check whether a value in an array appears twice or more.               |
| Leet268  | Missing Number                      | [JavaScript](Array/Leet268_missingNumber.js)                  | O(n)                    | O(n)/O(1)    | Easy   | Check for missing number                                               |
| Leet283  | Move Zeroes                         | [JavaScript](Array/Leet283_moveZeroes.js)                     | O(n)                    | O(1)         | Easy   | Move zeroes to the end of array.                                       |
| Leet350  | Intersection of Two Arrays II       | [Java](Array/Leet350_intersectionOfTwoArraysii.java)          | O(m \* n), O(max(m, n)) | O(max(m, n)) | Easy   | Find all elements on both arrays.                                      |
| Leet997  | Find the Town Judge                 | [JavaScript](Array/Leet997_findTownJudge.js)                  | O(n)                    | O(n)         | Easy   | Find the town judge with given terms.                                  |

### Bit

|   No    | Title            | Language                                                                           | Time | Space | Level | Description                |
| :-----: | ---------------- | ---------------------------------------------------------------------------------- | ---- | ----- | ----- | -------------------------- |
| Leet191 | Number of 1 Bits | [JavaScript](Bit/Leet191_numberOf1Bits.js), [Java](Bit/Leet191.numberOf1Bits.java) | -    | O(1)  | Easy  | Find the number of 1 bits. |

### Dynamic Programming

|   No    | Title                    | Language                                                           | Time             | Space | Level  | Description                                           |
| :-----: | ------------------------ | ------------------------------------------------------------------ | ---------------- | ----- | ------ | ----------------------------------------------------- |
| Leet53  | Maximum Subarray         | [JavaScript](Dynamic-Programming/Leet53_maximumSubarray.js)        | O(n)             | O(1)  | Medium | Find contiguous subarry with the largest sum.         |
| Leet62  | Unique Paths             | [JavaScript](Dynamic-Programming/Leet62_uniquePaths.js)            | O(n<sup>2</sup>) | O(n)  | Medium | Find unique path going from left-top to right-bottom. |
| Leet70  | Climbing Stairs          | [JavaScript](Dynamic-Programming/Leet70_climbingStairs.js)         | O(n)             | O(n)  | Easy   | Find possible ways to climb steps.                    |
| Leet118 | Pascal's Triangle        | [JavaScript](Dynamic-Programming/Leet118_pascalsTriangle.js)       | O(n<sup>2</sup>) | O(1)  | Easy   | Return Pascal's triangle numbers.                     |
| Leet746 | Min Cost Climbing Stairs | [JavaScript](Dynamic-Programming/Leet746_minCostClimbingStairs.js) | O(n)             | O(1)  | Easy   | Find minimum cost to climb stairs.                    |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Graph

|    No    | Title                        | Language                                              | Time | Space | Level | Description                               |
| :------: | ---------------------------- | ----------------------------------------------------- | ---- | ----- | ----- | ----------------------------------------- |
| Leet1971 | Find if Path Exists in Graph | [JavaScript](Graph/Leet1971_findIfPathExistsGraph.js) | -    | -     | Easy  | Find the path from source to destination. |

### Greedy

|    No    | Title                              | Language                                                      | Time             | Space | Level | Description                                           |
| :------: | ---------------------------------- | ------------------------------------------------------------- | ---------------- | ----- | ----- | ----------------------------------------------------- |
| Leet561  | Array Partition I                  | [JavaScript](Greedy/Leet561_arrayPartitionI.js)               | O(n<sup>2</sup>) | O(1)  | Easy  | Find maximized sum out of minimum number in pair.     |
| Leet605  | Can Place Flowers                  | [JavaScript](Greedy/Leet605_canPlaceFlowers.js)               | O(n)             | O(1)  | Easy  | Check the number of space that can place flowers.     |
| Leet860  | Lemonade Change                    | [JavaScript](Greedy/Leet860_lemonadeChange.js)                | O(n)             | O(1)  | Easy  | Give the correct change to all customers.             |
| Leet1221 | Split a String in Balanced Strings | [JavaScript](Greedy/Leet1221_splitStringInBalancedStrings.js) | O(n)             | O(1)  | Easy  | Find maximum number of balanced string.               |
| Leet1710 | Maximum Units on a Truck           | [JavaScript](Greedy/Leet1710_maximumUnitsOnTruck.js)          | O(nlogn)         | O(1)  | Easy  | Find maximum units of boxes can be stored on a truck. |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Linked List

|   No    | Title                            | Language                                                          | Time             | Space       | Level | Description                                                           |
| :-----: | -------------------------------- | ----------------------------------------------------------------- | ---------------- | ----------- | ----- | --------------------------------------------------------------------- |
| Leet21  | Merge Two Sorted Lists           | [JavaScript](Linked-List/Leet21_mergeTwoSortedLists.js)           | O(n)             | O(1)        | Easy  | Merge two linked lists.                                               |
| Leet141 | Linked List Cycle                | [JavaScript](Linked-List/Leet141_linkedListCycle.js)              | O(n)             | O(n)        | Easy  | Check if linked list has a cycle.                                     |
| Leet160 | Intersection of Two Linked Lists | [JavaScript](Linked-List/Leet160_intersectionOfTwoLinkedLists.js) | O(m \* n)/O(m+n) | O(1)/O(n)   | Easy  | Check for intersection node(value & reference) from two linked lists. |
| Leet203 | Remove Linked List Elements      | [JavaScript](Linked-List/Leet203_removeLinkedListElements.js)     | O(n)             | O(1)        | Easy  | Remove element in Linked List that matches with given value.          |
| Leet206 | Reverse Linked List              | [JavaScript](Linked-List/Leet206_reverseLinkedList.js)            | O(n)             | O(1)        | Easy  | Reverse direction of linked list                                      |
| Leet234 | Palindrome Linked List           | [JavaScript](Linked-List/Leet234_palindromeLinkedList.js)         | O(n)             | O(n) / O(1) | Easy  | Check if linked list is palindrome.                                   |

### Math

|    No    | Title            | Language                                      | Time    | Space   | Level  | Description                               |
| :------: | ---------------- | --------------------------------------------- | ------- | ------- | ------ | ----------------------------------------- |
|  Leet69  | Sqrt(x)          | [JavaScript](<Math/Leet69_sqrt(x).js>)        | O(n)    | O(1)    | Easy   | Check which square number is the closest. |
| Leet202  | Happy Number     | [JavaScript](Math/Leet202_happyNumber.js)     | O(logN) | O(logN) | Easy   | Check for happy number without cycle.     |
| Leet204  | Count Primes     | [JavaScript](Math/Leet204_countPrimes.js)     | O(n)    | O(n)    | Medium | Count prime numbers.                      |
| Leet231  | Power of Two     | [JavaScript](Math/Leet231_powerOfTwo.js)      | O(logn) | O(1)    | Easy   | Check if the number is power of two.      |
| Leet326  | Power of Three   | [JavaScript](Math/Leet326_powerOfThree.js)    | O(logn) | O(1)    | Easy   | Check if the number is power of three.    |
| Leet509  | Fibonacci Number | [JavaScript](Math/Leet509_fibonacciNumber.js) | -       | O(1)    | Easy   | Check for fibonacci number.               |
| Leet1154 | Day of the Year  | [JavaScript](Math/Leet1154_dayOfTheYear.js)   | O(1)    | O(1)    | Easy   | find the day of year with given date.     |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Queue

|   No    | Title                        | Language                                                 | Time | Space | Level | Description                                                       |
| :-----: | ---------------------------- | -------------------------------------------------------- | ---- | ----- | ----- | ----------------------------------------------------------------- |
| Leet232 | Implement Queue using Stacks | [JavaScript](Queue/Leet232_implementQueueUsingStacks.js) | -    | -     | Easy  | Build queue with two stacks.                                      |
| Leet933 | Number of Recent Calls       | [JavaScript](Queue/Leet933_numberOfRecentCalls.js)       | O(n) | O(n)  | Easy  | Counts the number of recent requests within a certain time frame. |

### Search

|      No       | Title                                                     | Type        | Language                                        | Time    | Space                                                 | Level | Description                              |
| :-----------: | --------------------------------------------------------- | ----------- | ----------------------------------------------- | ------- | ----------------------------------------------------- | ----- | ---------------------------------------- |
|    Leet33     | Search in Rotated Sorted Array                            |
| Binary Search | [JavaScript](Search/Leet33_SearchInRotatedSortedArray.js) | O(logn)     | O(1)                                            | Medium  | Find index of target integer in rotated sorted array. |
|    Leet463    | Island Perimeter                                          | Depth-first | [JavaScript](Search/Leet463_islandPerimeter.js) | O(n)    | O(1)                                                  | Easy  | Find perimeter on an island.             |
|    Leet704    | Binary Search                                             | Binary      | [JavaScript](Search/Leet704_binarySearch.js)    | O(logn) | O(1)                                                  | Easy  | Find target number with logn complexity. |
|    Leet733    | Flood Fill                                                | Depth-first | [JavaScript](Search/Leet733_floodFill.js)       | -       | O(1)                                                  | Easy  | Apply new color in an image.             |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Stack

|   No    | Title             | Language                                       | Time | Space | Level  | Description                                                    |
| :-----: | ----------------- | ---------------------------------------------- | ---- | ----- | ------ | -------------------------------------------------------------- |
| Leet20  | Valid Parentheses | [JavaScript](Stack/Leet20_validParentheses.js) | O(n) | O(n)  | Easy   | Check if the string consists of brackets in the correct order. |
| Leet155 | Min Stack         | [JavaScript](Stack/Leet155_minStack.js)        | -    | -     | Medium | Build stack to support push, pop, top, minimum element.        |

### String

|   No    | Title                              | Language                                                 | Time                  | Space | Level  | Description                                                     |
| :-----: | ---------------------------------- | -------------------------------------------------------- | --------------------- | ----- | ------ | --------------------------------------------------------------- |
|  Leet9  | Palindrome Number                  | [JavaScript](String/Leet9_palindromeNumber.js)           | O(n)                  | O(n)  | Easy   | Check whether the number reads the same backward as forward.    |
| Leet13  | Roman to Integer                   | [JavaScript](String/Leet13_romanToInteger.js)            | O(n)                  | O(1)  | Easy   | Calculate integer number form roman numerals.                   |
| Leet14  | Longest Common Prefix              | [JavaScript](String/Leet14_longestCommonPrefix.js)       | O(s)                  | O(1)  | Easy   | Find the longest prefix among strings.                          |
| Leet28  | Implement strStr()                 | [JavaScript](<String/Leet28_implementStrStr().js>)       | O(m\*n)               | O(1)  | Medium | Find needle in haystack.                                        |
| Leet38  | Count and Say                      | [JavaScript](String/Leet38_countAndSay.js)               | O(n<sup>2</sup>)      | O(1)  | Medium | Count the number of occurrence of the digit and say.            |
| Leet125 | Valid Palindrome                   | [JavaScript](String/Leet125_validPalindrome.js)          | O(n)                  | O(n)  | Easy   | Find a phrase with palindrome.                                  |
| Leet171 | Excel Sheet Column Number          | [JavaScript](String/Leet171_excelSheetColumnNumber.js)   | O(n)                  | O(1)  | Easy   | Find corresponding column number from excel sheet column title. |
| Leet242 | Valid Anagram                      | [JavaScript](String/Leet242_validAnagram.js)             | O(n)                  | O(1)  | Easy   | Check whether the given strings are anagram or not.             |
| Leet344 | Reverse String                     | [JavaScript](String/Leet344_reverseString.js)            | O(n)                  | O(1)  | Easy   | Reverse the order of the given string.                          |
| Leet387 | First Unique Character in a String | [Java](String/Leet387_firstUniqueCharacterInString.java) | O(n<sup>2</sup>)/O(n) | O(1)  | Easy   | Find the first and unique character in a string.                |
| Leet412 | Fizz Buzz                          | [JavaScript](String/Leet412_fizzBuzz.js)                 | O(n)                  | O(n)  | Easy   | Display 'Fizz' or 'Buzz' when a number is divided by 3 or 5.    |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Tree

|   No    | Title                                          | Language                                                             | Time | Space | Level  | Description                                                                  |
| :-----: | ---------------------------------------------- | -------------------------------------------------------------------- | ---- | ----- | ------ | ---------------------------------------------------------------------------- |
| Leet94  | Binary Tree Inorder Traversal                  | [JavaScript](Tree/Leet94_binaryTreeInorderTraversal.js)              | O(n) | O(n)  | Easy   | Inorder method(Left, Root, Right) in Depth First Traversals of binary tree.  |
| Leet101 | Symmetric Tree                                 | [JavaScript](Tree/Leet101_symmetricTree.js)                          | O(n) | O(1)  | Easy   | Check whether it is mirror of itself.                                        |
| Leet104 | Maximum Depth of Binary Tree                   | [JavaScript](Tree/Leet104_maximumDepthOfBinaryTree.js)               | O(n) | O(1)  | Easy   | Find maximum depth.                                                          |
| Leet108 | Convert Sorted Array to Binary Search Tree     | [JavaScript](Tree/Leet108_convertedSortedArraytoBinarySearchTree.js) | -    | O(1)  | Easy   | Make balanced binary search tree with number array.                          |
| Leet112 | Path Sum                                       | [JavaScript](Tree/Leet112_pathSum.js)                                | O(n) | O(1)  | Easy   | Find the way to have path                                                    |
| Leet144 | Binary Tree Preorder Traversal                 | [JavaScript](Tree/Leet144_binaryTreePreorderTraversal.js)            | O(n) | O(n)  | Easy   | Preorder method(Root, Left, Right) in Depth First Traversals of binary tree. |
| Leet235 | Lowest Common Ancestor of a Binary Search Tree | [JavaScript](Tree/Leet235_lowestCommonAncestorOfBinarySearchTree.js) | O(n) | O(1)  | Medium | Find the lowest common ancestor between two values.                          |
| Leet700 | Search in a Binary Search Tree                 | [JavaScript](Tree/Leet700_searchBinarySearchTree.js)                 | O(n) | O(1)  | Easy   | Find the node and subtree that matches with given value.                     |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>
