const _name_ = function (m, n)
{
    for(let pointer = 1 ; pointer <= m ; pointer++){
        if (pointer == n) {
            break;
        }
        console.log(pointer);
    }
}
let m=10;
let n=4;
const result = _name_(m, n);
console.log(result);