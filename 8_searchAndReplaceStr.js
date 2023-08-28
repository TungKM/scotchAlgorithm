//http://web.archive.org/web/20211119122648/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/search-and-replace

//replace method
function searchReplace(text, originalWord, replaceWord) {
  if (originalWord.toLowerCase() === text.split(" ")[0].toLowerCase()) {
    replaceWord = replaceWord[0].toUpperCase() + replaceWord.slice(1);
    originalWord = originalWord[0].toUpperCase() + originalWord.slice(1);
  }

  return text.replace(originalWord, replaceWord);
}

console.log(
  searchReplace("He is sleeping on te couch", "he", "sitting"),
  "He is sitting on the couch"
);
