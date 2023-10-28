const _name_ = function (n)
{
    for (let length = 0; length <= n; length+=2) {
        if (length%4 == 0) {
            continue;
        }
        console.log(length);
    }
}
let n=10;
const result = _name_(n);
// console.log(result);