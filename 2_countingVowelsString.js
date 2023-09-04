//http://web.archive.org/web/20220104175429/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/counting-the-vowels-in-a-string-of-text
const Vowels = ["a", "e", "i", "o", "u"];

//regular expresion
function vowelsCounter(word) {
  //using regex
  //i, case insensitive match
  //g, global search, continue searching from the end of previous match
  let matchingInstances = word.match(/[aeiou]/gi);

  if (matchingInstances) return matchingInstances.length;
  else return 0;
}

//iteration approach (loop)

// function vowelsCounter(word){
//   //Initialze counter
//   let counter = 0

//   //Loop through text
//   for(let letter of word.toLowerCase()){
//     if(Vowels.includes(letter)){
//       counter++
//     }
//   }

//   return counter
// }

console.log(vowelsCounter("anehizxcv"), "3");
