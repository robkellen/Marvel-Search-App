const hash = "f3ca3e169c9bd8ca02d93185989ba9cc"

const apiKey = "6ac5ff42f16a138a51581025d4b3838f"

const queryUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6ac5ff42f16a138a51581025d4b3838f&hash=f3ca3e169c9bd8ca02d93185989ba9cc";

$.ajax({
  url: queryUrl,
  method: "GET"
}).then(function(response){
  console.log(response);
});