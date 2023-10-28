const largestNumber3 = function (a, b, c)
{
    return a > b && a > c ? a : b > c ? b : c;
}
let a = 10;
let b = 20;
let c = 30;
const result = largestNumber3(a, b, c);
console.log(result);
