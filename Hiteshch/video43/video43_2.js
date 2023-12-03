let myName = "hitesh    ";

// console.log(myName.truelength());
// console.log(myName.trim().length);

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`\nHitesh is present in all objects\n`);
};

Array.prototype.heyHitesh = function () {
  console.log(`\n Hitesh says hello\n`);
};

// heroPower.hitesh();
// myHero.hitesh();
// myHero.heyHitesh();
// heroPower.heyHitesh();

// Inheritance

const user = {
  name: "chai",
  email: "chai@google.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// Modern syntax

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "ChaiAurCode      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is ${this.trim().length}`);
};

anotherUsername.trueLength();
