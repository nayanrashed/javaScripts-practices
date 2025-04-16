// function sum(a,b,c){
//     console.log(arguments[4]);
//     const result = a+b+c;
//     return result;
// }
// const total = sum(45,89,12,45,98,56);
// console.log(total);

function sum(a, b, c) {
    const args =[...arguments]
    console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);
console.log(sum.length);