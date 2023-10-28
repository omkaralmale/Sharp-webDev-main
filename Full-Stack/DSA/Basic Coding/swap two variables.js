const swapVariables = function (a,b)
{
    let temp=a=a;
    a=b;
    b=temp;
    console.log(a,b);
}
let a=10;
let b=20;
const result = swapVariables(a,b);
