//filter select elements based on a condition and returns an array 
const number = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p=>p>70)
const selected = players.filter(p => p % 2 === 1)
// console.log(selected)

const friends = ['tom', 'john', 'michael', 'oliver', 'tim'];
const oldFriends = friends.filter(friend => friend.length > 4);
console.log(oldFriends)