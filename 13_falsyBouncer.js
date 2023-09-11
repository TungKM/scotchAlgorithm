//http://web.archive.org/web/20211205091846/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/falsy-bouncer

// //for...of loop
// function falsyBouncer(arr){
//   let result = []

//   for(let element of arr){
//     if(element)
//       result.push(element)
//   }

//   return result
// }

// filter method
function falsyBouncer(arr) {
  let result = [];

  result = arr.filter((element) => Boolean(element));

  return result;
}

console.log(falsyBouncer([1, 0, null, "", 5]), "[1, 5]");
