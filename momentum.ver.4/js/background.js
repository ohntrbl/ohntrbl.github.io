const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
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