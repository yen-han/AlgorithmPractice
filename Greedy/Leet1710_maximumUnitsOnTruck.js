/*********************************************************************** 
Source LeetCode
1710 Maximum Units on a Truck
(https://leetcode.com/problems/maximum-units-on-a-truck/)
1st 2022-05-20

You are assigned to put some amount of boxes onto one truck. You are 
given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, 
    numberOfUnitsPerBoxi]:

    numberOfBoxesi is the number of boxes of type i.
    numberOfUnitsPerBoxi is the number of units in each box of the type i.

You are also given an integer truckSize, which is the maximum number 
of boxes that can be put on the truck. You can choose any boxes to 
put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.

 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Sort the array in descending order and 
// add units until number of boxes reaches truck size
var maximumUnits = function(boxTypes, truckSize) {
    // Sort in descending order on 
    boxTypes.sort((a,b) => b[1] - a[1]);
    
    let units = 0;
    // Add units until number of boxes === truckSize
    for(let i = 0; truckSize && i < boxTypes.length; i++){
        if(boxTypes[i][0] <= truckSize){
            units += (boxTypes[i][0] * boxTypes[i][1]);
            truckSize -= boxTypes[i][0];
        } else{
            units += (truckSize * boxTypes[i][1]);
            truckSize = 0;
        }
    }
    return units;
};

// TEST
// let boxTypes = [[1,3],[2,2],[3,1]]; let truckSize = 4;
//let boxTypes = [[5,10],[2,5],[4,7],[3,9]]; let truckSize = 10;

console.log(maximumUnits(boxTypes, truckSize));
