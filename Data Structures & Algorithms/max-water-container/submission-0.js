class Solution {
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while (left < right) {
let width = right - left;
let currentHeight = Math.min(heights[left], heights[right]);
let currentArea = width * currentHeight;
maxArea = Math.max(maxArea, currentArea);
if (heights[left] < heights[right]) { left++; } 
else {right--; }}
 return maxArea;}}