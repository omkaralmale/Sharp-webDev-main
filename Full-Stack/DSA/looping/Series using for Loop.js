const _name_ = function (n)
{
    for (let length = 1; length*length*length <= n; length++) {
        console.log(length*length*length);
    }
}
let n=125;
const result = _name_(n);
console.log(result);
