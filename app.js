const game = {};

// create array to store player images and id's
game.images = [
  { id: 1, src: "./images/alisson.jpg", name: "Alisson" },
  { id: 2, src: "./images/alexanderArnold.jpg", name: "Alexander-Arnold" },
  { id: 3, src: "./images/fabinho.jpg", name: "Fabinho" },
  { id: 4, src: "./images/firmino.jpg", name: "Firmino" },
  { id: 5, src: "./images/gomez.jpg", name: "Gomez" },
  { id: 6, src: "./images/henderson.jpg", name: "Henderson" },
  { id: 7, src: "./images/mane.jpg", name: "Mane" },
  { id: 8, src: "./images/robertson.jpg", name: "Robertson" },
  { id: 9, src: "./images/salah.jpg", name: "Salah" },
  { id: 10, src: "./images/vanDijk.jpg", name: "Van Dijk" },
  { id: 11, src: "./images/wijnaldum.jpg", name: "Wijnaldum" },
  { id: 3, src: "./images/ox.jpg", name: "Oxlade-Chamberlain" },
];

// for each to display images on page
game.displayImages = () => {
  const doubledArray = [];

  game.images.map((image) => {
    return doubledArray.push(image, image);
  });

  const cards = document.querySelector(".cards");

  const cardsToDisplay = doubledArray.map((image) => {
    console.log(image);
    return (card = `
    <div class="container">
        <img src=${image.src} alt=${image.name}/>
    </div>`);
  });
  cards.innerHTML = cardsToDisplay;
};

// onclick function to turn over card

// variable to store first card
// variable to store second card

// if first card id is equal to second card id remove from game

// else turn back over
// reset variables

game.init = () => {
  game.displayImages(game.doubledArray);
  //   game.doubleArrayLength();
};

game.init();
