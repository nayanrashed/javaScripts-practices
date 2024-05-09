function isEven(number){
    const remainder = number % 2;
    if(remainder === 0) {
        return true;
    }
    else{
        return false;
    }

}
const yourNumber = 15;
const iseven = isEven(yourNumber);
console.log('Is your number Even:- ',iseven);