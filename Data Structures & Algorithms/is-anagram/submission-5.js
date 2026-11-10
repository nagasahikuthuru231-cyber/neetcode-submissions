class Solution {
    isAnagram(s, t) {
         if (t.length != s.length) return false;
        const map = new Map();
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        for (const char2 of t) {
            if (map.has(char2)) {
                map.set(char2, (map.get(char2) || 0) - 1);
                if (map.get(char2) === 0) {
                    map.delete(char2);
                }
            }
        }
        if (map.size > 0) {
            return false;
        }
        return true;
            }
        }

       