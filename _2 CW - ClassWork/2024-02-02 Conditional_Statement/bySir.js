// statement vs expression
// let a = 12;
// let b = 12;
// let c = a + b;
// console.log(c); // statement

// 1+2  = 3 // expression

// Symbol & Switch in JavaScript

// Conditional Statements
// if(koi condition){
// IF STATEMENT BLOCK
// }else {
// ELSE STATEMENT BLOCK
// }

// simple if
// let raining = true;
// if (raining === true) {
//     console.log("take an umbrella");
// }

// Simple if-else
// if (raining === true) {
//     console.log("take an umbrella");
// } else {
//     console.log("there is no need of umbrella");
// }

// ladder/multiple if-else
// let nojs = false;
// let nocode = false;
// let nods = false;

// if (nojs === true) {
//     console.log("learn js");
// } else if (nocode === true) {
//     console.log("learn to code");
// } else if (nods === true) {
//     console.log("learn ds");
// } else {
//     console.log("abb rhne dete hain");
// }

// nested if-else
// let leaveearly = false;
// let alone = false;
// if (leaveearly === true) {
//     if (alone === true) {
//         console.log("smoke cigarette");
//     } else {
//         console.log("go with the flow");
//     }
// } else {
//     console.log("seedha khana kahun-ga/gi");
// }

// converting nested to ladder
// let leaveearly = true;
// let alone = true;
// if (leaveearly === true && alone === true) {
//     console.log("smoke cigarette");
// } else if (leaveearly === true && alone === false) {
//     console.log("go with the flow");
// } else {
//     console.log("seedha khana kahun-ga/gi");
// }

// terneary operator/exp / if-else expression
let raining = false;
//let res =  condition ? if-stmt : else-stmt
let result =
    raining === true ? "take an umbrella" : "there is no need of umbrella";

console.log(result);