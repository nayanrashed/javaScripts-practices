// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         // console.log('Your year is leap year',year);
//         return true;
//     }
//     else{
//         // console.log('Your year is not a leap year',year);
//         return false;

//     }
// }
function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        
        return true;
    }
    return false;

    
}


const isMyYearLeapYear = isLeapYear(1933);
console.log('My Year',isMyYearLeapYear)