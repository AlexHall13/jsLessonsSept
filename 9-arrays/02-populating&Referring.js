/* 
INTRO TO ARRAYS

Have square brackets, they can hold multiple data types, great for listing
*/

//overview/calling
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];  

//can put arrays INSIDE of arrays. #woah #wow 

console.log(typeof students);  //object 
console.log(students[2]);  // Rhys 


console.log(`Hello, ${students[6][1]} you look nice today`);


let food = ['Peacan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//for (let x = 0; x < food.length; x++){
//    console.log(food[x]);
//}

//for (let f of food) {
//    console.log(f);
//}

// 

food.push('Pizza') // appends pizza to the end of the array 
//console.log(food);
food.splice(1, 1, 'Bananas');   // (1 selects the value to replace, 1 how many values to replace, 'Bananas' is what to replace it with)
console.log(food);

food.splice(2, 0, 'Sweet Potato Pie'); // nothing is replaced, but Sweet Potato Pie is added to the list
console.log(food); 
food.pop(); //removes the last value
console.log(food); 



