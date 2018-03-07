var lyrics = ["This", "hit", "that", "ice", "cold",  
 "Michelle" ,"Pfeiffer", "that", "white", 
 "gold", "This", "one", "for", "them", 
 "hood", "girls", "Them", "good", "girls", 
 "straight", "masterpieces", "Stylin'", 
 "whilen'", "livin'", "it", "up", "in", 
 "the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
 "myself", "I'm", "so", "pretty"];

 var brunoLyrics = function () {
     return lyrics.join (" ");
 }
// console.log(brunoLyrics());
var rev = lyrics.reverse().join(" ")
console.log(rev)
console.log(brunoLyrics());

function everyOther(arr) {
    var skip = [];
    for (var i = 0; i < arr.length; i+= 2) { 
        skip.push(arr[i]);
    }
    return brunoLyrics(skip);
}
console.log(everyOther(lyricsArr))