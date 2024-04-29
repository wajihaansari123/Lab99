// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

var url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=733cb7064281469a9aca16a6fc3646ed';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      var elements = document.querySelectorAll(".w3-quarter");
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i]; 
        var heading = element.querySelector('h3');
        var image = element.querySelector('img');
        var paragraph = element.querySelector('p');

        heading.textContent = data.articles[i].title;
        image.src = data.articles[i].urlToImage;
        paragraph.textContent = data.articles[i].description;
      }
    })