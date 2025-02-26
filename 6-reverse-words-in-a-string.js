const s1 = "The sky is blue";
let output1 = "";

function reverseWords(s1) {
    output += s1.split(" ").reverse().join(" ");
    return output1;
}

console.log(reverseWords(s1));


//without using split, reverse, and join
const s = "The sky is blue";
let output = "";

function reverseWords(s) {
    let word = "";
    let result = "";

    // Iterate from the end to the start
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            word = s[i] + word; // Build the word
        } else {
            if (word.length > 0) {
                result += (result ? " " : "") + word; // Add word to result
                word = ""; // Reset word
            }
        }
    }

    // Add the last word (if any)
    if (word.length > 0) {
        result += (result ? " " : "") + word;
    }

    return result;
}

console.log(reverseWords(s)); // Output: "blue is sky The"
