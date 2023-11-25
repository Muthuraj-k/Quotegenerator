let quote = document.getElementById("qoute");
let author = document.getElementById("author");
let button = document.getElementById("button");
const url = "http://api.quotable.io/random";

let getquote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.content);
      console.log(data.author);
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    })
    .catch((error) => {
      console.log(error);
    });
};

// window.addEventListener("load", getquote);
button.addEventListener("click", getquote);
