const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg".
    "4.jpg",
    "5.jpg",
    "6.jpeg",
    "7.jpeg",
    "8.jpg",
    "9.jpg",
  ];
  
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  
  const bgImg = "url('images/" + chosenImage + "')";
  document.body.style.backgroundImage = bgImg;

// const images = ["1.jpeg", "2.jpeg"];

// chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// bgImage.style.width = "50%";

// document.body.appendChild(bgImage);

// document.body.style.backgroundImage = bgImg;
