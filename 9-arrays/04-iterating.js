/*

Iterating

*/


let food = ['Peacan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// food.forEach(f => {console.log(f)})

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

let movie = ['Matrix', 'Star Wars', 'Lord of the Rings', 'John Wick']; 

movie.push('Inception');

movie.splice(3, 1, 'Avengers');

movie.forEach((movie, number) => {
    console.log(movie);
    console.log(number);
})


let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length); 
newArray.forEach(el => {
    console.log(el);
})




