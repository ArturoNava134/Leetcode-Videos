//Declarations
let nums1 = [2, 7, 11, 15];
let nums2 = [3, 2, 4];
let nums3 = [3,3];

let target1 = 9;
let target2 = 6;
let target3 = 6;

//Brute force Solution. (inefficient)
function twoSumBruteForce(nums, target){
  // we declare the first loop to be static while we check the rest of the array.
  for (let i = 0; i < nums.length; i++){
    //we declare the second loop to compare the i value with the rest of the array.
    for(let j = i + 1; j < nums.length; j++){
      console.log("position i: ", i);
      console.log("position j: ", j);
      console.log("value i:", nums[i]);  
      console.log("value j:", nums[j]); 
      console.log("the sum ", nums[i], "+", nums[j], " is ", nums[i]+nums[j]);
      // for each iteration we check if the number in the position i is 
      if(nums[i] + nums[j] === target){
        console.log("which is equal to the target, answer: ", i, j);
        return [i, j];
      }else{
        console.log("which is not equal to the target", target, ".");
      }
    }
  }
}

function twoSumOPHashMap(nums, target) {
  //first we declare the hashmap to save the data we need.
  const complements = new Map();
  // we create the only one loop in the solution.
  for (let i = 0; i < nums.length; i++) {
      console.log("loop ------- ", i+1);
      //in this line we're searching if we have the current value we're looping stored as a key in the hash map
      //if we have something, the value of the hashmap(i) will be stored on the complementIndex constant if not it will be
      //undefined.
      const complementIndex = complements.get(nums[i]);

      console.log("position: ", i, "value: ", nums[i]);
      console.log("looking for key:", nums[i]);
      console.log("map:", complements);
      //here we check if the variable is different to undefined
    if (complementIndex !== undefined) {
      console.log("key found in the map: ", nums[i]);
      //if is not undefined we can return the current position and the value of the hashmap. 
      console.log("answer:", "current index:", i, "hasmap value:", complementIndex);
      return [i, complementIndex];
    }
    //if the complementIndex is undefined, we save the subtraction of the target minus the current number on the position i
    //as the key of the hashmap, and we store the current index as the value in the hashmap.
    console.log("key not found.");
    complements.set(target - nums[i], i);
    console.log("substraction: ", target, " - ", nums[i], " = ", target-nums[i], "hashmap stored key:", target-nums[i], "value: ", i);
  }
  return []; 
}
//call
twoSumOPHashMap(nums2, target2);