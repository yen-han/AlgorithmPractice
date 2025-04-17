"""
Source LeetCode
207. Course Schedule
https://leetcode.com/problems/course-schedule/description/
1st 2024-10-28

There are a total of numCourses courses you have to take, labeled from 0 to 
numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] 
indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

Constraints:
    1 <= numCourses <= 2000
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.
"""
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Step 1: Build the graph as an adjacency list
        graph = defaultdict(list)
        for prerequisite in prerequisites:
            course, pre_course = prerequisite
            graph[pre_course].append(course)

        count = 0
        # Step 2: Use DFS to detect cycles
        def dfs(course):
            nonlocal count
            if course in visiting:  # cycle detected
                return False
            if course in visited:   # already processed with no cycles
                return True

            visiting.add(course)
            for neighbor in graph[course]:
                if not dfs(neighbor):
                    return False
            visiting.remove(course)
            visited.add(course)
            count += 1
            return True

        # Sets to keep track of visited and visiting nodes
        visited = set()
        visiting = set()

        # Step 3: Run DFS for each course : 3
        for course in range(numCourses): 
            if course not in visited:
                if not dfs(course):
                    return False
            if numCourses == count:
                return numCourses==count 
        return True
