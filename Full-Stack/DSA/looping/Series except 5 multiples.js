const _name_ = function (n)
{
    while (n > 0) {
        if (n%5 == 0) {
            n--
            continue;
        }
        console.log(n--);
    }
}
let n=7;
const result = _name_(n);
// console.log(result);
