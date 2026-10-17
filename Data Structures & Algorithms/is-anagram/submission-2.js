class Solution {
    isAnagram(s, t) {
       if(s.length!== t.length){
        return false;
       }
       let sMod=s.split("").sort().join("")
       let tMod=t.split("").sort().join("")
       if(sMod == tMod){
        return true
       }
       else{
        return false
       }
    }}