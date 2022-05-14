/*********************************************************************** 
Source LeetCode
733 Flood Fill
(https://leetcode.com/problems/flood-fill/)
1st 2022-05-14

An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform 
a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels 
connected 4-directionally to the starting pixel of the same color as the 
starting pixel, plus any pixels connected 4-directionally to those pixels 
(also with the same color), and so on. Replace the color of all of the 
aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
************************************************************************/

// 1st Attempt
// LOGIC: Check if the cell is in within range & need to change in 4 ways
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] === newColor) return image;
    return fill(image, sr, sc, image[sr][sc], newColor);
};

function fill(image, sr, sc, starting, newColor){
    let row = image.length;
    let col = image[0].length;
    // should be within range
    if(sr < 0 || sc < 0|| sr >= row ||sc >= col
       || image[sr][sc] !== starting || image[sr][sc] === newColor) return image;
    image[sr][sc] = newColor;
    // up
    fill(image, sr-1, sc, starting, newColor);
    // down
    fill(image, sr+1, sc, starting, newColor);
    // left
    fill(image, sr, sc-1,  starting, newColor);
    // right
    fill(image, sr, sc+1, starting, newColor);
    
    return image;
}