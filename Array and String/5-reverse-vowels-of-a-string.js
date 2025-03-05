const s = "IceCreAm";

function reverseVowels(s) {
    let vowels = s.match(/[aeiou]/gi);
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (/[aeiou]/i.test(s[i])) {
            result += vowels.pop();
        } else {
            result += s[i];
        }
    }
    return result;
}
console.log(reverseVowels(s));