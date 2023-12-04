function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
  // console.log(this);
}

// createUser("king", 33);
// createUser("kingsss", 3333);

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

// console.log(createUser.prototype);

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

console.log(TASupport.isAvailable);

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
// setting prototype of TeachingSupport to Teacher

console.log(TeachingSupport.makeVideo);
