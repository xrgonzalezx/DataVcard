// 1. First, find our UL Container
let basics = document.querySelector(".basics")
let story = document.querySelector(".story")
let picture = document.querySelector(".picture")


// 2. Create our Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/xrgonzalezx");
req.addEventListener("load", function(){
let object = JSON.parse(req.response)
  console.log(object.results);
  basics.innerHTML += `
  <h2>The Basics</h2>
  <ul>
    <li><span> Name: </span> ${object.name}</li>
    <li><span> Github URL: </span> </h4> <a href ="${object.html_url}">xrgonzalezx</a></li>
    <li><span> Github #: </span> ${object.id}</li>
    <li><span> Company: </span> ${object.company}</li>
    <li><span> Website: </span> <a href="${object.blog}">www.rudyg.com</a></li>
  </ul>
`

story.innerHTML += `
<h2>The Story</h2>
<p> ${object.bio}<p>
`
picture.innerHTML +=`
<img src="${object.avatar_url}">
`

});
req.send();
