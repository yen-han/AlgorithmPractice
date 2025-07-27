"""
Source LeetCode
146. LRU Cache
https://leetcode.com/problems/longest-consecutive-sequence/description/
1st: 2024-12-02

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

    LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
    int get(int key) Return the value of the key if the key exists, otherwise return -1.
    void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
"""
class LRUCache:
    def __init__(self, cap: int):
        self.dict = dict() 
        self.capacity = cap

    def get(self, key: int) -> int:
        if key not in self.dict:
            return -1
        value = self.dict.pop(key)
        self.dict[key] = value
        return value

    def put(self, key: int, value: int) -> None:
        if key in self.dict: 
            self.dict.pop(key)
        else:
            if len(self.dict) >= self.capacity:
                del self.dict[next(iter(self.dict))]  
        self.dict[key] = value 