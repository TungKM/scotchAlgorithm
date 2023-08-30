//http://web.archive.org/web/20210226222551/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/hamming-distance

function hammingDistance(word1, word2) {
  let num = 0;

  if (word1 === word2) return num;

  word1.split("").forEach((e, i) => {
    if (e !== word2[i]) num++;
  });

  return num;
}

console.log(hammingDistance("rollr", "river"), 3);
