const images = [
  "0.gif", 
  "1.png", 
  "3.gif"
];


const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");


bgImg.src = `image/${chosenImg}`;

document.body.style.background = `center / cover no-repeat url("${bgImg.src}")`;