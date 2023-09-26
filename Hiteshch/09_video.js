// how the data is stored in memory and accessed from it 
// on basis of this datatypes are defined into two types
// 1. Primitive 
// 2. Non-primitive/Reference type

// 7 types of primitive(call by value) : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically 
// typed language. Because data 
// type will automatically 
// assigned at the time of 
// compilation or code execution



const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 2332929300937329789598n


// Reference type (Non-primitive) 
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObject = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// typeof to know datatype

console.log(typeof score)       // number
console.log(typeof scoreValue)  // number
console.log(typeof isLoggedIn)  // boolean
console.log(typeof outsideTemp) // object
console.log(typeof userEmail)   // undefined
console.log(typeof id)          // symbol
console.log(typeof bigNumber)   // bigint
console.log(typeof heros)       // object
console.log(typeof myObject)    // object
console.log(typeof myFunction)  // object function