const difference = (x,y)=>x-y;
const multiply = (x,y,z)=> x*y*z;

//single parameter
const getAge = (person)=>person.age;
const student = {name:'ananto', age:45};
const age = getAge(student);
console.log(age)

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13]);
console.log(third);

//no parameter
const getPI = ()=>Math.PI;
console.log(getPI())

//large arrow function:use return to get return in this function
const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const multy = x*y*z;
    const result = sum+multy;
    return result;
}
const getMath = doMath(1,2,3);
console.log(getMath);
