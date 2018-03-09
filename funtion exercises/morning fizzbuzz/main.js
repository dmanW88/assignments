function fizzBuzz () {
    var numHundred = [];
    for (var i = 1; i < 101; i++); {
        if (i % 3 === 0 && i % 5 === 0){
            numHundred.push('fizzbuzz')
        } else if (i % 3 === 0){
            numHundred.push('fizz')
        } else if (i % 5 === 0 ){
            numHundred.push('buzz')
        } else {
            numHundred.push(i)
        }
    }
    return numHundred;
}
console.log(fizzBuzz);