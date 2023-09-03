//ES6 Reduce
function reverseString(word) {
  return [...word].reduce((acc, element) => element + acc, "");
}

//Reduce
// function reverseString(word){
//   return word.split('').reduce((acc, element) =>
//      element + acc, ''
//   )
// }

//Recursive
// function reverseString(word){
//   //terminal case
//   if(word === ""){
//     return ""
//   }

//   return reverseString(word.substr(1)) + word[0]
// }

//ES6 for loop
// function reverseString(word){
//   let result = ""

//   for(let char of word){
//     result = char + result
//   }

//   return result
// }

//For loop
// function reverseString(word){
//   let result = ""

//   for(let i = word.length - 1; i >= 0; i--){
//     result += word[i]
//   }

//   return result
// }

//ES6 chainning
// let reverseString = (word) => {
//   return [...word].reverse().join('')
// }

//chaining in-built methods
// function reverseString(word){
//   return word.split('').reverse().join('')
// }

console.log(reverseString("aglorithms"), "smhtirogla");
