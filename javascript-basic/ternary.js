/**
 * (condition)?do something if condtion true:do something if condition false;
 */

const age = 12;
// age >=18 ? console.log('vote dio'):console.log('Ghumai Thako');

let price =500;
const isLeader = false;
// if(isLeader===true){
//     price=0
// }else{
//     price=price+100
// }
// console.log(price);
// price=isLeader===true?0:price+100;
// console.log(price);
if(isLeader===true){
    if(price>1000){
        price=price/2;
    }
    else{
        price=0;
    }
}else{
    price=price+1000;
}

//
price=isLeader===true?price>1000?price/2:0:price+1000

console.log(price);