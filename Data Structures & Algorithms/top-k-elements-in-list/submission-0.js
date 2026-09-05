 
  class Solution {
    topKFrequent(nums, k) {
        const freq = new Map();

        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const bucket = Array(nums.length + 1)
            .fill()
            .map(() => []);

        for (const [num, count] of freq) {
            bucket[count].push(num);
        }

        const res = [];

        for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
            for (const num of bucket[i]) {
                res.push(num);
                if (res.length === k) return res;
            }
        }
    }
}

