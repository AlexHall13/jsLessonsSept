/* 
SCOPE

JavaScript has both LOCAL and GLOBAL scope 
*/ 

var x = 12;

function scope() {
    var x = 33; 
    console.log(x);
}

scope();      //output --> 33 
console.log(x);   //output --> 12 

//the two examples above are different because the first example
//had 2 variables named 'x'. the second example had just 1 variable
//named 'x' in the global scope 

var x = 12;                 // global level 

function scope() { 
    var x = 33              // smaller level
    if (true) {
        var x = 45          // precise level
        console.log(x);     // result is 45     // guess -> 45, actual output was 45
    }
    console.log(x);         // result is 33     // guess -> 33, actual output 45
}
scope();
console.log(x);             // guess -> 12, actual output 45 

 // var does play necessarily by the rules and can bleed in when the { are not in the proper scope


 // here is the solution

 let x = 12 

 function scope () {
     let x = 33;
     if (true) {
         let x = 45;
         console.log(x);  // guess -> 45 , correct
     }
     console.log(x);  // guess -> 33, correct
 }
 scope();
 console.log(x);   // guess ->  12, correct

 // var obeys global scope, and var obeys functional scope. var ignores any black scope thats
 // not inside of the function. 

 //
 
 function constTest() {
     const scope = 1;
     if (true) {
         const scope = 2;
         console.log(scope);
     }
     console.log(scope);
     if (true) {
         const scope = 3;
         console.log(scope);
     }
     console.log(scope);
 }
 constTest();

 /* 
        variable declar.    obeys functional scope  obeys block scope   can be mutated (i.e. changed after initialization)
        var                 x                       0                   x
        let                 x                       x                   x
        const               x                       x                   0

*/

