function getTotal(assignment1,assignment2,assignment3){
    const total =assignment1 + assignment2 + assignment3;
    const avr = total/3;
    return avr;
}
const assignment1Mark= 60;
const assignment2Mark= 58;
const assignment3Mark= 59;
var myAverage = getTotal(assignment1Mark,assignment2Mark,assignment3Mark)
console.log(myAverage)