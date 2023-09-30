// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// NOTE Interview
// Array create the shallow copy (reference is assigned)
// means share the same reference pt

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // just remove last value

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); 
// if index not found returns -1

// const newArr = myArr.join()
// join() methods convert array into string

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 
// last element is not counted (3) 
// and array is not cut of the range

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ] original array not cuted


const myn2 = myArr.splice(1, 3) // 3 => indicate no. of elements
// In splice last element is not included 
//  included range elements
// are also cut from it
console.log("C ", myArr); // C  [ 0, 4, 5 ] original array cuted
console.log(myn2); // [ 1, 2, 3 ]

// SPLICE METHOD IMPORTANT
// const myArr = [0, 1, 2, 3, 4, 5, 6]
// const myArr1 = [0, 1, 2, 3, 4, 5, 6]


// const myn = myArr.splice(0, 3)
// const myn2 = myArr1.splice(1, 3)

// console.log(myn); // [ 0, 1, 2 ]
// console.log(myn2); // [ 1, 2, 3 ]