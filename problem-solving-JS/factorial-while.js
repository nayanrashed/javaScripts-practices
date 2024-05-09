// function factorial(number){
//     let num = 1;
//     let result = 1;
//     while(num<=number){
//         result = result * num;
//         num++;
//     }
//     return result;
// }

// const yourNumber = 7;
// const fact = factorial(yourNumber);
// console.log('Factorial of ',yourNumber,':',fact);


//reverse
function factorial(number){
    let num = number;
    let result = 1;
    while(num>=1){
        result = result * num;
        num--;
    }
    return result;
}

const yourNumber = 8;
const fact = factorial(yourNumber);
console.log('Factorial of ',yourNumber,':',fact);