const course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course 

// console.log(courseInstructor);
// console.log(instructor);

const person = {
    firstName: "John",
    lastName: "Doe"
}

// if the variables have the same names as 
// the properties of the object, you can 
// make the code more concise as follows:

let { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// API

// { // JSON
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[ // another JSON of array
    {},
    {},
    {}
]