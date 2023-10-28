//// call apply bind
// call invoke directly
//apply take array
//bind gives copy of function and invoke later
//
//
//
//
// const obj = { num: 2 };
// const functionName = function (para1, para2, para3) {
//   return;
// };
// //call
// functionName.call(obj, args1, args2, args3);
// //apply
// functionName.apply(obj, [args1, args2, args3]);
// //bind
// const bound=functionName.bind(obj);
// bound(args1,args2,args3);
//
//
//
////Call attache function to objects
// const obj = { name: "Om" };
// var addSurname = function (sname) {
//   return this.name + " " + sname;
// };
// console.log(addSurname.call(obj, "Almale"));
//// Output  Om Almale

// const obj = { pre: "Mr." };
// const age = { age: 25 };
// const addFullName = function (a, b, c) {
//   return this.pre + " " + a + " " + b + " " + c;
// };
// console.log(addFullName.call(obj, "om", "balaji", "almale"));
//// Mr. om balaji almale

////apply
// const obj = { pre: "Mr." };
// const age = { age: 25 };
// const addFullName = function (a, b, c) {
//   return this.pre + " " + a + " " + b + " " + c;
// };
// const arr = ["om", "balaji", "almale"];
// console.log(addFullName.apply(obj, arr));

////Bind
// const obj = { pre: "Mr." };
// const addFullName = function (a, b) {
//   return this.pre + " " + a + " " + b;
// };
// const bound = addFullName.bind(obj);
// console.log(bound("om", "almale"));
//// output :- mr. om almale
//
//
//
//
//
// //Example 1
// var obj = {
//   val: 100,
// };
// function fun() {
//   console.log(this.val);
// }
// fun();// undefined

////Example 2
// var obj = {
//   val: 100,
// };
// function fun() {
//   console.log(this.val);
// }
// obj.fun();// type error obj.fun() not a function

////Example 3
// var obj = {
//   val: 100,
// };
// function fun() {
//   console.log(this.val);
// }
// fun.call(obj);//100

////example 4
// var obj = {
//   val: 100,
// };
// function fun(a) {
//   console.log(this.val + a);
// }
// fun.call(obj);//NaN

////example 5
// var obj = {
//   val: 100,
// };
// function fun(a) {
//   console.log(this.val + a);
// }
// fun.call(obj, 3);//103

////example 6
// var obj = {
//   val: 100,
// };
// function fun(a, b, c) {
//   console.log(this.val + a + b + c);
// }
// fun.call(obj, 3, 4, 5);  //112

////example 7
// var obj = {
//   val: 100,
// };
// function fun(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// fun.call(obj, [3, 4, 5]);   //[ 3, 4, 5 ]undefined undefined

////example
// var obj = {
//   val: 100,
// };
// function fun(a, b, c) {
//   console.log(this.val + a + b + c);
// }
// fun.apply(obj, [3, 4, 5]);  //112

////example
// var obj = {
//   val: 100,
// };
// function fun(a, b, c) {
//   console.log(this.val + a + b + c);
// }
// const fun2 = fun.bind(obj);
// fun2(1, 2, 3); //106
