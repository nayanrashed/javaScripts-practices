const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
console.log(glass)
const keys = Object.keys(glass);
//[ 'name', 'color', 'price', 'isCleaned' ]
const values = Object.values(glass)
//[ 'glass', 'golden', 12, true ]
const pair = Object.entries(glass)
// array of array, two dimensional array
// [
//     ['name', 'glass'],
//     ['color', 'golden'],
//     ['price', 12],
//     ['isCleaned', true]
// ]
// console.log(pair)

// Delete 
delete glass.isCleaned;
// console.log(glass)

const { isCleaned, ...shortGlass } = glass;
console.log(glass)

//freeze
// Object.freeze(glass);

Object.seal(glass);
glass.source = "bangladesh"
glass.price = 5000
console.log(glass)


