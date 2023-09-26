// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greeting = "Hello World"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps
// No duplicate value, only unique value
// remembers insertion order of value

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set('FR',"France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":- ", value);
// }

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ":- ", value);
}
// object are not iterable by for of loop
// but map are iterable(doubtful)