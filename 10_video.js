// Two types of memory
// Stack (Primitive), Heap (Non- Primitive)

// Stack memory is used we get
//  the copy of variable we used 
//  means change in variable is 
//  not displayed in original 
//  variable


// Heap memory is used we get 
// the reference of variable we 
// used means change in reference 
// displayed in original variable

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo["email"] = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email); 