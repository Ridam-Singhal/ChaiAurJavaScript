// Arrow functions

// this refer to current context

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website `);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);
// when we are in node this 
// refer to empty object {}

// browser
// this refer to window object 

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// this does not work in function
// it needs object to work

// const addTWo = (num1, num2) => {
//     return num1 + num2
// }

// const addTWo = (num1, num2) =>  num1 + num2
// const addTWo = (num1, num2) =>  {num1 + num2} // return keyword will used

const addTWo = (num1, num2) =>  ({username: "hitesh"})

// console.log(addTWo(3, 4));

