// Scope

// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20  
    console.log("Inner", a);
}

console.log(a);
// console.log(b);
// console.log(c);

// INTERVIEW
// browser console has different 
// scope and code environment 
// node has different scope