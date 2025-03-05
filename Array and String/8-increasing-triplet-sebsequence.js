const nums = [5, 4, 3, 2, 1];

function increasingTriplet(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1] < nums[i + 2]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(increasingTriplet(nums));
