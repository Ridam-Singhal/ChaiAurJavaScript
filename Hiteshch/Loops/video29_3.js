const coding = ["js", "ruby", "java", "python", "cpp"]

// callbackfn doesn't have a name

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// printMe it gives reference
// printMe() it executes function

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})