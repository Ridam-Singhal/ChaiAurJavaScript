// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log("DB-CONNECTED");
})();

// agar do IIFE toh semicolon lagana hai

((name) => {
    console.log(`DB-CONNECTED TWO ${name}`);
})("hitesh")
