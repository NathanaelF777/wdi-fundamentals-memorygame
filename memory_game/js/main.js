
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
let cardsInPlay = []

//function checkForMatch() {
	//if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		//alert("You found a match!");
		//} else if (cardsInPlay.length === 2) {
			//alert("Sorry, try again");
		//};
//}

function flipCard() {
	let id = this.getAttribute('data-id');
	console.log("User flipped " + cards[id].rank + ".");
	cardsInPlay.push(cards[id].rank);
	this.setAttribute('src', cards[id].cardImage);
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		//resetBoard();
		} else if (cardsInPlay.length === 2) {
			alert("Sorry, try again");
			//resetBoard();
		};	console.log(cards[id].suit);
	console.log(cards[id].cardImage);
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		console.log(cardElement);
	};
};

//function resetBoard() {
	//let flipped = document.getElementById('game-board').getElementsByTagName('img');
	//let removeFlipped =
	//while (flipped) {
		//flipped
	//}
	//for (let i = 0; i < flipped.length; i++) {
		//flipped[i].setAttribute('src', 'images/back.png');
//	};
//let cardsInPlay = []
//};

function refresh() {
		window.location.reload()
}

let button = document.getElementById('Reset');
button.addEventListener('click', refresh);

createBoard();



//test: flipCard(0);
//test: flipCard(2);
