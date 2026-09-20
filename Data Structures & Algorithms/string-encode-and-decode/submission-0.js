class Solution {
    encode(strs) {
    let encoded_string = "";

    for (let str of strs) {
        encoded_string += str.length + "#" + str;
    }

    return encoded_string;
}
    decode(s) {
    let result = [];
    let i = 0;

    while (i < s.length) {
        let j = i;

        while (s[j] !== "#") {
            j++;
        }

        let len = Number(s.slice(i, j));

        let word = s.slice(j + 1, j + 1 + len);

        result.push(word);

        i = j + 1 + len;
    }

    return result;
}
}
