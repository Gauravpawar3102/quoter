let quote = document.querySelector('#quote');
let author = document.querySelector('.author');
let button = document.querySelector('.button');

const api = `https://goquotes-api.herokuapp.com/api/v1/random?count=1`;
function getRandom() {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.quotes[0].text);
      quote.textContent = data.quotes[0].text;
      author.textContent = '~' + data.quotes[0].author;
    });
}
