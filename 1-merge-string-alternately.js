const word1 = "abcdefg";
const word2 = "pqr";
let output = ""

for(let i = 0; i < word1.length || i < word2.length; i++) {
    if(i < word1.length) {
        output += word1[i];
    }
    if(i < word2.length) {
        output += word2[i];
    }
}
console.log(output)


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter the first word: ', (word1) => {
//     rl.question('Enter the second word: ', (word2) => {
//         let output = "";
//         for(let i = 0; i < word1.length || i < word2.length; i++) {
//             if(i < word1.length) output += word1[i];
//             if(i < word2.length) output += word2[i];
//         }
//         console.log(output);
//         rl.close();
//     });
// });
