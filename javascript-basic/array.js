const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student ={ id:121, class:11, name: 'Agun'}
const friends = [13, 14, 11, 17, 21, 16, 15, 20]
function add(num1,num2){
    return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
// Checking array
console.log(Array.isArray(friends));

console.log(typeof add);
//------------------
console.log(friends.includes(19));
//------------------
const newFriendsAge = [12, 13, 17, 24]
const allfriends = newFriendsAge.concat(friends);
console.log(allfriends);