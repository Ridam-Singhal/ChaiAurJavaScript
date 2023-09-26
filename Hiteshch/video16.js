// singleton => when object is 
// made using constructor only 
// one object of this type
// object.create => constructor

// when declared with literal 
// singleton is not made 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// object literals 

const mySym = Symbol("key1")

// by default in js object keys 
// is stored as "name"
const Jsusers = {
    name: "hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // square bracket to access symbol inside object
    // interview
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// object can be accessed using 
// square brackets
// Jsuser["name"]

// console.log(Jsusers.email);
// console.log(Jsusers["email"]); // interview

// console.log(Jsusers["full name"]);
// console.log(Jsusers[mySym]); // accessing symbol

Jsusers.email = "hitesh@chatgpt.com"

// Object.freeze(Jsusers) // freezing object now no change

Jsusers.email = "hitesh@microsoft.com"

// console.log(Jsusers);

Jsusers.greeting = function() {
    console.log("Hello JS users");
}

Jsusers.greetingTwo = function() {
    console.log(`Hello JS users ${this.name}`);
}

// console.log(Jsusers.greeting);
// console.log(Jsusers.greeting());
// console.log(Jsusers.greetingTwo());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Symbol

const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
// although store same string but symbol
// always return unique value

// console.log(sym2 === sym3); // false

// console.log(typeof sym2); // symbol

// const sym = new Symbol(); // TypeError Symbol is not constructor
// you cannot create wrapper object of symbol like this(above sym)

// If you really want to create a Symbol wrapper object, 
// you can use the Object() function

const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"

console.log(sym2);