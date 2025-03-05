const str1 = "AZBDE";
const str2 = "ABCABDZ";
let output = "";

function gcdOfStrings(str1, str2) {
    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str2.length; j++) {
            if(str1[i] === str2[j]) {
                output += str1[i];
                break;
            }
        }
    }
    return output;
}

console.log(gcdOfStrings(str1, str2));