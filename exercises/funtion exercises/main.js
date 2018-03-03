// function sayHi() {
//     console.log("hey there");
// }

// var sayHi = function() {
//     console.log("hey there");
// }

// var sayHiToBob = function (name) {
//     console.log("Hey, " + name);
// }
// sayHi("Sarah");
// sayHi("Mike");

// function add(a, b) {
//     return (a + b);
// }
// var sum= add(2, 4);
// console.log(sum);

// function getBig(d, e, f) {
//     return Math.max(d, e, f);
// }
// var smallBig= getBig(30, 3, 10);
// console.log(smallBig);

// function evenOrOdd(b) {
//     if (b % 2 === 0){
//         return "is an even number";
//     } else {
//         return "is an odd number";
//         }

//     }
//     var somethingBig= evenOrOdd(10);
//     console.log(somethingBig);

// add (2, 4);

// add(sum, 10);
// console.log(add(sum, 10));

// console.log(add(1, 2)+ add(add(1, 1), 2));

function touchSomebody (str) {
    if (str.length <= 20 ) {
    return (str + str)
} else {
    if (str.length > 20);
    return str.substring(0, (Math.floor(str.length / 2)));
}
}
var whoDoYouKnowJohnny= touchSomebody("well who did what when and where");
console.log(whoDoYouKnowJohnny);