console.log("Up and running!");
// player starts with three cards in their hand

var playerDeck = [
    {
        name: "thing 1",
        atk: 1,
        hp: 2
    },
    {
        name: "thing 2",
        atk: 2,
        hp: 3
    },
    {
        name: "thing 3",
        atk: 3,
        hp: 4
    }
];

var compDeck = [
    {
        name: "stuff 1",
        atk: 1,
        hp: 1
    },
    {
        name: "stuff 2",
        atk: 2,
        hp: 2
    },
    {
        name: "stuff 3",
        atk: 3,
        hp: 3
    }
];
// Declare DOM variables
var playerHand = [];
var compHand = [];
var playerField = [];
var compField = [];
var playerDisc = [];
var compDisc = [];
var cHand = document.querySelectorAll(".chandcard");
var pHand = document.querySelectorAll(".phandcard");



// document.getElementById("compdeck").addEventListener("click", drawCard);

// initialize game and place cards in player and comp hands from deck
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 3; i++) {
        compHand.push(compDeck.shift());
        playerHand.push(playerDeck.shift());
    };
    showCompCards();
    showPlayerCards();
});
// show back of all cards in comp hand  *** Replace with image
function showCompCards() {
    compHand.forEach(function(card, i) {
        cHand[i].children[0].textContent = card.name;
        cHand[i].children[1].textContent = card.atk;
        cHand[i].children[2].textContent = card.hp;
    });
};
// show values of all cards in player hand *** Style once completed
function showPlayerCards() {
    playerHand.forEach(function(card, i) {
        pHand[i].children[0].textContent = card.name;
        pHand[i].children[1].textContent = card.atk;
        pHand[i].children[2].textContent = card.hp;
    });
};






