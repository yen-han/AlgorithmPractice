'''
Source LeetCode
2347. Best Poker Hand
https://leetcode.com/problems/best-poker-hand/description/
1st 2025-07-14

You are given an integer array ranks and a character array suits. You have 5 cards where the 
ith card has a rank of ranks[i] and a suit of suits[i].

The following are the types of poker hands you can make from best to worst:

    "Flush": Five cards of the same suit.
    "Three of a Kind": Three cards of the same rank.
    "Pair": Two cards of the same rank.
    "High Card": Any single card.

Return a string representing the best type of poker hand you can make with the given cards.

Note that the return values are case-sensitive.

Example 1:
Input: ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]
Output: "Flush"

Example 2:
Input: ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]
Output: "Three of a Kind"

Constraints
    ranks.length == suits.length == 5
    1 <= ranks[i] <= 13
    'a' <= suits[i] <= 'd'
    No two cards have the same rank and suit.
'''

# 1st Attempt
# LOGIC: using hash table to count the frequency of ranks and suits, then determine the best poker hand based on the counts.
# Time: O(1)  | Space: O(1)
class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:

        ranks_hash = {}
        suits_hash = {}
        max_count_rank = 0
        for rank in ranks:
            if rank not in ranks_hash:
                ranks_hash[rank] = 1
            else: 
                ranks_hash[rank] += 1
                max_count_rank = max(ranks_hash[rank], max_count_rank)
        for suit in suits:
            if suit not in suits_hash:
                suits_hash[suit] = 1
            else: 
                suits_hash[suit] += 1

        if len(suits_hash) == 1: 
            return "Flush"
        else:
            if max_count_rank >= 3:
                return "Three of a Kind" 
            elif max_count_rank == 2:
                return "Pair"
            else:
                return "High Card"
