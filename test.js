let imgesDiv = document.getElementById('imges-div');
let leftImage = document.getElementById('left-img');
let middleImage = document.getElementById('mid-img');
let rightImage = document.getElementById('right-img');
let unorderedList = document.getElementById('list');
let button = document.getElementById('result-button');

// let namesArray = [];
function Crap(name, src) {
    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;

    Crap.all.push(this);
    // namesArray.push(this.name);

}
Crap.all = [];

new Crap('bag', 'img/bag.jpg');
new Crap('banana', 'img/banana.jpg');
new Crap('bathroom', 'img/bathroom.jpg');
new Crap('boots', 'img/boots.jpg');
new Crap('breakfast', 'img/breakfast.jpg');
new Crap('bubblegum', 'img/bubblegum.jpg');
new Crap('chair', 'img/chair.jpg');
new Crap('cthulhu', 'img/cthulhu.jpg');
new Crap('dog-duck', 'img/dog-duck.jpg');
new Crap('dragon', 'img/dragon.jpg');
new Crap('pen', 'img/pen.jpg');
new Crap('pet-sweep', 'img/pet-sweep.jpg');
new Crap('scissors', 'img/scissors.jpg');
new Crap('shark', 'img/shark.jpg');
new Crap('sweep', 'img/sweep.png');
new Crap('tauntaun', 'img/tauntaun.jpg');
new Crap('unicorn', 'img/unicorn.jpg');
new Crap('water-can', 'img/water-can.jpg');
new Crap('wine-glass', 'img/wine-glass.jpg');

console.log(Crap.all);
function randomNum() {
    return Math.floor(Math.random() * Crap.all.length);
}

randomNum();
console.log(randomNum());

let leftImageIndex;
let midImageIndex;
let rightImageIndex;

let numbers = [];

function viewImagesTest() {

    numbers = [leftImageIndex, rightImageIndex, midImageIndex];
    // console.log(numbers);

    leftImageIndex = randomNum();
    midImageIndex = randomNum();
    rightImageIndex = randomNum();

    while (leftImageIndex === rightImageIndex || midImageIndex === rightImageIndex || midImageIndex === leftImageIndex || numbers.includes(leftImageIndex) || numbers.includes(rightImageIndex) || numbers.includes(midImageIndex)) {

        leftImageIndex = randomNum();
        midImageIndex = randomNum();
        rightImageIndex = randomNum();
    }

    leftImage.src = Crap.all[leftImageIndex].src;
    middleImage.src = Crap.all[midImageIndex].src;
    rightImage.src = Crap.all[rightImageIndex].src;

    // counter for shown images
    Crap.all[leftImageIndex].shown++;
    Crap.all[midImageIndex].shown++;
    Crap.all[rightImageIndex].shown++;

}

viewImagesTest();
console.log(Crap.all);

