// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
//fibo[n] = fibo[n-1] + fibo[n-2]


const fibo = [0, 1];
for(let i=2; i<=15; i++){
    fibo[i]= fibo[i-1] + fibo[i-2]; 
    // const nextNumber = fibo[i-1] + fibo[i-2]
    // fibo.push(nextNumber);

}
console.log(fibo);  
