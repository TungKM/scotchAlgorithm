//http://web.archive.org/web/20210315172511/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/sentence-capitalization

//.map .replace method
function capSentence(text) {
  let textArr = text.toLowerCase().split(" ");

  let capsArr = textArr.map((word) =>
    word.replace(word[0], word[0].toUpperCase())
  );

  return capsArr.join(" ");
}

//.map .slice method
// function capSentence(text){
//   let textArr = text.toLowerCase().split(' ')
//   let capsArr = textArr.map(word => word[0].toUpperCase() + word.slice(1))

//   return capsArr.join(' ')
// }

//forEach method
// function capSentence(text){
//   let capsArr = []
//   let textArr = text.toLowerCase().split(' ')

//   textArr.forEach(word =>
//     capsArr.push(word[0].toUpperCase() + word.substr(1))
//   )

//   return capsArr.join(' ')
// }

console.log(capSentence("the tales of scotch!"), "The Tales Of Scotch!");
