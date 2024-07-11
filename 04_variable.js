const accoundId = 144553;
let accountEmail = "ridam@google.com";
var accoundPassword = "12345";
accountCity = "Noida"; // this is also allowed in javascript
let accountState // if console.log now it will give undefined


// accoundId = 2; // not allowed

accountEmail = "rs@yahoo.com"
accoundPassword = "889900"
accountCity = "Bengaluru"

console.log(accoundId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoundId, accountEmail, accoundPassword,accountCity,accountState])