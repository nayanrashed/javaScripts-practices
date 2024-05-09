const result = Math.pow(2,4);
// console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1-num2);
if(gap < 5){
    console.log('you guys can be friend')
}
else{
    console.log('Stay apart')
}
//.....................
const number = 2.4598456;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const roundUp = Math.ceil(number);
// console.log(roundUp);

const roundDown = Math.floor(number);
// console.log(roundDown);


// Random ---------
// console.log(Math.random());
// const random = Math.round(Math.random()*100);
// console.log(random);
for(let i=0; i<20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}

