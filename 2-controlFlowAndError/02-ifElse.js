/*
IF ELSE
*/

weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
}else {
    console.log('No jacket necessary!');
} 

/* Challenge: 
Write an if else statement that checks your name;
If it is your name, console.log 'Hello, my name is <your name>';
If the name does not match, console.log 'Hello, what is your name?';
*/

let name = 'Alex';

if (name !== 'Alex'){
    console.log('Hello, what is your name?');
} else {
    console.log('Hello, my name is Alex');
}

/* Challenge:
Capitalize the FIRST LETTER of the name ONLY
*/ 

let name = 'alexander'
function forceUpperCase('alexander') 
{
strInput.value=strInput.value.toUpperCase();
    console.log('')
}​


var text = 'Bartholomew';
var upper = text.toUpperCase();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function name(string){
    console.log(string);
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(name('josh'));

let name = 'tYlEr'

if (name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();
    console.log(otherLetters);

} 


/* Challenge:

Set a variable age and give it an age of your choice
Set an else if statement that onvey the following:




if (this thing is true {
    code code code
}   else if (this other thing is true) {
    run some other code
}   else if (third thing is true) {
    run this code block
}
*/

let age = 24

if (age < 18) {
    console.log("Sorry, you're too young to do anything.")
} else if (age >= 18 && age < 21) { 
    console.log('Yay! You can vote!')
} else if (age >= 21 && age < 25) {
    console.log('Yay! You can drink!')
} else if (age >= 25) {
    console.log('Yay! You can rent a car!')
}

