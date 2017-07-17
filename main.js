// 1. First, find our UL Container
let basics = document.querySelector(".basics")
let story = document.querySelector(".story")



// 2. Create our Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/xrgonzalezx");
req.addEventListener("load", function(){
let object = JSON.parse(req.response)
  console.log(object.results);
  basics.innerHTML += `
  <p> Name: ${object.name}<p><br>
  <p> Github URL: <a href ="${object.html_url}">xrgonzalezx</a></p>
  <p> Github #: ${object.id}<p><br>
  <p> Company: ${object.company}<p><br>
  <p> Website: ${object.blog}<p><br>
  `});
req.send();

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/xrgonzalezx");
// req.addEventListener("load", function(){
// let object = JSON.parse(req.response)
//   console.log(object.results);
//   basics.innerHTML += `
//   <p>${object.bio}<p><br>
//   `});
// req.send();








// fetch("https://github.com/xrgonzalezx").then(function (data) {
//   return data.json()
// })
// .then(function (obj) {
//   obj.results.forEach(function(character) {
//     ul.innerHTML += `<li>${character.name}</li>`
//   })
// })
