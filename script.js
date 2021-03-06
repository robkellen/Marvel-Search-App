//  function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

//declare name of character searched from HTML input
var searchName = $("#character-search").val().trim();

function charBio () {
  var searchName = $("#character-search").val().trim();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://superhero-search.p.rapidapi.com/?hero=" + searchName,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "5470b880aamsh37bac69440bf26dp130d2djsn9d4d83f96816"
    }
  }
  
  $.ajax(settings).then(function (response) {
    $("#bio").empty();
    console.log(response);

    const charAttributes = JSON.parse(response);
    const name = (charAttributes.name);
    const attributes = (charAttributes.powerstats);
    console.log(attributes);
    const biography = (charAttributes.biography.firstAppearance);
    const charImage = (charAttributes.images.sm);

    // const charTile = $("<div>").attr("class","tile2 tile-is12 is-parent");
    // $("#bio").append(charTile);
    const newArticle = $("<article>").attr("class", "tile2 tile-is12 is-parent has-background-grey-dark notification is-vertical is-info");
    $("#bio").append(newArticle);
    const content = $("<div>").attr("class", "content");
    newArticle.append(content);

    const charHeader = $("<p>").attr("class", "title").css("color", "rgb(187, 20, 20)").text(name);
    content.append(charHeader);
    
    const figure = $("<figure>").attr("class", "image is-3by4")
    content.append(figure);

    const image = $("<div>").attr("class","is-rounded");
    figure.append(image);
    
    const headShot = $("<img>").attr("src", charImage).attr("alt", "Character Photo");
    figure.append(headShot);

    const content2 = content
    content.append(content2);
    
    let newUl = $("<ul>").attr("class", "list")
    content2.append(newUl);

    // const trait = Object.properties(attributes);
    // const value = Object.values(attributes);
    // console.log(listAttributes);

    // for (let i = 0; i < listAttributes.length; i++) {
      
    //   console.log(li);
      
    // }

  });
  }
  
//
function characterSearch() {
  const hash = "f3ca3e169c9bd8ca02d93185989ba9cc";
  const apiKey = "6ac5ff42f16a138a51581025d4b3838f";
  const searchName = $("#character-search").val().trim();
  //queryUrl built with md5
  const queryUrl =
    "https://gateway.marvel.com/v1/public/characters?name=" +
    searchName +
    "&ts=1&apikey=6ac5ff42f16a138a51581025d4b3838f&hash=f3ca3e169c9bd8ca02d93185989ba9cc";

  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    comicSearch(response.data.results[0].id);
  });
  // charBio();
}

var coverIndex = [];
//function to use character ID generated by user search to populate comic covers to Comics HTML page
function comicSearch(charID) {
  const hash = "f3ca3e169c9bd8ca02d93185989ba9cc";
  const apiKey = "6ac5ff42f16a138a51581025d4b3838f";
  const queryUrl2 =
    "https://gateway.marvel.com/v1/public/characters/" +
    charID +
    "/comics?&ts=1&apikey=6ac5ff42f16a138a51581025d4b3838f&hash=f3ca3e169c9bd8ca02d93185989ba9cc";

  $.ajax({
    url: queryUrl2,
    method: "GET",
  }).then(function (response) {
    //empties comics div so new search renders only the comics for that character
    $("#comics").empty();

    const coverIndex = response.data.results;
    let count = 0;
    let newRow = $("<div>").attr("class", "columns");
    //create for loop here to loop through 18
    for (let i = 0; i < coverIndex.length; i++) {
      if (count === 4) {
        $("#comics").append(newRow);
        count = 0;
        newRow = $("<div>").attr("class", "columns");
      }
      // console.log(response.data.results[i])
      // console.log(response.data.results[i].images)

      const newCol = $("<div>").attr("class", "column");
      newRow.append(newCol);
      // const apiImageArray = response.data.results[i].images[i];
      const coverThumbUrl = response.data.results[i].thumbnail.path;
      //   if (apiImageArray !== 0) {
      //   i++;
      // }
      const coverImage = coverThumbUrl + ".jpg";
      newCol.append(
        $("<img>")
          .attr("src", coverImage)
          .attr("alt", "comic cover")
          .css("width:", "100%")
      );
      count++;
    }
  });
}


$("#searchBtnComics").on("click", function (event) {
  event.preventDefault();
  const searchName = $("#character-search").val().trim();
  characterSearch();
  charBio(searchName);
  // console.log(searchName);
});
