function sumOfNumbers(number){
    let sum = 0;
     for(i=1; i<=number; i++){
         sum=sum+i;
          console.log(i,sum);
         }
    return sum;
}
sumOfNumbers(10);