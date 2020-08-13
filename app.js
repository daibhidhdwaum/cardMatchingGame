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
  { id: 12, src: "./images/ox.jpg", name: "Oxlade-Chamberlain" },
];

game.selectedCards = [];

// for each to display images on page
game.displayImages = () => {
  const doubledArray = [];

  game.images.map((image) => {
    return doubledArray.push(image, image);
  });

  const cards = document.querySelector(".cards");

  game.shuffleCards(doubledArray);

  const cardsToDisplay = doubledArray
    .map((image) => {
      console.log(image);
      return (card = `
    <div class="card" id=${image.id}>
        <img src=${image.src} alt=${image.name}/>
    </div>`);
    })
    .join("");

  cards.innerHTML = cardsToDisplay;
};

// shuffle cards
game.shuffleCards = (arr) => {
  let cards = arr;
  var j, x, i;
  for (i = cards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = cards[i];
    cards[i] = cards[j];
    cards[j] = x;
  }
  return cards;
};

// onclick function to turn over card
game.selectCards = () => {
  document.addEventListener("click", (e) => {
    e.preventDefault;

    if (!e.target.parentElement.id) {
      return;
    } else {
      let selectedCard = e.target.parentElement.id;
      selectedCard = parseInt(selectedCard);
      game.selectedCards.push(selectedCard);
    }

    game.compareCards();
  });
};

// compare the id's of the selected cards
game.compareCards = () => {
  let cards = game.selectedCards;

  if (cards.length === 1) {
    console.log("Choose a second card");
  }

  if (cards.length === 2) {
    // if first card id is equal to second card id remove from game
    if (cards[0] === cards[1]) {
      console.log("It's a match!");
      console.log(cards[0]);
    } else if (cards[0] !== cards[1]) {
      console.log("Not this time!!");
    }
  }

  // reset array
  if (cards.length === 2) {
    game.selectedCards = [];
  }
};

// else turn back over

game.init = () => {
  game.displayImages(game.doubledArray);
  game.selectCards();
};

game.init();
