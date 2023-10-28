const _name_ = function (num)
{   let str='';
    while (num>0) {
        let rem = num % 10;
        str += rem;
        num =Math.floor(num / 10);
    }
    return str;
}
let num=123;
const result = _name_(num);
console.log(result);