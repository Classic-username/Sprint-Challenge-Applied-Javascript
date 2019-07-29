// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let alsoData = axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(result => {
        console.log(result.data)
        // let keyname = Object.keys(result.data.articles)
        // console.log(keyname) attempt to not hardcode the name 'javascript' or
        // result.data.articles.keyname.forEach((cv) => {
        //     CreateCard(cv)
        // })
        result.data.articles.javascript.forEach((cv) => {
            CreateCard(cv)
        })
        result.data.articles.bootstrap.forEach((cv) => {
            CreateCard(cv)
        })
        result.data.articles.technology.forEach((cv) => {
            CreateCard(cv)
        })
        result.data.articles.jquery.forEach((cv) => {
            CreateCard(cv)
        })
        result.data.articles.node.forEach((cv) => {
            CreateCard(cv)
        })
    })
    .catch(denied => {
        console.log("error", denied)
    })

let cardMOM = document.querySelector('.cards-container')

function CreateCard(cv){
    let divG = document.createElement('div');
    divG.classList.add('card');
    cardMOM.appendChild(divG);

    let divA = document.createElement('div');
    divA.classList.add('headline');
    divA.textContent = `${cv.headline}`;
    divG.appendChild(divA);

    let divM = document.createElement('div');
    divM.classList.add('author');
    divG.appendChild(divM);

    let divC = document.createElement('div');
    divC.classList.add('img-container');
    divM.appendChild(divC);

    let img = document.createElement('img');
    img.setAttribute('src', `${cv.authorPhoto}`);
    divC.appendChild(img);

    let span = document.createElement('span');
    span.textContent = `By ${cv.authorName}`;
    divM.appendChild(span);
}