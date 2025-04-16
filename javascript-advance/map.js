const numbers = [4, 5, 2, 8, 10];
const doubled=[]
for(const num of numbers){
    const double = num*2;
    doubled.push(double);
}
// console.log(doubled);

// MAP: Array maping
function doubleIT(num){
    // console.log('num now', num);
    return num*2;
}
const result = numbers.map(doubleIT);
// console.log(result);

const double2 = n =>n*2;
const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map(n=>n*2)
// console.log(output);

console.log(numbers.map(n=>n*2));
