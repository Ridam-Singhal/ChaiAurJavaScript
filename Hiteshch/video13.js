// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate) // object

// In JS month starts with 0
// let myCreatedDate = new Date(2023, 12, 23)
// let myCreatedDate = new Date(2023, 12, 23, 5, 2)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") // when write in this format month starts with 1

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // interview question 
// to convert into seconds

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday:"long",
}))


