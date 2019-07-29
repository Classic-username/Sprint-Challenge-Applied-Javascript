// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let nativeDiv = document.querySelector('.header-container');

function Header() {
    let primDiv = document.createElement('div');
    primDiv.classList.add('header');
    nativeDiv.appendChild(primDiv);
    
    let span1 = document.createElement('span');
    span1.classList.add('date');
    span1.textContent = 'SMARCH 28, 2019';
    primDiv.appendChild(span1);

    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    primDiv.appendChild(h1);

    let span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = '98°'
    primDiv.appendChild(span2);
}

Header()