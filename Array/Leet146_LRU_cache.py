"""
Source LeetCode
146. LRU Cache
https://leetcode.com/problems/lru-cache/
1st: 2024-12-02

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

    LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
    int get(int key) Return the value of the key if the key exists, otherwise return -1.
    void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

Example 1:
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

Constraints:
    1 <= capacity <= 3000
    0 <= key <= 104
    0 <= value <= 105
    At most 2 * 105 calls will be made to get and put.
"""

# 1st Attempt
# LOGIC : using dictionary to store key-value pairs, and maintain the order of usage.
# Time : O(n)  | Space : O(n)
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