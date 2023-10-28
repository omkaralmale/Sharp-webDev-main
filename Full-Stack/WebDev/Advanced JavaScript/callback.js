// what is callback function
/*
function pass another function and which function passed is know as callback function
*/
function x(y) {}
x(function y() {});
// here y is callback function

//example 1)

setTimeout(() => console.log("timer expired"), 1000);

function x(y) {
  console.log("inside x");

  y();
}

x(function y() {
  console.log("inside y");
});

//example 2)

setTimeout(() => console.log("timer1 expired"), 1000);

setTimeout(() => console.log("timer2 expired"), 0);

function x(y) {
  console.log("inside x");

  y();
}

x(function y() {
  console.log("inside y");
});

//example

setTimeout(() => console.log("timer1 expired"), 1000);

setTimeout(() => console.log("timer2 expired"), 0);

function x(y) {
  console.log("inside x");

  y();
}

x(function y() {
  setTimeout(() => console.log("inside y"), 0);
});
