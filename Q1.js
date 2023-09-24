// ...............................Q1...........................
var nums = [3, 2, 2, 3];
var val = 3;

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
   }

  return k;
}

const solution = removeElement(nums, val);
console.log(solution); // 2
