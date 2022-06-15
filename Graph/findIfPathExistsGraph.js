/*********************************************************************** 
Source LeetCode
1971 Find if Path Exists in Graph
(https://leetcode.com/problems/find-if-path-exists-in-graph/)
1st 2022-05-14

There is a bi-directional graph with n vertices, where each vertex is 
labeled from 0 to n - 1 (inclusive). The edges in the graph are 
represented as a 2D integer array edges, where each edges[i] = 
[ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
Every vertex pair is connected by at most one edge, and no vertex has 
an edge to itself.

You want to determine if there is a valid path that exists from vertex 
source to vertex destination.

Given edges and the integers n, source, and destination, return true if 
there is a valid path from source to destination, or false otherwise.

 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
************************************************************************/

// 1st attempt
// LOGIC: track for visited vertex and check for neighboring edges
var validPath = function(n, edges, start, end) {
    let graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1]);
        graph[edges[i][1]].push(edges[i][0]);
    }

    let stack = [];
    stack.push(start);
    let visited = new Set();

    while (stack.length > 0) {
        let vertex = stack.pop();
        if (vertex === end) return true;
        // track visited vertex
        if (visited.has(vertex)) continue;
        visited.add(vertex);
        // check for neighboring edge
        for(let i = 0; i < graph[vertex].length; i++) {
            if (!visited.has(graph[vertex][i])) stack.push(graph[vertex][i]);

        }
    }
    return false;
}