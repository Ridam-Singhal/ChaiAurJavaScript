const today = new Date()
// console.log(today);

const birthday = new Date("2023-09-11T05:24:00")
// console.log(birthday);

const birthday2 = new Date(2022, 0, 1)
// console.log(birthday2);
// ! Important(output) 2021-12-31T18:30:00.000Z


// Formats of toString method return values

const date = new Date(2023, 8, 11, 18, 35, 20)

// console.log(date.toString()); // Mon Sep 11 2023 18:35:20 GMT+0530 (India Standard Time)

// console.log(date.toDateString()); // Mon Sep 11 2023

// console.log(date.toTimeString()); // 18:35:20 GMT+0530 (India Standard Time)

// console.log(date.toISOString()); // 2023-09-11T13:05:20.000Z

// console.log(date.toJSON()); // 2023-09-11T13:05:20.000Z

// console.log(date.toLocaleString());  11/9/2023, 6:35:20 pm

// console.log(date.toLocaleDateString()); // 11/9/2023

// console.log(date.toLocaleTimeString()); // 6:35:20 pm


// To get Date, Month and Year or Time

const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear()
]

// console.log([month, day, year]);

const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
]

// console.log([hour, minutes, seconds]);

