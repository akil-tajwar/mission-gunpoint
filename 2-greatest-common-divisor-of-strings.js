const str1 = "AZBDE";
const str2 = "ABCABDZ";
let output = "";

for(let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2.length; j++) {
        if(str1[i] === str2[j]) {
            output += str1[i];
            break;
        }
    }

    // if(str1[i] === str2[i]) {
    //     output += str1[i];
    // }
}
console.log(output);