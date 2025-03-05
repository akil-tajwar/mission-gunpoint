const candies = [2,3,5,1,3];
const extraCandies = 3;
let output = [];

function kidsWithCandies(candies, extraCandies) {
    for(let i = 0; i< candies.length; i++) {
        if(candies[i] + extraCandies >= Math.max(...candies)) {
            output.push(true);
        }
        else {
            output.push(false);
        }
    }
    return output;
}

console.log(kidsWithCandies(candies, extraCandies));