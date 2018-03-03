// What is an object

//Composite Data Type
// contains key/ value pairs separated by commas
// wrapped in curly braces {}

var ben = {
    name: "Ben",
    age: 29,
    height: 6,
    hobbies: []
}
var bensEvilTwin = ben;
ben.height++;

var bensAge = 29;
var evilTwinsAge = bensAge;
bensAge++;

console.log(bensAge);
console.log(evilTwinsAge);

