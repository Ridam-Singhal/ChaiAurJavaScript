const marvelHeors = ["thor", "Ironman", "Spiderman"]
const dcHeors = ["superman", "flash", "batman"]

// marvelHeors.push(dcHeors)

// console.log(marvelHeors);
// console.log(marvelHeors[3]);
// console.log(marvelHeors[3][1]);

// const allHeros = marvelHeors.concat(dcHeors)
// console.log(allHeros);

const allNewHeros = [...marvelHeors, ...dcHeors]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(1)
// console.log(realAnotherArray);


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))

console.log(Array.from({name: "hitesh"})) // Interesting case for interview 
// cannot convert object to array direct

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// isArray

// Little known fact: Array.prototype itself is an array:
console.log(Array.isArray(Array.prototype))

// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
console.log(Array.isArray({ __proto__: Array.prototype }))

// Array.of
Array.of(undefined); // [undefined]