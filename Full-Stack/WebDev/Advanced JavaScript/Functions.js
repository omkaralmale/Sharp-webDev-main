//Function statement
//Function Deceleration
function a() {
  console.log(" ");
}

//Function Expression
//Anonymous Function
const add = function () {
  console.log("add");
};

//Named Function
const addition = function sum() {
  console.log("Sum");
};

//First class function
// ability to use function as value pass and return function
function a(b) {
  console.log(b);
}
function b() {
  return function () {
    console.log(1);
  };
}
a(b);

//Arrow Function
const add1 = () => 1 + 2;

const sub = (args) => {
  //write code
};

//curring
//one function returning another function and we calling both
function addConst(value) {
  return (value2) => {
    return () => value + value2;
  };
}
console.log(addConst(15)(15)());

const ans = addConst(10);
console.log(ans(20)());
