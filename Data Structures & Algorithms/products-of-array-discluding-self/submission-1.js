class Solution {
    productExceptSelf(nums) {
        let product = 1;
        let zeroCount = 0;

        for (let num of nums) {
            if (num === 0) {
                zeroCount++;
            } else {
                product *= num;
            }
        }

        let res = [];

        for (let num of nums) {
            if (zeroCount > 1) {
                res.push(0);
            } else if (zeroCount === 1) {
                if (num === 0) {
                    res.push(product);
                } else {
                    res.push(0);
                }
            } else {
                res.push(product / num);
            }
        }

        return res;
    }
}