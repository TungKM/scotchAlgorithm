//http://web.archive.org/web/20210226224607/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/palindromes

//loop through and compare characters(Optimized)
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }

  return true;
}

//loop through and compare characters
//redundant occur after checking the first half of the word
// function palindrome(word){
//   let charWordArr = word.split('')

//   return charWordArr.every((letter, index) => {
//     return letter === word[word.length - index - 1]
//   })
// }

//intuitive approach (methods)
// function palindrome(word){
//   let reverse = word.split('').reverse().join('')

//   return word === reverse
// }

console.log(palindrome("tenet"), "true");
console.log(palindrome("waku"), "false");
