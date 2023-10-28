const _name_ = function (num)
{
    while(num > 0){
        let rem = num % 10;
        console.log(rem);
        num = Math.floor(num / 10)
    }
}
let num=123;
const result = _name_(num);
// console.log(result);