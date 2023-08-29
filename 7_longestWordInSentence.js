//http://web.archive.org/web/20220104180334mp_/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/finding-the-longest-word-in-a-sentence

//sort method
function longestWord(text) {
  return text.split(" ").sort((wordA, wordB) => wordB.length - wordA.length)[0];
}

//reduce method
// function longestWord(text){
//   return text.split(' ').reduce((acc, element) =>
//     element.length > acc.length ? acc = element : acc, ''
//   )
// }

//For loop
// function longestWord(text){
//   let longest = ''
//   const arr = text.split(' ')

//   for(let word of arr){
//     if(word.length > longest.length)
//       longest = word
//   }

//   return longest
// }

console.log(
  longestWord("Top Shelf Web Development Training on Scotch"),
  "Development"
);
