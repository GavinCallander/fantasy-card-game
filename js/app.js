console.log("Up and running!");
// player starts with three cards in their hand
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
    },
    {
        name: "stuff 4",
        atk: 4,
        hp: 4
    }
];
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
    },
    {
        name: "thing 4",
        atk: 4,
        hp: 5
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
var pDeck = document.querySelector("#playerdeck");
var cField = document.querySelectorAll("cfieldcard");
var pField = document.querySelectorAll("pfieldcard");



// document.getElementById("compdeck").addEventListener("click", drawCard);

// initialize game and place cards in player and comp hands from deck
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 3; i++) {
        compHand.push(compDeck.shift());
        playerHand.push(playerDeck.shift());
    };
    showCompHandCards();
    showPlayerHandCards();
});
// show back of all cards in comp hand  *** Replace with image
function showCompHandCards() {
    compHand.forEach(function(card, i) {
        cHand[i].children[0].textContent = card.name;
        cHand[i].children[1].textContent = card.atk;
        cHand[i].children[2].textContent = card.hp;
    });
};
// show values of all cards in player hand *** Style once completed
function showPlayerHandCards() {
    playerHand.forEach(function(card, i) {
        pHand[i].children[0].textContent = card.name;
        pHand[i].children[1].textContent = card.atk;
        pHand[i].children[2].textContent = card.hp;
    });
};
// player draws new card
function playerDrawCard() {
    pDeck.addEventListener("click", function() {
        for (let i = 0; i < 1; i++) {
            playerHand.push(playerDeck.shift());
        }; showPlayerHandCards();
    });
};
playerDrawCard();
// click event on div to push attached var to field
    // click on card in pHand to select
    // click on space in playerField to push value from playerHand
function playerFieldCard() {
    
}