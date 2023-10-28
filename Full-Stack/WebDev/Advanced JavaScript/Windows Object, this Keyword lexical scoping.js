// //Lexical Environment
/*
A lexical environment in JavaScript is like a special container that keeps track of variables
and functions in your code and where they are located. It helps determine which variables you
can access and how they interact with each other based on their position in your code.
*/

// //Question 1
// var a = 2;
// var c = 2;
// function b() {
//   var x = 2;
//   var c = 4;
//   console.log(c);
// }
// console.log(a);
// console.log(this.a);
// console.log(this.c);
// console.log(this.x);
// console.log(window.a);
// console.log(window.x);
// console.log(b());
// // Normal Execution  O/P:- 2 2 2 undefined 2 undefined 4

// //Question 2
// function abc() {
//   console.log(a);
// }
// var a = 7;
// abc();
// // Output:- 7

// //Question 3
// function abc() {
//   console.log(a);
// }
// abc();
// var a = 7;
// //Output:- 7

////Question 4
// function outerFunction() {
//   console.log(a);
//   var c = 10;
//   innerFunction();
//   function innerFunction() {
//     console.log(b);
//     console.log(c);
//   }
// }
// var a = 7;
// var b = 3;
// outerFunction();
////Output :- 7 3 10

////Question 5
// function outerFunction() {
//   console.log(a);
//   var a = 10;
//   innerFunction();
//   function innerFunction() {
//     console.log(a);
//     console.log(window.a);
//     console.log(this.a);
//   }
// }
// var a = 7;
// var b = 3;
// outerFunction();
//// Output :- undefined 10 7 7
