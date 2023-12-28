const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


//input 정리
let n = parseInt(input[0][0]);
let m = parseInt(input[0][2]);
let numbers = input[1].split(" ");
for (let i = 0; i < n; i++) {
    numbers[i] = parseInt(numbers[i]);
}
numbers.sort(function(a, b)  {
    return a - b;
})

//구하기
function dfs(arr) {
  if (arr.length == m) {
    console.log(arr.join(" "));
    return;
  } 
  for (i of numbers) {
      if ( (arr[arr.length-1]>i)) { //오름차순이 아니면
        continue;
      }
      dfs([...arr, i]); 
    }
  
}
dfs([]);