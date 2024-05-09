function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        console.log(i)
        result = result * i;
    }
    return result;
}
const yourNumber = 7;
const fact = factorial(yourNumber);
console.log('Factorial of ',yourNumber,':',fact);