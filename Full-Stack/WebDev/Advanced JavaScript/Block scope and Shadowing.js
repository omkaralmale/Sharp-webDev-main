////Question 1
// var a = 50;
// {
//   var a = 30;
//   let b = 20;
//   let c = 30;
// }
// console.log(a);
////Output :- 30
////Global object var

////Question 2
// const a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a);
//// Error :- a is already declared

////Question 3
// let a = 50;
// {
//   var a = 30;
//   let b = 20;
//   let c = 30;
// }
// console.log(a);
//// Error :- a is already declared

////Question 4
// var a = 50;
// function fun() {
//   var a = 30;
//   let b = 20;
//   let c = 30;
// }
// fun();
// console.log(a);
//// Output :- 50

////Question 5
// let a = 50;
// function fun() {
//   var a = 30;
//   let b = 20;
//   let c = 30;
// }
// fun();
// console.log(a);
//// Output :- 50

////Question 6
// const a = 10;
// {
//   const a = 20;
//   {
//     const a = 50;
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);
//// Output :- 50 20 10

////Question 7
// const a = 10;
// {
//   const a = 20;
//   {
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);
//// Output :- 20 20 10
