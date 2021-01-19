// in main.js
function loadContent(){
  var contentDiv = document.getElementById("app");
  contentDiv.innerHTML = location.hash;
}

window.addEventListener("hashchange", function (){
  loadContent();
});

loadContent();