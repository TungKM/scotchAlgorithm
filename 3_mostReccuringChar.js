//http://web.archive.org/web/20210919070232/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/finding-the-most-recurring-character

//ES6 Array method
function maxReccurChar(word) {
  let obj = {};
  let charArr = [];
  let numArr = [];
  let maxCharValue = 0;

  for (let char of word) {
    if (obj.hasOwnProperty(char)) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  charArr = Object.keys(obj);
  numArr = Object.values(obj);
  maxCharValue = Math.max(...numArr);

  return charArr[numArr.indexOf(maxCharValue)];
}

//character mapping
//For in Iteration
// function maxReccurChar(word){
//   let obj = {}
//   let maxChar = ''
//   let maxValue = 0

//   for(let char of word){
//     if(obj.hasOwnProperty(char)){
//       obj[char]++
//     }
//     else{
//       obj[char] = 1
//     }
//   }

//   for(let char in obj){
//     if(obj[char] > maxValue){
//       maxChar = char
//       maxValue = obj[char]
//     }
//   }

//   return maxChar
// }

console.log(maxReccurChar("aabacda"), "a");
