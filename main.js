console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

var cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/-king-of-diamonds"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
		}
	};

function flipCard(cardId) {	
cardsInPlay.push(cards[cardId].rank);  
console.log("User flipped" + " " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);  
	checkForMatch();

};

flipCard(0);
flipCard(2);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);