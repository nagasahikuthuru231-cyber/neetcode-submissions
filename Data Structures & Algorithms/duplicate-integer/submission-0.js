class Solution {
    hasDuplicate(nums) {
        const set = new Set()
        for(let value of nums)
        {
         if(set.has(value)){
          return true
         
        }
       set.add(value)
    }
       return false
}
}