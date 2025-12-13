'''
Source LeetCode
2115. Find All Possible Recipes from Given Supplies
https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/description/
1st 2025-12-12

You have information about n different recipes. You are given a string array recipes and a 
2D string array ingredients. The ith recipe has the name recipes[i], and you can create it 
if you have all the needed ingredients from ingredients[i]. A recipe can also be an ingredient for other recipes, 
i.e., ingredients[i] may contain a string that is in recipes.

You are also given a string array supplies containing all the ingredients that you initially 
have, and you have an infinite supply of all of them.

Return a list of all the recipes that you can create. You may return the answer in any order.

Note that two recipes may contain each other in their ingredients.

Example 1:
Input: recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
Output: ["bread"]

Example 2:
Input: recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
Output: ["bread","sandwich"]

Constraints
    n == recipes.length == ingredients.length
    1 <= n <= 100
    1 <= ingredients[i].length, supplies.length <= 100
    1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10
    recipes[i], ingredients[i][j], and supplies[k] consist only of lowercase English letters.
    All the values of recipes and supplies combined are unique.
    Each ingredients[i] does not contain any duplicate values.
'''

# 1st Attempt
# LOGIC: Use a dictionary to map recipes to their ingredients. Iteratively check which recipes can be made with current supplies. 
# Time: O(n * m)  | Space: O(n)
class Solution:
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]: 
        recipe_dict = dict()
        for i in range(len(recipes)):
            recipe_dict[recipes[i]] = ingredients[i]

        res = []
        added = True
        while added: 
            added = False
            for key, value in recipe_dict.items():
                if key not in supplies and all(i in supplies for i in value):
                    supplies.append(key)
                    res.append(key)
                    added = True
        return res