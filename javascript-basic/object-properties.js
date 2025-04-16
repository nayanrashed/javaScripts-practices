var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 2,
    pen: 24,
}
// console.log(shoppingCart);

// when you know the property name- use dot notation
var penCount = shoppingCart.pen;
// console.log(penCount);

var penCount2 = shoppingCart["pen"];
// console.log(penCount2);
var propertyName = 'mouse'
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue)



var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);

//set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 30;
console.log(shoppingCart);
shoppingCart[propertyName] = 45;
console.log(shoppingCart);
