class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left =0;
        let right= heights.length -1
        let max=0
        while(left<right){
        let width=right-left
        let newHeight=Math.min(heights[left],heights[right]);
        let newArea=(width*newHeight)

max=Math.max(max,newArea)
if(heights[left]<heights[right]){
    left++
}
else{
    right--
}
        }
        return max
    }
}
