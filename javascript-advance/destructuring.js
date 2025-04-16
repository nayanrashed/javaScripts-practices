const actor = {
    name: 'Ananta',
    age: 30,
    phone: '01797749348',
    money: 858725348686346,
}
// console.log(actor.phone)
// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

//Destructuring
//if right side is an object, left side of destructuring will be object as well
//use property name as a variable that contains the property value
//changing variable name, example- age:boyos
const { phone, age: boyos } = actor;

// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(boyos);
// console.log(boyos);

//Destructuring Array
const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66];
// console.log(x)
function doubleThem(a,b){
    return [a*2, b*2]
}
const [prothom,ditio]= doubleThem(8,9);
console.log(prothom,ditio);