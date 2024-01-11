
// ES5 Map Callback
// function double(arr) {
//     return arr.map(function(val){
//         return val * 2;
//     });
// }

// Es2015 Arrow functions shorthand
const double = arr => arr.map(val => val * 2);

// Refactor the following function to use arrow functions
// function squareAndFindEvens(numbers) {
//     var squares = number.map(function(num){
//         return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//         return square % 2 === 0;
//     });
//     return evens;
// }

const squareAndFindEvens = numbers => numbers.map(num => num **2).filter(square => square % 2 === 0);