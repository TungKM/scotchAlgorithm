//http://web.archive.org/web/20220104182025/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/where-do-i-belong

//For-loop to find the immediate larger value's position
// function whereDoIBelong(arr, value){
//   arr.sort((a,b) => a-b)
  
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > value)
//       return i
//   }

//   return arr.length
// }

//Using a For-loop to determine the number of smaller values
// function whereDoIBelong(arr, value){
//   arr.sort((a,b) => a-b)

//   for(let i = arr.length - 1; i >= 0; i--){
//     if(arr[i] < value)
//       return i + 1
//   }

//   return 0
// }

//While loop
// function whereDoIBelong(arr, value){
//   arr.sort((a,b) => a-b)

//   let i = 0
//   while(i < arr.length){
//     if(arr[i] > value)
//       return i

//     i++
//   }

//   return arr.length
// }

//index of method
function whereDoIBelong(arr, value){
    arr.push(value)
    
    arr.sort((a,b) => a-b)
  
    return arr.indexOf(value)
  }
  
  
  console.log(whereDoIBelong([1,2,3,4,5], 1.5), "1")