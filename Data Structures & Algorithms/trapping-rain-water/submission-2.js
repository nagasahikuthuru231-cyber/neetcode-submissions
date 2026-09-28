class Solution {
    trap(height) {
        let n = height.length;
        let trapped = 0;
        let leftMax = new Array(n);
        let rightMax = new Array(n);
        let max = 0;
        for (let i = 0; i < n; i++) {
            max = Math.max(max, height[i]);
            leftMax[i] = max;
        }
        max = 0;
        for (let i = n - 1; i >= 0; i--) {
            max = Math.max(max, height[i]);
            rightMax[i] = max;
        }
        for (let i = 0; i < n; i++) {
            trapped += Math.min(leftMax[i], rightMax[i]) - height[i];
        }
        return trapped;
    }
}