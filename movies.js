const apiKey = "9f6e93a65574784367ff39079bc0d858";
const queryUrl = "https://api.themoviedb.org/3/movie/550?api_key=" + apiKey;

$.ajax({
  url: queryUrl,
  method: "GET",
}).then(function (response) {
  console.log(response);
});