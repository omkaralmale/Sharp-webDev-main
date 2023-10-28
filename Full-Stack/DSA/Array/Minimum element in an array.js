const _name_ = function (arr)
{
    let min=Infinity
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]<min) {
            min = arr[index]
        }
    }
    return min;
}
 let arr = [1,2,3,5,4,9,1,32,74,9]
const result = _name_(arr);
console.log(result);