
class Solution {
    topKFrequent(nums, k) {
        const map = new Map();

        // 1. Count frequency of each number
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // 2. Create buckets based on frequency
        const buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        for (const [num, freq] of map) {
            buckets[freq].push(num);
        }

        // 3. Collect k most frequent elements
        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
