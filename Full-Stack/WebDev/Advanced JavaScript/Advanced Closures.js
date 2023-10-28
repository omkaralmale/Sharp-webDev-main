// // print each digit  second

// function print() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// print();
//
//
////EXAMPLE 1
// function y(){
// setTimeout(() => console.log("a"), 1000)
// console.log('Done Coding')
// }
// y(); //Done coding a
//
//
////example 2
// function y(){
// setTimeout(() => console.log("a"), 0)
// console.log('Done Coding')
// }
// y();//Done Coding  a
//
//
////example 3
// function y(){
// for(var i=1;i<6;i++){
// setTimeout(() => console.log(i ), i * 1000)
// }
// console.log('Done Coding')
// }
// y();    //coding done 666666
//
//
////example 4
// function y(){
// for(let i=1;i<6;i++){
// setTimeout(() => console.log(i ), i * 1000)
// }
// console.log('Done Coding')
// }
// y();    //done coding  012345
//
//
////example
////Can you complete the following function "name" so
//// that it prints as per the comments.
// const name = (arr) => {
//   let index = 0;
//   return function () {
//     if (index < arr.length) {
//       console.log(`hello ${arr[index++]}`);
//     }
//   };
// };
// let fun = name(["Ram", "Shyam"]);
// fun(); // Print Hello Ram
// fun(); //print Hello Shyam
