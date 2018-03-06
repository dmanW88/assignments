function add (x, y) {
    return x + y
};

function addToPage(){
    document.getElementById('results').innerHTML += add (2,1)
}
add(1, 2);
console.log(add (x, y))