"""
Source LeetCode
1466. Reorder Routes to Make All Paths Lead to the City Zero
https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/
1st 2025-12-22

There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is 
only one way to travel between two different cities (this network form a tree). 
Last year, The ministry of transport decided to orient the roads in one direction 
because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a 
road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want 
to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. 
Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.

Example 1:
Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3

Example 2:
Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
Output: 2

Constraints:
    2 <= n <= 5 * 104
    connections.length == n - 1
    connections[i].length == 2
    0 <= ai, bi <= n - 1
    ai != bi 
"""
# 1st Attempt
# LOGIC: Using Depth-First Search via recursion, check if difference in character between current and bank
# Time : O(n)  | Space: O(n)
class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        graph = defaultdict(list)
        for f, t in connections:
            graph[f].append((t, 'original'))
            graph[t].append((f, 'reverse'))
        changed = 0
        visited = set()
        def dfs(node):
            nonlocal changed
            visited.add(node)
            for t, rel in graph[node]:
                if t not in visited:
                    if rel == 'original':
                        changed += 1
                    dfs(t)
        dfs(0)
        return changed
