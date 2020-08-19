<<<<<<< HEAD
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

=======

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
>>>>>>> 1c67971d9e2d9a20262e182831dba28ed5e5878b

const hash = "f3ca3e169c9bd8ca02d93185989ba9cc"

const apiKey = "6ac5ff42f16a138a51581025d4b3838f"
//queryUrl built with md5 
const queryUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6ac5ff42f16a138a51581025d4b3838f&hash=f3ca3e169c9bd8ca02d93185989ba9cc";

$.ajax({
  url: queryUrl,
  method: "GET"
}).then(function(response){
  console.log(response);
});

