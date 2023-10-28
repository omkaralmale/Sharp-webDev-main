/*
Closures:
a function bind together with their lexical scope
a function with their lexical scope
*/

////Question 1
// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
//// Output :- 10

////Question 2
// function x() {
//   let a = 10;
//   function y() {
//     return a;
//   }
//   console.log(y());
// }
// x();
//// Output:- 10

////Question 3
// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// console.log(x());
//// Output:- Reference of y

////Question 4
// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// const z = x();
// console.log(z());
//// Output :- 10 undefined

////Question 5
// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   a = 50;
//   return y;
// }
// const z = x();
// console.log(z());
////Output:- 50 Undefined
