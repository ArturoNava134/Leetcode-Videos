// 声明变量
let nums1 = [2, 7, 11, 15];
let nums2 = [3, 2, 4];
let nums3 = [3,3];

let target1 = 9;
let target2 = 6;
let target3 = 6;

// 暴力解法 (效率很低)
function twoSumBruteForce(nums, target){
  // 外层循环：固定一个数，用于和数组的其余部分进行比较。
  for (let i = 0; i < nums.length; i++){
    // 内层循环：将外层循环的数与它之后的所有数进行比较。
    for(let j = i + 1; j < nums.length; j++){
      console.log("位置 i: ", i);
      console.log("位置 j: ", j);
      console.log("值 i:", nums[i]);  
      console.log("值 j:", nums[j]); 
      console.log("两数之和 ", nums[i], "+", nums[j], " 是 ", nums[i]+nums[j]);
      // 在每次迭代中，我们检查位置 i 和 j 的数之和是否等于目标值
      if(nums[i] + nums[j] === target){
        console.log("这个和等于目标值，答案是: ", i, j);
        return [i, j];
      }else{
        console.log("这个和不等于目标值", target, ".");
      }
    }
  }
}

function twoSumOPHashMap(nums, target) {
  // 首先，我们声明一个哈希表来存储所需的数据。
  const complements = new Map();
  // 这是解法中唯一的循环。
  for (let i = 0; i < nums.length; i++) {
      console.log("循环 ------- ", i+1);
      // 在这一行，我们检查当前遍历的数值是否已作为键存在于哈希表中。
      // 如果存在，哈希表中的值（即配对值的索引）会被存入 complementIndex 常量中，否则 complementIndex 会是
      // undefined。
      const complementIndex = complements.get(nums[i]);

      console.log("位置: ", i, "值: ", nums[i]);
      console.log("正在查找的键:", nums[i]);
      console.log("哈希表:", complements);
      // 这里我们检查变量是否不为 undefined
    if (complementIndex !== undefined) {
      console.log("在哈希表中找到键: ", nums[i]);
      // 如果它不为 undefined，我们就可以返回当前索引和哈希表中存储的值。
      console.log("答案:", "当前索引:", i, "哈希表中的值:", complementIndex);
      return [i, complementIndex];
    }
    // 如果 complementIndex 是 undefined，我们就计算出目标值与当前数的差值，
    // 将这个差值作为键，当前的索引作为值，存入哈希表中。
    console.log("未找到键。");
    complements.set(target - nums[i], i);
    console.log("计算差值: ", target, " - ", nums[i], " = ", target-nums[i], "存入哈希表的键:", target-nums[i], "值: ", i);
  }
  return []; 
}

twoSumOPHashMap(nums2, target2);