"""
Source LeetCode
433. Minimum Genetic Mutation
https://leetcode.com/problems/minimum-genetic-mutation/description/
1st 2024-11-05

A gene string can be represented by an 8-character long string, with choices 
from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a 
gene string endGene where one mutation is defined as one single character 
changed in the gene string.

    For example, "AACCGGTT" --> "AACCGGTA" is one mutation.

There is also a gene bank bank that records all the valid gene mutations. 
A gene must be in bank to make it a valid gene string.

Given the two gene strings startGene and endGene and the gene bank bank, 
return the minimum number of mutations needed to mutate from startGene 
to endGene. If there is no such a mutation, return -1.

Note that the starting point is assumed to be valid, so it might not be 
included in the bank.

Example 1:
Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
Output: 1

Example 2:
Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2

Constraints:
    0 <= bank.length <= 10
    startGene.length == endGene.length == bank[i].length == 8
    startGene, endGene, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].
"""
# 1st Attempt
# LOGIC: Using Breadth-First Search via queue, check if difference in character between current and bank
# compare until startGene == endGene or queue is empty
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:

        queue, seen, count = [startGene], set(), 0

        while queue:
            for _ in range(len(queue)):
                curGene = queue.pop(0)

                if curGene == endGene: return count

                for i in range(len(bank)):
                    if self.string_diff(bank[i], curGene) == 1 and bank[i] not in seen:
                        seen.add(bank[i])
                        queue.append(bank[i])
            count += 1 
        return -1

    def string_diff(self, a: str, b: str) -> int:
        if len(a) != len(b):
            raise ValueError("Strings must be of the same length")
        return sum(1 for x, y in zip(a, b) if x != y)