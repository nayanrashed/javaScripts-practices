
/*
Truthy:
1.true.
2.any number (+ve, -ve) will be thruthy other than 0.
3.any string other than empty string
4.{}
5.[]




Falsy:
1.false.
2.0
3."" -empty string
4.undefined
5.null

*/


const x={};
if(x){
    // console.log('value of x is truthy');
}
else{
    // console.log('value of x is falsy');
}

// Optional
//check falsy
const y = '';
if(!y){
// console.log('value is falsy');
}

//check truthy
const z=55;
if(!!x){
    console.log('value is truthy');
}