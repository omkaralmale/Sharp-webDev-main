const _name_ = function (n)
{
    let count = 1;
    while (count <= n) {
        if (count %2 == 0) {
            console.log(count);
        }
        count++;
    }
}
let n=10;
const result = _name_(n);
// console.log(result);
