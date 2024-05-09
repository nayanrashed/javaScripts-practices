// function add(num1, num2){
//     console.log(num1,num2);
//     var sum = num1 + num2;
//     console.log(sum);
    
// }
// add(120,120);

// function add(num1, num2){
//     console.log(num1,num2);
//     var sum = num1 + num2;
//     return sum;
// }
// var total = add(120,20);
// console.log('Total: ',total)

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money/singaraPrice;
    return quantity;
}
var singaras = bringSingara(200);
console.log(singaras);
