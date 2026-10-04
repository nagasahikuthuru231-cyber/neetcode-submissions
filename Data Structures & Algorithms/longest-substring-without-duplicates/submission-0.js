class Solution {
    lengthOfLongestSubstring(s) {
        let max =0;
        let right=0;
        let left=0;
        const set= new Set
       
       while(right<s.length){
        if(!set.has(s[right])){
          set.add(s[right])
          right++
          max=Math.max(max,right-left)
        }
        else if(set.has (s[right]))
        {
            set.delete(s[left])
            left++

        }
        
       }
            
        return max
    }
}