/*
Comparison Operators
*/

// equality 

console.log('3' == 3); // equals 'true' 
console.log('three' == 3); // equals false 
console.log(0 == false == '' == null); // true

// not equal

console.log('3' != 4); // true
console.log('4' != 4); // doesn't care about type output -> false

//strict not equal
console.log('3' !== 3); // would be true if one =, since it is two = signs it is true. CHecks type and value

//greater than
console.log(3 > 2); //true

//less than
console.log(2 < 3); //true

//greater than or = to
console.log(3 >= 3); // true

//less than or = to
console.log(4 <= 4); // true

//And: returns true if the left and right are both true
console.log(true && true); // output: true
let x = 5 
console.log(x < 10 && x > -5); // true
console.log(x < 10 && x > 15); // false

//tangent 

let str = 'a'; 
console.log(str < 'p'); // true, because of alphabet positioning 

// Or: return true if the left OR right are true
console.log(true || false); // true 
let x = 5;
console.log(x < 10 || x > 15); // true















// this is called type coercion, it tries to match up two different values and see if it matches

console.log(3 == 3); // obviously, true

//strict equality
console.log(3 === 3); // three equal signs checks value and type 
console.log(3 === '3'); // false, they both HAVE to be the same with three ='s


let x = 5; 