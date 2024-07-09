const images = ["1.jpeg", "2.jpeg"];

chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.style.width = "50%"; //사이즈추가

document.body.appendChild(bgImage);
