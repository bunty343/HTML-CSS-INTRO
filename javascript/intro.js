// variable declaration
// var myVar = "Bunty" // declared a variable, but have not assigned a value
// console.log("myVar", myVar) // var is not defined - undefined (valid data type/ value)
// hoisted

// ourName = "Bunty" // "Bunty" string -> assigned a value of "Bunty"
// console.log("ourName", ourName)

// other data types - 5 main primitive data type
// undefined, null, boolean, string, number
// myVar = null
// console.log("type", typeof myVar)
// JS goes through 2 phases: 1) memory allocation phase 2) execution phase

// console.log(myVar = 10) -> = is the assignment operator
// == or === is the comparison operator

// let myVar
// console.log(23%5) // modeulo ( in this moudelo is 3)

// write function to determine odd or even

// let myVar = 3

// function isOdd(number) {   
//     // const myVar = 10  
// const remainder = number % 2
// console.log(myVar)
// if ( remainder === 1 ){
//     return true
// } else {
//     return false
// }
// }
// console.log(isOdd(55))

// console.log ('my function is done')

// javascript object => collection of key, key value pairs that are related to particular objects.
// const dog = {
// numOfLegs: 4,
// numOfEyes : 2,
// name : "Sparky"
// isAlive: true
// //
// bark: function () {
//     console.log ('ruff ruff')
// }
// }
// console.log(dog) // object oriented programming

// const myStr = "sccsjcdcccc"
// console.log(myStr.length)

// javascript arrays []
// diff bw arrays and objects
// 1 arrays are not key values pairs
// 2. inside of array , the order of items matter - unside object, the order of key / value pairs donot matter
// elements (items) inside of arrays do not have to be unique - inside objects, keys have to unique
// const myEmptyArr = []
// const myArr = ['item1',"item1",1, true,null,undefined,dog, myEmptyArr, {},[]]


// console.log(myArr)
// Write a function called “add” that takes in 2 numbers and returns their added value.
var sum = add(12, 13);

function add (a, b) {
  return a + b;
}
console.log(sum);
//Write a function called “divide” that takes in 2 numbers and returns the divided value.

var sum = divide(12, 13);

function sum(a, b) {
  return a * b;
}
console.log(sum);
// Write a function called “convert” that takes in a fahrenheit value and converts it into celsius. The formula for conversion is :  Celsius = (Fahrenheit  - 32) * 5/9

function toCelsius(f) {
    return (5/9) * (f-32);
  }
// Write a function called “divisibleBy55” that takes in a number and will return either true or false to let us know whether the number is divisible by 55 or not. If a number is divisible by 55 that means that there are 0 remainders.
var divide = myFunction(44, 33);
function myFunction(a, b) {
  return a / b;
}
console.log(divide)
let myVar = 10
function divisibleBy55(number) {   
const remainder = number % 2
console.log(myVar)
if ( remainder === 0 ){
    return true
} else {
    return false
}
}
console.log(divisibleBy55(55))

// Write a function called “checkLength” that takes in a string and return a number indicating the string’s length.

 const checkLength = "Waterfall"
 console.log(checkLength.length)

 // Write a function called “concat” that takes in 2 strings and returns the concatenated string. Ex: “cat” and “dog” will return “cat dog”.


const conCat1 = "Hindu";
const conCat2 = "Stan";
const concat = ""  + conCat1 + conCat2
console.log(concat); 




































