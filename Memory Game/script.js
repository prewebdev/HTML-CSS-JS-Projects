const cards = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
];
let flippedCards = [];
let matchedCards = [];
let isGameOver = false;

const gameBoard = document.getElementById('game-board');
const resetButton = document.getElementById('reset-btn');

// function to shuffle the cards
function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

// function to create and render the cards 
function createCards() {
    shuffleCards();
    gameBoard.innerHTML = ''; 
    cards.forEach((cardValue, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', index);
        card.dataset.value = cardValue;
        card.innerHTML = '';
        card.addEventListener('click', flipcard);
        gameBoard.appendChild(card);
    });
}

// function to handle card flip 
function flipcard(event) {
    if (isGameOver || event.target.classList.contains('flipped') ||  flippedCards.length === 2) {
    return;
    }

const card = event.target;
card.innerHTML = card.dataset.value;
card.classList.add('flipped');
flippedCards.push(card);

if (flippedCards.length === 2) {
    checkForMatch();
  }
}

// function to check if the two flipped card match
function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === cards.length) {
            setTimeout(() => {
                alert('congratulations, You Win!');
                isGameOver = true;
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.innerHTML = '';
            card2.innerHTML = '';
            flippedCards = [];
        }, 1000);
    }
}

// function to reset the game 
function resetGame() {
    matchedCards = [];
    flippedCards = [];
    isGameOver = false;
    createCards();
}

// set up the game initially
createCards();

// add event listener to reset button
resetButton.addEventListener('click', resetGame);