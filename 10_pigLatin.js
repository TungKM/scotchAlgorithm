//http://web.archive.org/web/20220104181932mp_/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/pig-latin

//imperative approach(step by step instruction)
const Vowel = ["a", "e", "i", "o", "u"];

function pigLatin(word) {
  if (Vowel.includes(word[0])) return word + "way";

  let vowelIndex = 0;

  for (let char of word) {
    if (Vowel.includes(char)) {
      vowelIndex = word.indexOf(char);
      break;
    }
  }

  return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
}

console.log(pigLatin("pig"), "igpay");
console.log(pigLatin("glove"), "oveglay");
console.log(pigLatin("explain"), "explainway");
console.log(pigLatin("rtx"), "rtxay");
