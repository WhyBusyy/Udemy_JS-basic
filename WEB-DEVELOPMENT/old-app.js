// document.body.children[1].children[0].href = 'https://google.com';
// console.dir(document);


let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a'); // 첫번째 p a {} 
anchorElement.href = 'https://google.com';
// anchorElement = document.querySelectAll('p a'); // 모든 p a {}


// Add an element
// 1. create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!'

// 2. get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. insert the new element into the parent element content

firstParagraph.append(newAnchorElement);


// REMOVE elements
// 1. Select the element that should be removed

let firstH1Element  = document.querySelector('h1');

// 2. Remove It

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser


// MOVE element

firstParagraph.parentElement.append(firstParagraph);


// innerHTML

firstParagraph.innerHTML = 'Hi, This is <strong>important!</strong>.'