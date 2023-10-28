const _name_ = function (num)
{
    let temp=num; // original number vanishing during while loop
    let sum=0;
    while(num > 0){
        let rem = num % 10;
        sum+=rem*rem*rem;
        num = Math.floor(num / 10)
    }
    if(sum == temp){
        return true;
    }else{
        return false;
    }
}
let num=153;
let num2=123;
const result = _name_(num);
const result1 = _name_(num2);
console.log(result);
console.log(result1);
