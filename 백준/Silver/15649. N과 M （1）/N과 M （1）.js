const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split(" ");


for (let i = 0; i < input.length; i++) {
  input[i] = parseInt(input[i]);
}

function dfs(arr) {
  if (arr.length == input[1]) {
    console.log(arr.join(" "));
  } 
    for (let i = 1; i <= input[0]; i++) {
      if (arr.indexOf(i) != -1) { //중복이면 
        continue;
      }
      dfs([...arr, i]); 
    }
  
}
dfs([]);
