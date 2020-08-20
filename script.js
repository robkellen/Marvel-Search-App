function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//declare name of character searched from HTML input
const searchName = $("#searchEntry").val().trim();

function characterSearch (){
  const hash = "f3ca3e169c9bd8ca02d93185989ba9cc";
  const apiKey = "6ac5ff42f16a138a51581025d4b3838f";
  const searchName = $("#searchEntry").val().trim();
  //queryUrl built with md5
  const queryUrl = "http://gateway.marvel.com/v1/public/characters?name=" + searchName + "&ts=1&apikey=6ac5ff42f16a138a51581025d4b3838f&hash=f3ca3e169c9bd8ca02d93185989ba9cc";  
  
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    comicSearch(response.data.results[0].id) 
  });  
  
}


function comicSearch(charID){
  const hash = "f3ca3e169c9bd8ca02d93185989ba9cc";
  const apiKey = "6ac5ff42f16a138a51581025d4b3838f";
  // const charID = "";
  const queryUrl2 = "http://gateway.marvel.com/v1/public/characters/" + charID + "/comics?&ts=1&apikey=6ac5ff42f16a138a51581025d4b3838f&hash=f3ca3e169c9bd8ca02d93185989ba9cc";

  $.ajax({
    url: queryUrl2,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    const coverThumbUrl = response.data.results[0].thumbnail.path;
    console.log(coverThumbUrl);
    const coverImage = coverThumbUrl + ".jpg";
    $("#test").append($("<img>").attr("src", coverImage));
  });   
}



//comicSearch();

$("#findComic").on("click", function(event){
  event.preventDefault();
  const searchName = $("#searchEntry").val().trim();
  characterSearch();
  console.log(searchName);
})