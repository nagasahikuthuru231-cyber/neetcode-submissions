class Solution {
          isAnagram = function(s, t) {
     
    if (s.length !== t.length) {
        return false;
    }
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (!map.has(t[j])) {
            return false;
        }
        map.set(t[j], map.get(t[j]) - 1);

        if (map.get(t[j]) < 0) {
            return false;
        }
    }
    for (const value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
}
}