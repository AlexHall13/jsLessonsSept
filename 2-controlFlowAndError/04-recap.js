/*
RECAP
*/

let stringExample = 'string';

let numberExample = 0;
let boolExample = true;

conditionExample = 0;

//if else example 
//if elses run when line 15 is true

if (typeof conditionExample === 'string'){
    console.log("Yep, it's a string"); 
} else if (typeof conditionExample === 'number'){
    console.log("yep, it's a number");
} else if (typeof conditionExample === 'boolean'){
    console.log("yep, it's a boolean!");
}

console.log(typeof conditionExample);

//switch
//not evaluating truth like if else but it's evaluating the quality of each 
switch (typeof conditionExample) {
    case 'string':
        console.log('this is a string!';
        break;
    case 'number':
        console.log('this is number!');
        break;
    default:
        console.log('variable is not a string or number');
        break;
}   


let x = 0

switch (x) {
    case (x < 10 && x > -10):
        console.log('this is a small number');
        break;
    default:
        console.log('this is some other number');
        break;
}

//ternary below
// if this condition is true then run THIS code  .... then : means ELSE, if this condition is true then run THIS code

(typeof conditionExample === 'string') ? console.log('our variable is a string') : (typeof conditionExample === 'number') ? console.log('our variable is a number') : (typeof conditionExample === 'undefined') ? console.log('our variable is undefined') : console.log('this is our default case');

