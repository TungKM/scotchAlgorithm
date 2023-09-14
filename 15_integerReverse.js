//http://web.archive.org/web/20220104182222mp_/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/integer-reversal

//reverses a string, using reduce
function reverseString(text){
    return [...text].reduce((acc, e, i) => e + acc,'')
  }
  
  //reverses an integer
  function reverseInteger(num){
    let result = parseInt(reverseString(num.toString()))
  
    return (result * Math.sign(num))
  }
  
  
  console.log(reverseInteger("-123"), "-321")