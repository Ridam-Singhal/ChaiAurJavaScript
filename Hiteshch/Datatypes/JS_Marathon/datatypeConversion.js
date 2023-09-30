// Primitive values
// undefined, null, strings, numbers: No Change

let myString = "Hitesh"
myString.toLowerCase()
// Above line return a new string they do not change original string

// objects are mutable (You can change them)

let myObject = {
    name: "Hitesh",
}

myObject.name = "notHitesh"
myObject.lastName = "Choudhary"

//  array are also mutable

let heroScore = [2, 4, 5, 6, 1]
heroScore[1] = 5

// object are called as reference types
//  references is assigned

let arrayRef = [1, 2]

let anotherArrayRef = arrayRef

anotherArrayRef[0] = 5
// console.log(arrayRef);
// console.log(arrayRef === anotherArrayRef);

let yetAnotherArray = Array.from(arrayRef)
// console.log(yetAnotherArray === arrayRef);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// type conversion
// JS gets what JS objects

10 + "objects" // "10 objects"
"7" * "4" // 28

let num = 1 - "x"
// console.log(num)
// console.log(num + " objects")

// true gets to 1 
// false, "" gets to 0

// forcefull conversion

Number("3")
let infosysStock = 1600.4343
infosysStock.toFixed(2)

// console.log(Boolean(""));
// console.log(Boolean([]));

// converting objects to primitive value 

// 3 algorithms that define this conversion

// 1. prefer-string
// 2. prefer-number
// 3. No-preference

let colorValue = 14
let binaryColorValue = colorValue.toString(2)
// console.log(binaryColorValue);

// console.log({1: "one"}.toString())
let newDate = new Date(2022, 1, 1)

// console.log(newDate.valueOf())

// preferNumber => valueof() => toString()
// preferString => toString() => valueof()

// [] => "" => 0 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Video 2 of it

