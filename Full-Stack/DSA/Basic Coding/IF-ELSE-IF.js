const _name_ = function (choice)
{
    if (choice >= 0 && choice <=100) {
        return 5;
    }
    if (choice > 100 && choice <=500) {
        return 8;
    }
    if (choice > 500 && choice <1000) {
        return 10;
    }
    if (choice >= 1000) {
        return 12;
    }
}
let choice=700;
const result = _name_(choice);
console.log(result);
