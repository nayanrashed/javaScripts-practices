//primitive type are pass by value
let num1 = 5;
let num2 = 7

function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);

//object and array are pass by reference
let student1 = {name:'jalil', partner:'borsha'};
let student2 = {name: 'shakib', partner:'apu'};
function makeMovie(couple1,couple2){
    couple1.name='Ononto';
    couple2.partner='bubly'
}
console.log(student1,student2);
makeMovie(student1,student2);
console.log(student1,student2);
