class Solution {
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length; i++) {

            // Skip duplicate first numbers
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {

                const sum = nums[i] + nums[left] + nums[right];

                if (sum > 0) {
                    right--;
                } 
                else if (sum < 0) {
                    left++;
                } 
                else {
                    result.push([
                        nums[i],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    // Skip duplicate second numbers
                    while (
                        left < right &&
                        nums[left] === nums[left - 1]
                    ) {
                        left++;
                    }
                }
            }
        }

        return result;
    }
}
