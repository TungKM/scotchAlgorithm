//http://web.archive.org/web/20211205091743/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/combining-arrays-without-duplicates

function flattenArray(...arr) {
  let tempArray = [];

  arr.forEach((array) => {
    tempArray = [...tempArray, ...array];
  });

  return tempArray;
}

//sets
// function mergeArrays(...arrays){
//   let jointArray = flattenArray(...arrays)

//   return [...new Set([...jointArray])]
// }

//filter method
// function mergeArrays(...arrays){
//   let jointArray = flattenArray(...arrays)

//   const uniqueArr = jointArray.filter((e, i) => jointArray.indexOf(e) === i)

//   return uniqueArr
// }

//reduce method
function mergeArrays(...arrays) {
  let jointArray = flattenArray(...arrays);

  const uniqueArr = jointArray.reduce((acc, e) => {
    if (acc.includes(e)) return acc;
    else return [...acc, e];
  }, []);

  return uniqueArr;
}

console.log(mergeArrays([1, 2, 3, 3, 3], [1, 4, 5, 2]), "[1,2,3,4,5]");
