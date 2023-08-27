//http://web.archive.org/web/20220104181854/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/anagrams

//character map comparison
function createCharMap(word) {
  let obj = {};

  for (let char of word.split("")) {
    if (obj.hasOwnProperty(char)) obj[char]++;
    else obj[char] = 1;
  }

  return obj;
}

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  let charAMap = createCharMap(word1);
  let charBMap = createCharMap(word2);

  for (let char in charAMap)
    if (charAMap[char] !== charBMap[char]) return false;

  return true;
}

console.log(isAnagram("listen", "silent"), "true");
