/*
TYPES
*/

//Booleans  
let on = true; 
console.log(on); //output -> true

let off = false;
console.log(off); //output -> false

//Boolean can represent; true/false, on/off, yes/no, bianary 

//Null
/*

Null = empty value(not 0; not undefined)

It is like an empty container; nothing is in it, but it still exists as a space to fill 

*/

let empty = null;
console.log(empty);

//Undefined 
/* 
Undefined = no value assigned (not even an empty container)

undefined is not an error
*/

let undef = undefined
console.log(undef);

let grass;
console.log(grass); // empty = null, undef = undefined, grass = undefined

/* think of undefined and null as packages in UPS
null -> package deliberately sent out from UPS as empty
undefined -> package that was forgotten, or a package that has not yet been used
*/ 

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; 
console.log(rounded);  // 10000000000000000 it rounded up 

/* when a variable gets made in javascript, its only so many 0s and 1s back to back. 
You can represent a certain amount of numbers, but there is a limit. 
*/

let notQuite = (0.2 + 0.1);
console.log(notQuite); //  0.30000000000004 ... not quite accurate

//                      ( (2)  +  (1) ) / 10
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//strings = any value within quotes; JS spit out the values within the quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log (stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;            // 1150
let second = '1050' + '100';       // 1050100

console.log(first); //number
console.log(second); //string

console.log(typeof first); //number
console.log(typeof second); 

//What's going on here?
// + -> addition when given two numbers, it does concatenation when given 2 strings 

let third = 1050 + '100;

console.log(third);                // 1050100


//Challenge; 
// Set 7 or 8 variables
// firstName
// lastName
// houseNumber
// aptNumber (if applicable)
// street
// city
// state
// zipcode 

let firstName = 'Alex';
let lastName = 'Hall';
let houseNumber = '10';
let aptNumber = 'C;
let street = 'Knoll';
let city = 'Carmel'; 
let state = 'Indiana'; 
let zipcode = '46032';


console.log(firstName, lastName + ',', aptNumber, street + ',', city + ',', state, zipcode);

//Objects
/*
What is an object?

A container that can hold multiple datatypes

denoted by {}
has keys and values (color (key): 'blue' (value)), separated with a colon
Each key is separated with a comma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow); //displays size/quantity/now
console.log(typeof burritosNow); //object is of type: object

//Arrays 
/*
Arrays are great for lists

denoted by the square brackets []
have values separated by commas -> ['blue', 'green', 'yellow']

*/

let burritos = ['large', 4, true];

console.log(burritos);
console.log(typeof burritos);
