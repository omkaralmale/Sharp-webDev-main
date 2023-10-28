//// Question 1
// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 1000);
// console.log("d");
//// Output :- a b d c

////Question 2
// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 1000);
// setTimeout(() => console.log("d"), 0);
// console.log("e");
////Output :- a b e d c

////Question 3
// var arr = [1, 2, 3, 5];
// var newArr = arr.forEach((item, i) => {
//   console.log(item + "index" + i);

//   return item + i;
// });
// console.log(newArr);
//// Output :- As nor loop

////Question 4
// var arr = [1, 2, 3, 5];
// var newArr = arr.map((item, i) => {
//   console.log(item + "index" + i);

//   return item + i;
// });
// console.log(newArr);
//// Output:- 1 3 5 8
////new array with item + index
