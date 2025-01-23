# Algorithm Practice

The repository contains algorithm practices in various topics from LeetCode, codility.<br>

![Static Badge](https://img.shields.io/badge/total-108-blue)  
![Static Badge](https://img.shields.io/badge/easy-76-orange) ![Static Badge](https://img.shields.io/badge/medium-31-orange) ![Static Badge](https://img.shields.io/badge/hard-1-orange)

## Topics

- [Array](#array)
- [Backtracking](#backtracking)
- [Bit](#bit)
- [Dynamic Programming](#dynamic-programming)
- [Graph](#graph)
- [Greedy](#greedy)
- [Heap](#heap)
- [Linked-List](#linked-list)
- [Math](#math)
- [Queue](#queue)
- [Search](#search)
- [Stack](#stack)
- [String](#string)
- [Tree](#tree)

### Array

|    No    | Title                                                   | Language                                                                                    | Time                    | Space        | Level  | Description                                                            | Notes         |
| :------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------- | ------------ | ------ | ---------------------------------------------------------------------- | ------------- |
| Codility | Binary Gap                                              | [C](Array/Codility_binaryGap.c)                                                             | O(n)                    | O(n)         |        | Find the longest binary gap.                                           |               |
|  Leet1   | Two Sum                                                 | [JavaScript](Array/Leet1_twoSum.js), [Java](Array/Leet1_twoSum.java)                        | O(n<sup>2</sup>), O(n)  | O(1), O(n)   | Easy   | Find indices of two numbers that add up to the target.                 | Hash Map      |
|  Leet4   | Median of Two Sorted Arrays                             | [JavaScript](Array/Leet4_medianOfTwoSortedArrays.js)                                        | O(log(m+n)), O(m+n)     | O(m+n)       | Hard   | Find median number from two sorted arrays.                             | Binary Search |
|  Leet15  | 3Sum                                                    | [JavaScript](Array/Leet15_3Sum.js)                                                          | O(n^2)                  | O(n)         | Medium | Find unique triplets that sums 0.                                      | Two pointer   |
|  Leet26  | Remove Duplicates from Sorted Array                     | [JavaScript](Array/Leet26_removeDuplicatesFromSortedArray.js)                               | O(n)                    | O(1)         | Easy   | Find duplicate elements and re-order the array without those elements. |               |
|  Leet27  | Remove Duplicates from Sorted Array                     | [JavaScript](Array/Leet27_removeElement.js)                                                 | O(n)                    | O(1)         | Easy   | Remove all occurrences of given number in array                        |               |
|  Leet34  | Find First and Last Position of Element in Sorted Array | [JavaScript](Array/Leet34_findFirstAndLastPositionInSortedArray.js)                         | O(n)                    | O(1)         | Medium | Find positions of the matched target.                                  |               |
|  Leet35  | Search Insert Position                                  | [JavaScript](Array/Leet35_searchInsertPosition.js)                                          | -                       | -            | Easy   | Find the matched index or index to insert the target.                  |               |
|  Leet36  | Valid Sudoku                                            | [JavaScript](Array/Leet36_validSudoku.js), [python3](Array/Leet36_valid_sudoku.py)          | O(n^2)                  | O(1)         | Medium | Check if given sudoku is valid.                                        |               |
|  Leet49  | Group Anagrams                                          | [python3](Array/Leet49_group_anagrams.py)                                                   | O(n\*m)                 | O(n\*m)      | Medium | group the anagrams together.                                           | Hash Map      |
|  Leet53  | Maximum Subarray                                        | [JavaScript](Array/Leet53_maximumSubarray.js)                                               | O(n^2)                  | O(1)         | Medium | Find the maximum sum of contiguous part of an array.                   |               |
|  Leet56  | Merge Intervals                                         | [JavaScript](Array/Leet56_mergeIntervals.js)                                                | O(nlogn)                | O(n)         | Medium | merge all overlapping intervals.                                       |               |
|  Leet66  | Plus One                                                | [JavaScript](Array/Leet66_plusOne.js)                                                       | O(n)                    | O(1)         | Easy   | Add one to the given array.                                            |               |
|  Leet73  | Set Matrix Zeroes                                       | [python3](Array/Leet73_set_matrix_zeroes.py)                                                | O(m\*n)                 | O(m+n)       | Medium | set its entire row and column to 0.                                    |               |
|  Leet75  | Sort Colors                                             | [JavaScript](Array/Leet75_sortColors.js)                                                    | O(n)                    | O(1)         | Medium | Sort colors in-place.                                                  |               |
|  Leet78  | Subsets                                                 | [JavaScript](Array/Leet78_Subsets.js)                                                       | O(n^2)                  | O(n^2)       | Medium | Make all possible subsets.                                             |               |
| Leet121  | Best Time to Buy and Sell Stock                         | [JavaScript](Array/Leet121_bestTimeToBuySellStock.js)                                       | O(n)                    | O(1)         | Easy   | Find the maximum profit.                                               |               |
| Leet136  | Single Number                                           | [JavaScript](Array/Leet136_singleNumber.js)                                                 | O(n)                    | O(n)         | Easy   | Find single number in the array.                                       |               |
| Leet162  | Find Peak Element                                       | [JavaScript](Array/Leet162_findPeakElement.js)                                              | O(n)                    | O(1)         | Medium | Find an element that is greater than its neighbors.                    |               |
| Leet169  | Majority Element                                        | [JavaScript](Array/Leet169_majorityElement.js), [python](Array/Leet169_majority_element.py) | O(nlogn), O(n)          | O(1), O(n)   | Easy   | Find an element occurs more than n/2 times.                            |               |
| Leet189  | Rotate Array                                            | [JavaScript](Array/Leet189_rotateArray.js)                                                  | O(n)                    | O(n)/O(1)    | Medium | Rotate array with given number of times.                               |               |
| Leet217  | Contains Duplicate                                      | [JavaScript](Array/Leet217_containsDuplicate.js)                                            | O(n)                    | O(1)         | Easy   | Check whether a value in an array appears twice or more.               |               |
| Leet219  | Contains Duplicate II                                   | [python3](Array/Leet219_contains_duplicate_II.py)                                           | O(n^2)                  | O(n)         | Easy   | Find duplicate with distinct indices.                                  | Hash Map      |
| Leet228  | Summary Ranges                                          | [JavaScript](Array/Leet228_summaryRanges.js)                                                | O(n)                    | O(n)         | Easy   | summarize consecutive ranges in the array                              | Two pointer   |
| Leet238  | Product of Array Except Self                            | [JavaScript](Array/Leet238_productArrayExceptSelf.js)                                       | O(n^2), O(n)            | O(n)         | Medium | Multiply products except self.                                         |               |
| Leet268  | Missing Number                                          | [JavaScript](Array/Leet268_missingNumber.js)                                                | O(n)                    | O(n)/O(1)    | Easy   | Check for missing number                                               |               |
| Leet274  | H-Index                                                 | [JavaScript](Array/Leet274_hIndex.js)                                                       | O(nlogn), O(n^2)        | O(1)         | Medium | Find h-index(h papers with at least h citations)                       |               |
| Leet283  | Move Zeroes                                             | [JavaScript](Array/Leet283_moveZeroes.js)                                                   | O(n)                    | O(1)         | Easy   | Move zeroes to the end of array.                                       |               |
| Leet350  | Intersection of Two Arrays II                           | [Java](Array/Leet350_intersectionOfTwoArraysii.java)                                        | O(m \* n), O(max(m, n)) | O(max(m, n)) | Easy   | Find all elements on both arrays.                                      |               |
| Leet997  | Find the Town Judge                                     | [JavaScript](Array/Leet997_findTownJudge.js)                                                | O(n)                    | O(n)         | Easy   | Find the town judge with given terms.                                  |               |

### Backtracking

|   No   | Title                | Language                                               | Time | Space | Level  | Description                                 |
| :----: | -------------------- | ------------------------------------------------------ | ---- | ----- | ------ | ------------------------------------------- |
| Leet22 | Generate Parentheses | [python3](Backtracking/Leet22_generate_parentheses.py) | -    | -     | Medium | all combinations of parentheses.            |
| Leet39 | Combination Sum      | [python3](Backtracking/Leet39_combination_sum.py)      | -    | -     | Medium | all unique combinations that sum to target. |
| Leet46 | Permutations         | [python3](Backtracking/Leet46_permutations.py)         | -    | -     | Medium | all possible permutations.                  |
| Leet77 | Combinations         | [python3](Backtracking/Leet77_combinations.py)         | -    | -     | Medium | all possible combinations.                  |

### Bit

|   No    | Title            | Language                                                                           | Time | Space | Level | Description                      |
| :-----: | ---------------- | ---------------------------------------------------------------------------------- | ---- | ----- | ----- | -------------------------------- |
| Leet67  | Add Binary       | [JavaScript](Bit/Leet67_addBinary.js)                                              | O(n) | O(1)  | Easy  | Sum two binary strings.          |
| Leet190 | Reverse Bits     | [JavaScript](Bit/Leet190_reverseBits.js)                                           | O(n) | O(n)  | Easy  | Reverse bits of a given 32 bits. |
| Leet191 | Number of 1 Bits | [JavaScript](Bit/Leet191_numberOf1Bits.js), [Java](Bit/Leet191.numberOf1Bits.java) | -    | O(1)  | Easy  | Find the number of 1 bits.       |

### Dynamic Programming

|   No    | Title                    | Language                                                           | Time             | Space         | Level  | Description                                                     |
| :-----: | ------------------------ | ------------------------------------------------------------------ | ---------------- | ------------- | ------ | --------------------------------------------------------------- |
| Leet53  | Maximum Subarray         | [JavaScript](Dynamic-Programming/Leet53_maximumSubarray.js)        | O(n)             | O(1)          | Medium | Find contiguous subarry with the largest sum.                   |
| Leet62  | Unique Paths             | [JavaScript](Dynamic-Programming/Leet62_uniquePaths.js)            | O(n<sup>2</sup>) | O(n)          | Medium | Find unique path going from left-top to right-bottom.           |
| Leet64  | Minimum Path Sum         | [JavaScript](Dynamic-Programming/Leet64_minimumPathSum.js)         | O(m\*n)          | O(m\*n), O(m) | Medium | Minimizes the sum of all numbers from left-top to right-bottom. |
| Leet70  | Climbing Stairs          | [JavaScript](Dynamic-Programming/Leet70_climbingStairs.js)         | O(n), O(n^2)     | O(n)          | Easy   | Find possible ways to climb steps.                              |
| Leet72  | Edit Distance            | [JavaScript](Dynamic-Programming/Leet72_editDistance.js)           | O(m\*n)          | O(m\*n)       | Medium | The minimum number of operation to conversion.                  |
| Leet118 | Pascal's Triangle        | [JavaScript](Dynamic-Programming/Leet118_pascalsTriangle.js)       | O(n<sup>2</sup>) | O(1)          | Easy   | Return Pascal's triangle numbers.                               |
| Leet120 | Triangle                 | [JavaScript](Dynamic-Programming/Leet120_triangle.js)              | O(n<sup>2</sup>) | O(1)          | Medium | Return the minimum path sum.                                    |
| Leet139 | Word Break               | [JavaScript](Dynamic-Programming/Leet139_wordBreak.js)             | O(m\*n)          | O(n)          | Medium | Find string in dictionary.                                      |
| Leet221 | Maximal Square           | [JavaScript](Dynamic-Programming/Leet221_maximalSquare.js)         | O(m\*n)          | O(1)          | Medium | Find the largest square with 1's.                               |
| Leet322 | Coin Change              | [JavaScript](Dynamic-Programming/Leet322_coinChange.js)            | O(m\*n)          | O(n)          | Medium | he fewest number of coins to make up the amount.                |
| Leet746 | Min Cost Climbing Stairs | [JavaScript](Dynamic-Programming/Leet746_minCostClimbingStairs.js) | O(n)             | O(1)          | Easy   | Find minimum cost to climb stairs.                              |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Graph

|    No    | Title                        | Language                                              | Time | Space | Level  | Description                                          |
| :------: | ---------------------------- | ----------------------------------------------------- | ---- | ----- | ------ | ---------------------------------------------------- |
| Leet130  | Surrounded Regions           | [python3](Graph/Leet130_surrounded_regions.py)        | -    | -     | Medium | capture surrounded regions.                          |
| Leet133  | Surrounded Regions           | [python3](Graph/Leet133_clone_graph.py)               | -    | -     | Medium | Deep copy of the graph.                              |
| Leet200  | Number of Islands            | [python3](Graph/Leet200_number_of_islands.py)         | -    | -     | Medium | Find the number of islands surrounded by 0.          |
| Leet433  | Minimum Genetic Mutation     | [python3](Graph/Leet433_minimum_genetic_mutation.py)  | -    | -     | Medium | Find the number of mutation to end gene within bank. |
| Leet1971 | Find if Path Exists in Graph | [JavaScript](Graph/Leet1971_findIfPathExistsGraph.js) | -    | -     | Easy   | Find the path from source to destination.            |

### Greedy

|    No    | Title                              | Language                                                      | Time             | Space | Level  | Description                                           |
| :------: | ---------------------------------- | ------------------------------------------------------------- | ---------------- | ----- | ------ | ----------------------------------------------------- |
|  Leet11  | Container With Most Water          | [JavaScript](Greedy/Leet11_containerWithMostWater.js)         | O(n)             | O(1)  | Medium | Find max area that contains the most waters.          |
| Leet561  | Array Partition I                  | [JavaScript](Greedy/Leet561_arrayPartitionI.js)               | O(n<sup>2</sup>) | O(1)  | Easy   | Find maximized sum out of minimum number in pair.     |
| Leet605  | Can Place Flowers                  | [JavaScript](Greedy/Leet605_canPlaceFlowers.js)               | O(n)             | O(1)  | Easy   | Check the number of space that can place flowers.     |
| Leet860  | Lemonade Change                    | [JavaScript](Greedy/Leet860_lemonadeChange.js)                | O(n)             | O(1)  | Easy   | Give the correct change to all customers.             |
| Leet1221 | Split a String in Balanced Strings | [JavaScript](Greedy/Leet1221_splitStringInBalancedStrings.js) | O(n)             | O(1)  | Easy   | Find maximum number of balanced string.               |
| Leet1710 | Maximum Units on a Truck           | [JavaScript](Greedy/Leet1710_maximumUnitsOnTruck.js)          | O(nlogn)         | O(1)  | Easy   | Find maximum units of boxes can be stored on a truck. |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Heap

|   No    | Title                           | Language                                           | Time | Space | Level  | Description                           | Notes    |
| :-----: | ------------------------------- | -------------------------------------------------- | ---- | ----- | ------ | ------------------------------------- | -------- |
| Leet215 | Kth Largest Element in an Array | [Java](Heap/Leet215_kthLargestElementInArray.java) | O(n) | O(n)  | Medium | Find kth largest element in an array. | min-heap |

### Linked List

|   No    | Title                            | Language                                                                                                                    | Time             | Space       | Level  | Description                                                           | Notes     |
| :-----: | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------- | ------ | --------------------------------------------------------------------- | --------- |
|  Leet2  | Add Two Numbers                  | [Java](Linked-List/Leet2_addTwoNumbers.java), [JavaScript](Linked-List/Leet2_addTwoNumbers.js)                              | O(max(m,n))      | O(n)        | Medium | Create new linked list with sum of two linked list.                   | Recursive |
| Leet19  | Remove Nth Node From End of List | [JavaScript](Linked-List/Leet19_removeNthNodeFromEnd.js), [python3](Linked-List/Leet19_remove_Nth_node_from_end_of_list.py) | O(n)             | O(1)        | Medium | Remove nth node from the end of list.                                 |           |
| Leet21  | Merge Two Sorted Lists           | [JavaScript](Linked-List/Leet21_mergeTwoSortedLists.js)                                                                     | O(n)             | O(1)        | Easy   | Merge two linked lists.                                               |           |
| Leet61  | Rotate List                      | [python3](Linked-List/Leet61_rotate_list.py)                                                                                | O(n)             | O(1)        | Medium | Rotate list to right nth times.                                       |           |
| Leet86  | Partition List                   | [python3](Linked-List/Leet86_partition_list.py)                                                                             | O(n)             | O(n)        | Medium | Separate parts based on given x value.                                |           |
| Leet92  | Reverse Linked List II           | [python3](Linked-List/Leet92_reverse_linked_list_II.py)                                                                     | O(n)             | O(n)        | Medium | Reverse linked list between the range.                                |           |
| Leet138 | Copy List with Random Pointer    | [python3](Linked-List/Leet138_copy_list_with_random_pointer.py)                                                             | O(n)             | O(n)        | Medium | Deep copy nodes with random pointer.                                  |           |
| Leet141 | Linked List Cycle                | [JavaScript](Linked-List/Leet141_linkedListCycle.js), [python](Linked-List/Leet141_linked_list_cycle.py)                    | O(n)             | O(n), O(1)  | Easy   | Check if linked list has a cycle.                                     |           |
| Leet160 | Intersection of Two Linked Lists | [JavaScript](Linked-List/Leet160_intersectionOfTwoLinkedLists.js)                                                           | O(m \* n)/O(m+n) | O(1)/O(n)   | Easy   | Check for intersection node(value & reference) from two linked lists. |           |
| Leet203 | Remove Linked List Elements      | [JavaScript](Linked-List/Leet203_removeLinkedListElements.js)                                                               | O(n)             | O(1)        | Easy   | Remove element in Linked List that matches with given value.          |           |
| Leet206 | Reverse Linked List              | [JavaScript](Linked-List/Leet206_reverseLinkedList.js)                                                                      | O(n)             | O(1)        | Easy   | Reverse direction of linked list                                      |           |
| Leet234 | Palindrome Linked List           | [JavaScript](Linked-List/Leet234_palindromeLinkedList.js)                                                                   | O(n)             | O(n) / O(1) | Easy   | Check if linked list is palindrome.                                   |           |
| Leet237 | Delete Node In a Linked List     | [JavaScript](Linked-List/Leet237_deleteNodeInLinkedList.js)                                                                 | O(1)             | O(1)        | Medium | Make function to delete the node.                                     |           |

### Math

|    No    | Title                     | Language                                                                           | Time         | Space      | Level  | Description                               |
| :------: | ------------------------- | ---------------------------------------------------------------------------------- | ------------ | ---------- | ------ | ----------------------------------------- |
|  Leet7   | Reverse Integer           | [JavaScript](Math/Leet7_reverseInteger.js)                                         | O(n)         | O(1)       | Medium | Reverse the given integer                 |
|  Leet9   | Palindrome Number         | [JavaScript](Math/Leet9_palindromeNumber.js)                                       | O(n)         | O(n), O(1) | Easy   | Check given number is palindrome or not   |
|  Leet67  | Add Binary                | [JavaScript](Math/Leet67_addBinary.js)                                             | O(n)         | O(1)       | Easy   | Sum two binary strings to one             |
|  Leet69  | Sqrt(x)                   | [JavaScript](<Math/Leet69_sqrt(x).js>)                                             | O(n)         | O(1)       | Easy   | Check which square number is the closest. |
| Leet172  | Factorial Trailing Zeroes | [JavaScript](Math/Leet172_factorialTrailingZeros.js)                               | O(n)         | O(1)       | Medium | Find the number of trailing zeroes in n!. |
| Leet202  | Happy Number              | [JavaScript](Math/Leet202_happyNumber.js), [python3](Math/Leet202_happy_number.py) | O(logN)      | O(logN)    | Easy   | Check for happy number without cycle.     |
| Leet204  | Count Primes              | [JavaScript](Math/Leet204_countPrimes.js)                                          | O(n)         | O(n)       | Medium | Count prime numbers.                      |
| Leet231  | Power of Two              | [JavaScript](Math/Leet231_powerOfTwo.js)                                           | O(logn)      | O(1)       | Easy   | Check if the number is power of two.      |
| Leet326  | Power of Three            | [JavaScript](Math/Leet326_powerOfThree.js)                                         | O(logn)      | O(1)       | Easy   | Check if the number is power of three.    |
| Leet509  | Fibonacci Number          | [JavaScript](Math/Leet509_fibonacciNumber.js)                                      | O(2^n), O(n) | O(n)       | Easy   | Check for fibonacci number.               |
| Leet1154 | Day of the Year           | [JavaScript](Math/Leet1154_dayOfTheYear.js)                                        | O(1)         | O(1)       | Easy   | find the day of year with given date.     |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Queue

|   No    | Title                        | Language                                                 | Time | Space | Level | Description                                                       |
| :-----: | ---------------------------- | -------------------------------------------------------- | ---- | ----- | ----- | ----------------------------------------------------------------- |
| Leet232 | Implement Queue using Stacks | [JavaScript](Queue/Leet232_implementQueueUsingStacks.js) | -    | -     | Easy  | Build queue with two stacks.                                      |
| Leet933 | Number of Recent Calls       | [JavaScript](Queue/Leet933_numberOfRecentCalls.js)       | O(n) | O(n)  | Easy  | Counts the number of recent requests within a certain time frame. |

### Search

|   No    | Title                                | Type          | Language                                                         | Time    | Space | Level  | Description                                           |
| :-----: | ------------------------------------ | ------------- | ---------------------------------------------------------------- | ------- | ----- | ------ | ----------------------------------------------------- |
| Leet33  | Search in Rotated Sorted Array       | Binary Search | [JavaScript](Search/Leet33_SearchInRotatedSortedArray.js)        | O(logn) | O(1)  | Medium | Find index of target integer in rotated sorted array. |
| Leet35  | Search Insert Position               | Binary Search | [python](Search/Leet35_search_insert_position.py)                | O(logn) | O(1)  | Easy   | Find position to insert integer.                      |
| Leet153 | Find Minimum in Rotated Sorted Array | Binary Search | [python](Search/Leet153_find_minimum_in_rotated_sorted_array.py) | O(logn) | O(n)  | Medium | Find minimum value in rotated array.                  |
| Leet463 | Island Perimeter                     | Depth-first   | [JavaScript](Search/Leet463_islandPerimeter.js)                  | O(n)    | O(1)  | Easy   | Find perimeter on an island.                          |
| Leet704 | Binary Search                        | Binary        | [JavaScript](Search/Leet704_binarySearch.js)                     | O(logn) | O(1)  | Easy   | Find target number with logn complexity.              |
| Leet733 | Flood Fill                           | Depth-first   | [JavaScript](Search/Leet733_floodFill.js)                        | -       | O(1)  | Easy   | Apply new color in an image.                          |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Stack

|   No    | Title               | Language                                         | Time | Space | Level  | Description                                                    |
| :-----: | ------------------- | ------------------------------------------------ | ---- | ----- | ------ | -------------------------------------------------------------- |
| Leet20  | Valid Parentheses   | [JavaScript](Stack/Leet20_validParentheses.js)   | O(n) | O(n)  | Easy   | Check if the string consists of brackets in the correct order. |
| Leet71  | Simplify Path       | [python3](Stack/Leet71_simplify_path.py)         | O(n) | O(n)  | Medium | Return simplified path.                                        |
| Leet155 | Min Stack           | [JavaScript](Stack/Leet155_minStack.js)          | -    | -     | Medium | Build stack to support push, pop, top, minimum element.        |
| Leet227 | Basic Calculator II | [JavaScript](Stack/Leet227_basicCalculatorII.js) | O(n) | O(1)  | Medium | Calculate string with integer & basic operator.                |

### String

|   No    | Title                                          | Language                                                                                 | Time                  | Space         | Level  | Description                                                            | Notes                  |
| :-----: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------- | ------------- | ------ | ---------------------------------------------------------------------- | ---------------------- |
|  Geeks  | Longest Common Substring                       | [JavaScript](String/Geeks_longestCommonSubstring.js)                                     | O(s)/O(s^2)           | O(s)          | -      | Find the longest substring.                                            |                        |
|  Leet3  | Longest Substring Without Repeating Characters | [JavaScript](String/Leet3_longestSubstringWithoutRepeatingCharacters.js)                 | O(n^2)                | O(n)          | Medium | find the length of the longest substring without repeating characters. | Sliding window, Set    |
|  Leet5  | Longest Palindromic Substring                  | [JavaScript](String/Leet5_longestPalindromicSubstring.js)                                | O(n^3), O(n^2)        | O(1),O(n^2)   | Medium | find the longest palindromic substring in the string.                  | Dynamic Programming    |
|  Leet8  | String to Integer                              | [JavaScript](String/Leet8_stringToInteger.js)                                            | O(S)                  | O(1)          | Medium | Implement myAtoi(string s) function.                                   |                        |
|  Leet9  | Palindrome Number                              | [JavaScript](String/Leet9_palindromeNumber.js)                                           | O(n)                  | O(n)          | Easy   | Check whether the number reads the same backward as forward.           |                        |
| Leet13  | Roman to Integer                               | [JavaScript](String/Leet13_romanToInteger.js), [Java](String/Leet13_romanToInteger.java) | O(n)                  | O(1)          | Easy   | Calculate integer number from roman numerals.                          |                        |
| Leet14  | Longest Common Prefix                          | [JavaScript](String/Leet14_longestCommonPrefix.js)                                       | O(s)                  | O(1),O(mlogn) | Easy   | Find the longest prefix among strings.                                 |                        |
| Leet17  | Letter Combinations of a Phone Number          | [JavaScript](String/Leet17_letterCombinationsOfPhoneNumber.js)                           | O(3^n\*4^m)           | O(n)          | Medium | Find all possible letter combinations.                                 | Backtracking, Hash Map |
| Leet28  | Implement strStr()                             | [JavaScript](<String/Leet28_implementStrStr().js>)                                       | O(m\*n)               | O(1)          | Medium | Find needle in haystack.                                               |                        |
| Leet38  | Count and Say                                  | [JavaScript](String/Leet38_countAndSay.js)                                               | O(n<sup>2</sup>)      | O(1)          | Medium | Count the number of occurrence of the digit and say.                   |                        |
| Leet58  | Length of Last Word                            | [JavaScript](String/Leet58_lengthOfLastWord.js)                                          | O(n)                  | O(1)          | Easy   | Count the length of last word.                                         |                        |
| Leet125 | Valid Palindrome                               | [JavaScript](String/Leet125_validPalindrome.js)                                          | O(n)                  | O(n)          | Easy   | Find a phrase with palindrome.                                         |                        |
| Leet171 | Excel Sheet Column Number                      | [JavaScript](String/Leet171_excelSheetColumnNumber.js)                                   | O(n)                  | O(1)          | Easy   | Find corresponding column number from excel sheet column title.        |                        |
| Leet242 | Valid Anagram                                  | [JavaScript](String/Leet242_validAnagram.js)                                             | O(n)                  | O(1)          | Easy   | Check whether the given strings are anagram or not.                    |                        |
| Leet290 | Word Pattern                                   | [python3](String/Leet290_word_pattern.py)                                                | O(n)                  | O(n)          | Easy   | Check whether the given string follows the same pattern.               | Hash Map               |
| Leet344 | Reverse String                                 | [JavaScript](String/Leet344_reverseString.js)                                            | O(n)                  | O(1)          | Easy   | Reverse the order of the given string.                                 |                        |
| Leet383 | Ransom Note                                    | [JavaScript](String/Leet383_ransomNote.js)                                               | O(n)                  | O(n)          | Easy   | Find if one string can be constructed by letters from the other string | Hash Map               |
| Leet387 | First Unique Character in a String             | [Java](String/Leet387_firstUniqueCharacterInString.java)                                 | O(n<sup>2</sup>)/O(n) | O(1)          | Easy   | Find the first and unique character in a string.                       |                        |
| Leet392 | Is Subsequence                                 | [JavaScript](String/Leet392_isSubsequence.js)                                            | O(n)                  | O(1)          | Easy   | Find if a string is subsequence to the other one.                      |                        |
| Leet412 | Fizz Buzz                                      | [JavaScript](String/Leet412_fizzBuzz.js)                                                 | O(n)                  | O(n)          | Easy   | Display 'Fizz' or 'Buzz' when a number is divided by 3 or 5.           |                        |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>

### Tree

|   No    | Title                                                     | Language                                                                                     | Time   | Space | Level  | Description                                                                  | Notes                                                |
| :-----: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------ | ----- | ------ | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| Leet94  | Binary Tree Inorder Traversal                             | [JavaScript](Tree/Leet94_binaryTreeInorderTraversal.js)                                      | O(n)   | O(n)  | Easy   | Inorder method(Left, Root, Right) in Depth First Traversals of binary tree.  |                                                      |
| Leet98  | Validate Binary Search Tree                               | [python3](Tree/Leet98_validate_binary_search_tree.py)                                        | O(n)   | O(1)  | Medium | Validate tree with binary search tree rule.                                  |                                                      |
| Leet100 | Same Tree                                                 | [JavaScript](Tree/Leet100_sameTree.js)                                                       | O(V+E) | O(d)  | Easy   | Check if the trees are the same.                                             | BFS                                                  |
| Leet101 | Symmetric Tree                                            | [JavaScript](Tree/Leet101_symmetricTree.js)                                                  | O(n)   | O(1)  | Easy   | Check whether it is mirror of itself.                                        |                                                      |
| Leet104 | Maximum Depth of Binary Tree                              | [JavaScript](Tree/Leet104_maximumDepthOfBinaryTree.js)                                       | O(n)   | O(1)  | Easy   | Find maximum depth.                                                          |                                                      |
| Leet105 | Construct Binary Tree from Preorder and Inorder Traversal | [python3](Tree/Leet105_construct_binary_tree_from_preorder_and_inorder_traversal.py)         | -      | -     | Medium | Build Tree from preorder and inroder traversal.                              |                                                      |
| Leet106 | Construct Binary Tree from Inorder and Preorder Traversal | [python3](Tree/Leet106_construct_binary_tree_from_inorder_and_preorder_traversal.py)         | -      | -     | Medium | Build Tree from inorder and preroder traversal.                              |                                                      |
| Leet108 | Convert Sorted Array to Binary Search Tree                | [JavaScript](Tree/Leet108_convertedSortedArraytoBinarySearchTree.js)                         | -      | O(1)  | Easy   | Make balanced binary search tree with number array.                          |                                                      |
| Leet112 | Path Sum                                                  | [JavaScript](Tree/Leet112_pathSum.js), [python](Leet112_pathSum)                             | O(n)   | O(1)  | Easy   | Find the way to have path                                                    |                                                      |
| Leet114 | Flatten Binary Tree to Linked List                        | [python3](Tree/Leet114_flatten_binary_tree_to_linked_list.py)                                | O(n)   | O(1)  | Medium | Flatten the tree.                                                            | Depth-First Search (DFS)                             |
| Leet129 | Sum Root to Leaf Numbers                                  | [python3](Tree/Leet129_sum_root_to_leaf_numbers.py)                                          | -      | -     | Medium | sum all root-to-leaf numbers.                                                |                                                      |
| Leet144 | Binary Tree Preorder Traversal                            | [JavaScript](Tree/Leet144_binaryTreePreorderTraversal.js)                                    | O(n)   | O(n)  | Easy   | Preorder method(Root, Left, Right) in Depth First Traversals of binary tree. |                                                      |
| Leet199 | Binary Tree Right Side View                               | [python](Tree/Leet199_binary_tree_right_side_view.py)                                        | O(n)   | O(n)  | Medium | Return the very right node on each level.                                    | Breadth-First Search (BFS)                           |
| Leet222 | Count Complete Tree Nodes                                 | [python](Tree/Leet222_count_complete_tree_nodes.py)                                          | O(n)   | O(n)  | Easy   | Count the number of nodes in tree.                                           | Depth-First Search (DFS)                             |
| Leet226 | Invert Binary Tree                                        | [JavaScript](Tree/Leet226_invertBinaryTree.js), [python](Tree/Leet226_invert_binary_tree.py) | O(n)   | O(n)  | Easy   | Invert binary tree.                                                          | Depth-First Search (DFS)                             |
| Leet235 | Lowest Common Ancestor of a Binary Search Tree            | [JavaScript](Tree/Leet235_lowestCommonAncestorOfBinarySearchTree.js)                         | O(n)   | O(1)  | Medium | Find the lowest common ancestor between two values.                          |                                                      |
| Leet637 | Search in a Binary Search Tree                            | [python3](Tree/Leet637_average_of_levels_in_binary_tree.py)                                  | O(n)   | O(n)  | Easy   | Find average value on each level.                                            | Breadth-First Search (BFS), Depth-First Search (DFS) |
| Leet700 | Search in a Binary Search Tree                            | [JavaScript](Tree/Leet700_searchBinarySearchTree.js)                                         | O(n)   | O(1)  | Easy   | Find the node and subtree that matches with given value.                     |                                                      |

<p align="right"><a href="#topics">:arrow_up: Go to Top</a></p>
