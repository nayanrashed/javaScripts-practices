function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const yourNumber = 5;
const result = multiplicationOfNumbers(yourNumber);
console.log(result);