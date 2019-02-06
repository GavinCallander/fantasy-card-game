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
    },
    {
        name: "stuff 4",
        atk: 4,
        hp: 4
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
// var cHandName = document.querySelectorAll(".chname");
// var cHandAtk = document.querySelectorAll(".chatk");
// var cHandHp = document.querySelectorAll(".chhp");
var pHand = document.querySelectorAll(".phcard");
var pHandName = document.querySelectorAll(".phatk");
var pHandHp = document.querySelectorAll(".phhp");



// document.getElementById("compdeck").addEventListener("click", drawCard);

// initialize game and place cards in player and comp hands from deck
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 3; i++) {
        compHand.push(compDeck.shift());
        // compDeck.shift();
        playerHand.push(playerDeck.shift());
        // playerDeck.shift();
    };
    showCompCard();
});
console.log(playerHand);
console.log(compHand);

// show back of all cards in comp hand  *** Replace with image
function showCompCard () {
    cHand.forEach(function(card, i) {
        card.children[0].innerHTML = compHand[i].name;
        card.children[1].innerHTML = compHand[i].atk;
        card.children[2].innerHTML = compHand[i].hp;
        console.dir(cHand);
    });
}






