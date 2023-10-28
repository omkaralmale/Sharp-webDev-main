// //Hoisting
/*
Hoisting:
Hoisting in JavaScript means that variable and function declarations are "lifted" to
the top of their code scope, so you can use them before they appear in your code.
*/

// // Question 1
// var a = 3;
// function printName(name) {
//   console.log(name);
// }
// printName("YAVTECH");
// console.log(a);
// YAVTECH
// 3
// Normal Execution

// // Question 2
// printName("YAVTECH");
// console.log(a);
// var a = 3;
// function printName(name) {
//   console.log(name);
// }
// YAVTECH
// Undefined
// memory was created for x but value not assigned in global scope

// //Question 3
// console.log(printName);
// console.log(a);
// var a = 3;
// var printName = (name) => {
//   console.log(name);
// };
// undefined
// undefined
// var printName and a memory created in global scope but value not assigned

// // Question 4
// console.log(printName);
// console.log(a);
// var a = 3;
// var printName = function (name) {
//   console.log(name);
// };
// undefined
// undefined
// var printName and a memory created in global scope but value not assigned
