'use strict';

let divImageElement = document.getElementById('images-div');
let button = document.getElementById('but-result');
button.style.marginLeft = "47%";
let votArray = [];

let showArray = [];

let namesArr = [];

// let leftImage = document.getElementById('left-image');
// let midImage = document.getElementById('mid-image');
// let rightImage = document.getElementById('right-image');

let leftImage = document.createElement('img');
// from W3 Schools
leftImage.style.width = "200pt";
leftImage.style.height = "200pt";
leftImage.style.margin = "25pt";
leftImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
leftImage.style.borderRadius = "15pt";
leftImage.style.borderStyle = "solid";
leftImage.id = "leftImage";
// console.log(leftImage);
divImageElement.appendChild(leftImage);

let midImage = document.createElement('img');
midImage.style.width = "200pt";
midImage.style.height = "200pt";
midImage.style.margin = "25pt";
midImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
midImage.style.borderRadius = "15pt";
midImage.style.borderStyle = "solid";
midImage.id = "midImage";
divImageElement.appendChild(midImage);

let rightImage = document.createElement('img');
rightImage.style.width = "200pt";
rightImage.style.height = "200pt";
rightImage.style.margin = "25pt";
rightImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
rightImage.style.borderRadius = "15pt";
rightImage.style.borderStyle = "solid";
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

    Product.all.push(this);
    namesArr.push(this.name);

}



Product.all = [];

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

console.log(Product.all);

// console.log(products);


function updateStorage() {

    let stringArray = JSON.stringify(Product.all);
    // console.log(stringArray);

    localStorage.setItem('product', stringArray);

}

function getProducts() {
    // get data from local storage
    let data = localStorage.getItem('product');
    let parseArray = JSON.parse(data);
    if (parseArray !== null) {
        Product.all = parseArray;

        // console.log(Product.all);
    }
}

// from W3 Schools
function randomNum() {
    return Math.floor(Math.random() * Product.all.length);
}

// console.log(randomNum());

let numbers = [];

function viewImages() {

    numbers = [leftImageIndex, rightImageIndex, midImageIndex];
    // console.log(numbers);

    leftImageIndex = randomNum();
    midImageIndex = randomNum();
    rightImageIndex = randomNum();

    while (leftImageIndex === rightImageIndex || midImageIndex === rightImageIndex || midImageIndex === leftImageIndex || numbers.includes(leftImageIndex) || numbers.includes(rightImageIndex) || numbers.includes(midImageIndex)) {
        rightImageIndex = randomNum();
        midImageIndex = randomNum();
        leftImageIndex = randomNum();
    }



    // linking the images
    leftImage.src = Product.all[leftImageIndex].src;
    midImage.src = Product.all[midImageIndex].src;
    rightImage.src = Product.all[rightImageIndex].src;

    // counter for shown images
    Product.all[leftImageIndex].shown++;
    Product.all[midImageIndex].shown++;
    Product.all[rightImageIndex].shown++;
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

    if (userTry <= maxTry) {
        text.textContent = "";

        if (event.target.id === 'leftImage') {
            leftImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.11)";
            Product.all[leftImageIndex].votes++;
            //   console.log(goats[leftImageIndex]);

        } else if (event.target.id === 'midImage') {
            midImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.11)";
            Product.all[midImageIndex].votes++;
            //   console.log(goats[rightImageIndex]);
        } else if (event.target.id === 'rightImage') {
            rightImage.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.11)";
            Product.all[rightImageIndex].votes++;
        } else {
            text.textContent = "please choose an image.";
            text.style.textAlign = "center";
        }
        updateStorage();
        viewImages();


    } else {
        button.addEventListener('click', buttonClick);
        divImageElement.removeEventListener('click', click);
        for (let i = 0; i < Product.all.length; i++) {
            votArray.push(Product.all[i].votes);
            showArray.push(Product.all[i].shown);

        }
        // console.log(votArray);
        // console.log(showArray);


        // console.log(Product.all);
    }


}




function buttonClick() {
    // list.remove();
    // list.empty();
    for (let i = 0; i < Product.all.length; i++) {
        // const element = goats[i];

        let listElement = document.createElement('li');

        list.appendChild(listElement);

        listElement.textContent = `${Product.all[i].name} had ${Product.all[i].votes} votes, and was seen ${Product.all[i].shown} times.`;
        list.style.borderStyle = "solid";

    }
    showChart();

}




function showChart() {

    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: showArray,
            backgroundColor: [
                'rgba(150, 231, 132, 0.2)',
                'rgba(231, 245, 64, 0.2)',
                'rgba(245, 95, 86, 0.2)',
                'rgba(95, 47, 192, 0.2)',
                'rgba(47, 53, 235, 0.2)',
                'rgba(53, 211, 255, 0.2)',
                'rgba(211, 99, 207, 0.2)'
            ],
            borderColor: [
                'rgba(150, 231, 132)',
                'rgba(231, 245, 64)',
                'rgba(245, 95, 86)',
                'rgba(95, 47, 192)',
                'rgba(47, 53, 235)',
                'rgba(53, 211, 255)',
                'rgba(211, 99, 207)'
            ],
            borderWidth: 1
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}



getProducts();
