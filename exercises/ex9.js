/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/
const camelCase = function(input) {
  let str =""
  for(let i = 0; i < input.length; i++){
    // console.log(input[i])
    if(input[i] === " "){
      // str += input[i]
    }else if(input[i - 1] === " "){
      str += input[i].toUpperCase()
    }else{
      str += input[i]
    }
  }
  console.log(str)
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

