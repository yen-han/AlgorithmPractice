'''
Source LeetCode
706. Design HashMap
https://leetcode.com/problems/design-hashmap/description/
1st 2025-04-28

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:
    - MyHashMap() initializes the object with an empty map.
    - void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
    - int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
    - void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

Example 1:
Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Constraints
    0 <= key, value <= 106
    At most 104 calls will be made to put, get, and remove.
'''

# 1st Attempt
# LOGIC: Implement a hashmap using a dictionary.
# Time: O(m*n)  | Space: O(1)
class MyHashMap:

    def __init__(self):
        self.hash_map = {}

    def put(self, key: int, value: int) -> None:
        self.hash_map[key] = value

    def get(self, key: int) -> int:
        for hash_key, hash_value in self.hash_map.items():
            if hash_key == key:
                return hash_value
        return -1

    def remove(self, key: int) -> None:
        if self.get(key) != -1:
            del self.hash_map[key]

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)