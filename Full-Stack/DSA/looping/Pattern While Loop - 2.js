const _name_ = function (n)
{
    while(n>0){
        let string='';
        let pointer=0;
        while(pointer < n){
            string += '*';
            pointer++;
        }
        console.log(string);
        n--;
    }
}
let n=5;
const result = _name_(n);
console.log(result);
