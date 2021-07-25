'use strict';

let divImageElement = document.getElementById('images-div');
let button = document.getElementById('but-result');
button.style.marginLeft = "47%";

// let leftImage = document.getElementById('left-image');
// let midImage = document.getElementById('mid-image');
// let rightImage = document.getElementById('right-image');

let leftImage = document.createElement('img');

// from W3 Schools
leftImage.style.width = "200pt";
leftImage.style.height = "200pt";
leftImage.style.margin = "50pt";
leftImage.style.marginLeft = "180pt";
leftImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
leftImage.style.borderRadius = "15pt";
leftImage.id = "leftImage";
// console.log(leftImage);
divImageElement.appendChild(leftImage);

let midImage = document.createElement('img');
midImage.style.width = "200pt";
midImage.style.height = "200pt";
midImage.style.margin = "50pt";
midImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
midImage.style.borderRadius = "15pt";
midImage.id = "midImage";
divImageElement.appendChild(midImage);

let rightImage = document.createElement('img');
rightImage.style.width = "200pt";
rightImage.style.height = "200pt";
rightImage.style.margin = "50pt";
rightImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
rightImage.style.borderRadius = "15pt";
rightImage.id = "rightImage";
divImageElement.appendChild(rightImage);

let maxTry = 25;
let userTry = 0;


let leftImageIndex;
let midImageIndex;
let rightImageIndex;

function Product(name, src) {
    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;

    products.push(this);

}

let products = [];

// Creating instances

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

// console.log(products);

// from W3 Schools
function randomNum() {
    return Math.floor(Math.random() * products.length);
}

// console.log(randomNum());

function viewImages() {

    leftImageIndex = randomNum();
    midImageIndex = randomNum();
    rightImageIndex = randomNum();

    while (leftImageIndex === rightImageIndex || midImageIndex === rightImageIndex || midImageIndex === leftImageIndex) {
        rightImageIndex = randomNum();
        midImageIndex = randomNum();
    }

    // linking the images
    leftImage.src = products[leftImageIndex].src;
    midImage.src = products[midImageIndex].src;
    rightImage.src = products[rightImageIndex].src;

    // counter for shown images
    products[leftImageIndex].shown++;
    products[midImageIndex].shown++;
    products[rightImageIndex].shown++;
}

viewImages();
// console.log(leftImageIndex, midImageIndex, rightImageIndex);


divImageElement.addEventListener('click', click);

let list = document.getElementById('list');

let text = document.createElement('p');
divImageElement.appendChild(text);

function click(event) {
    userTry++;
    leftImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    midImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    rightImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";

    if (userTry < maxTry) {
        text.textContent = "";

        if (event.target.id === 'leftImage') {
            leftImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.11)";
            products[leftImageIndex].votes++;
            //   console.log(goats[leftImageIndex]);

        } else if (event.target.id === 'midImage') {
            midImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.11)";
            products[midImageIndex].votes++;
            //   console.log(goats[rightImageIndex]);
        } else if (event.target.id === 'rightImage') {
            rightImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.11)";
            products[rightImageIndex].votes++;
        } else {

            text.textContent = "please choose an image.";
            text.style.textAlign = "center";



        }

        viewImages();


    } else {
        button.addEventListener('click', buttonClick);


    }
}



function buttonClick() {

    for (let i = 0; i < products.length; i++) {
        // const element = goats[i];

        let listElement = document.createElement('li');

        list.appendChild(listElement);

        listElement.textContent = `${products[i].name} had ${products[i].votes} votes, and was seen ${products[i].shown} times.`;



    }

}
