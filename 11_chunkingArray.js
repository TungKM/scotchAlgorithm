//http://web.archive.org/web/20210919083758/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking

//Looping through array (own)
// function chunkArray(arr, size){
//   let newArr = []
//   let tempArr = []

//   for(let i = 0; i < arr.length; i++){
//     if(i !== 0 && i % 5 === 0){
//       newArr.push(tempArr)
//       tempArr = []
//     }

//     tempArr.push(arr[i])
//   }

//   newArr.push(tempArr)

//   return newArr
// }

//Looping through array
// function chunkArray(arr, size){
//   let result = []

//   for(let num of arr){
//     let lastArray = result[result.length - 1]

//     //Within the for…of loop, we use an if statement to check if our result array is currently empty or if the last sub-array created is complete i.e already of the specified size .
//     if(!lastArray || lastArray.length === size){
//       result.push([num])
//     }
//     else{
//       lastArray.push(num)
//     }
//   }

//   return result
// }

//slice method
// function chunkArray(arr, size){
//   let result = []

//   // for(let i = arr.length - 1; i >= 0 ; i--){
//   //   if(i % 5 === 0)
//   //     result.unshift(arr.slice(i, i + 5))
//   // }

//   for(let i = 0; i < arr.length; i += size){
//     let chunk = arr.slice(i, i + size)
//     result.push(chunk)
//   }
//   return result
// }

//splice method
// function chunkArray(arr, size){
//   let result = []
//   let tempArray = [...arr]

//   while(tempArray.length){
//     result.push(tempArray.splice(0, size))
//   }

//   return result
// }

//recursion
function chunkArray(arr, size) {
  //terminating condition
  if (arr.length <= size) return [arr];

  return [arr.slice(0, size), ...chunkArray(arr.slice(size), size)];
}

console.log(
  chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5),
  " [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]"
);
