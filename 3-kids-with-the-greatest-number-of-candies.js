const candies = [2,3,5,1,3];
const extraCandies = 3;
let output = [];

for(let i = 0; i< candies.length; i++) {
    if(candies[i] + extraCandies >= Math.max(...candies)) {
        output.push(true);
    }
    else {
        output.push(false);
    }
}

console.log(output);