const _name_ = function (day)
{
    switch (day) {
        case 1:
            console.log('Monday');
            break;
    
        case 2:
            console.log('Thursday');
            break;
    
        case 3:
            console.log('Wednesday');
            break;
    
        case 4:
            console.log('Tuesday');
            break;
    
        case 5:
            console.log('Friday');
            break;
    
        case 6:
            console.log('Saturday');
            break;
    
        case 7:
            console.log('Sunday');
            break;
    
        default:console.log('Invalid');
            break;
    }
}
let day=3;
const result = _name_(day);
// console.log(result);
