// Create a new JavaScript file and put these two arrays at the beginning. You will perform operations with them.

var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

 var x= vegetables.shift()
 var x= fruit.pop()

 console.log(vegetables);
 console.log(fruit);

 var x = fruit.indexOf("orange");

 console.log(x);
 fruit.push(x);
 console.log(fruit);

 console.log(vegetables.length);
 vegetables.push(vegetables.length);
 console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

var removed2 = food.splice(3, 2);
console.log(food);

food.reverse();
console.log(food);
// After every command, console.log() your arrays. A good way to do that is to use:

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);  

// // Remove the last item from the vegetable array. X
// Remove the first item from the fruit array.       X
// Find the index of "orange."                       X   
// Add that number to the end of the fruit array.    X
// Use the length property to find the length of the vegetable array. Log that to the console.X
// Add that number to the end of the vegetable array. X
// Put the two arrays together into one array. Fruit first. Call the new Array "food".X
// Remove 2 elements from your new array starting at index 4 with one method. X
// Reverse your array.X
// Log your array as a string to the console.X

