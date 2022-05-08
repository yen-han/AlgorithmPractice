/*********************************************************************** 
Source LeetCode
997 Find the Town Judge
(https://leetcode.com/problems/find-the-town-judge/)
1st 2022-05-08

In a town, there are n people labeled from 1 to n. There is a rumor 
that one of these people is secretly the town judge.

If the town judge exists, then:

    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.

You are given an array trust where trust[i] = [ai, bi] representing that 
the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be 
identified, or return -1 otherwise.

 * @param {number} n
 * @param {number[][]} trust
 * @return {number}

Constraints
    1 <= n <= 1000
    0 <= trust.length <= 104
    trust[i].length == 2
    All the pairs of trust are unique.
    ai != bi
    1 <= ai, bi <= n
************************************************************************/

// 1st Attempt
// LOGIC: 
// 1) Check if town judge exists ==  judge should not be in ai of the trust list
// 2) Everyone except judge(n-1) should trust judge
// Time : O(n)
var findJudge = function(n, trust) {
    if(n === 1) return n;
    let check = [];
    let found = false;
    // 1) Check if town judge exists == judge should not be in the list
    for(let i = 0; i < trust.length; i++){
        check.push(trust[i][0]);
    }
    for(let i = 1; i < n+1; i++){
        if(!check.includes(i)) found = true;
    }
    if(!found) return -1;
    
    // Who is trusted by everybody
    let count = [];
    for(let i = 0;i < trust.length; i++){
        if(count[trust[i][1]]) count[trust[i][1]] += 1;
        else if(!count[trust[i][1]]) count[trust[i][1]] = 1;
    }
    for( let i = 1 ;i < count.length;i++){
        if(count[i] === n-1) return i;
    }
    return -1;
};