const word1 = "abcdefg";
const word2 = "pqr";
let output = "";

function alternateString(word1, word2) {
    for(let i = 0; i < word1.length || i < word2.length; i++) {
        if(i < word1.length) {
            output += word1[i];
        }
        if(i < word2.length) {
            output += word2[i];
        }
    }
    return output;
}

console.log(alternateString(word1, word2));
