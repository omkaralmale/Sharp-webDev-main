const _name_ = function (n)
{
    for (let index = 0; index < n; index++) {
        let string='';
        for (let index2 = 0; index2 < n-index ; index2++) {
            string += "*";
        }
        console.log(string);
    }
}
let n=5;
const result = _name_(n);
console.log(result);
