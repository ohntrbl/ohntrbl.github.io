const images = ["1.jpeg", "2.jpeg"];

chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// bgImage.style.width = "50%";

document.body.appendChild(bgImage);

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImg = "url('assets/" + chosenImage + "')";
// document.body.style.backgroundImage = bgImg;