const nums = [1, 2, 3, 4];
let answer = [];

for (let i = 0; i < nums.length; i++) {
    const ans = nums.reduce((acc, cur) => acc * cur)/nums[i];
    answer.push(ans);
}

console.log(answer);