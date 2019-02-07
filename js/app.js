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
    },
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
var battleField = [];
var cHand = document.querySelectorAll(".chandcard");
var pHand = document.querySelectorAll(".phandcard");
var cField = document.querySelectorAll(".cfieldcard");
var pField = document.querySelectorAll(".pfieldcard");
var pDeck = document.querySelector("#playerdeck");
//turn variables
var pTurn = false;
var pDraw = false;
var pAtk = false;
var pBattle = false;
var cTurn = false;
var cDraw = false;
var cAtk = false;
var cBattle = false;

// initialize game and place cards in player and comp hands from deck
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 3; i++) {
        compHand.push(compDeck.shift());
        playerHand.push(playerDeck.shift());
    };
    startingPlayer();
    turn();
    showCompHandCards();
    showPlayerHandCards();
});
// function to set starting player
function startingPlayer() {
    let num = Math.floor(Math.random() * 10);
    let num1 = num%2;
    if (num1 === 0) {
        pTurn = true;
    } else {
        cTurn = true;
    };console.log(pTurn);
};
// select whose turn it is
function turn() {
    if (pTurn === true) {
        playerTurn();
    } else {
        compTurn();
    };
};
// player turn logic
function playerTurn() {
    if (pDraw === false) {
        pDeck.addEventListener("click", playerDrawCard);
    };
    if (pAtk === false) {
        pHand.forEach(function(card) {
        card.addEventListener("click", playerFieldCard);
    });
    };
    if (pBattle === false) {
        pField.forEach(function(card) {
        card.addEventListener("click", declareBattle);
    });
    };
}; 
// computer turn logic  ** revise logic so can only happen when false
function compTurn() {
    if (cDraw === false) {
        compDrawCard();
        cDraw = true;
    };
    if (cAtk === false) {
        compFieldCard();
    }
};


// show back of all cards in comp hand  *** Replace with image
function showCompHandCards() {
    compHand.forEach(function(card, i) {
        cHand[i].children[0].textContent = card.name;
        cHand[i].children[1].textContent = card.atk;
        cHand[i].children[2].textContent = card.hp;
        // cHand[i].setAttribute("data-name", card.name);
    });
};
// show values of all cards in player hand *** Style once completed
function showPlayerHandCards() {
    playerHand.forEach(function(card, i) {
        pHand[i].children[0].textContent = card.name;
        pHand[i].children[1].textContent = card.atk;
        pHand[i].children[2].textContent = card.hp;
        pHand[i].setAttribute("data-name", card.name);
    });
};
// player draws new card
function playerDrawCard() {
    if (playerDeck.length > 0) {
        for (let i = 0; i < 1; i++) {
            playerHand.push(playerDeck.shift());
        }; 
        showPlayerHandCards();
        pDraw = true;
        pDeck.removeEventListener("click", playerDrawCard);
    } else {
        console.log("No more cards!");
    }
};
// computer draws new card
function compDrawCard() {
    if (compDeck.length > 0) {
        for (let i = 0; i < 1; i++) {
            compHand.push(compDeck.shift());
        };
        setTimeout(showCompHandCards(), 2000);
        cDraw = true;
    } else {
        console.log("No more cards!");
    };
};
// player plays card from hand - card is removed from playerHand and moved to playerField
function playerFieldCard() {
    for (let i = 0; i < playerHand.length; i++) {
        if (this.dataset.name === playerHand[i].name) {
            playerField.push(playerHand.splice(i, 1)[0]);
            pHand[i].children[0].textContent = "";
            pHand[i].children[1].textContent = "";
            pHand[i].children[2].textContent = "";
            pHand.forEach(function(card) {
                card.addEventListener("click", playerFieldCard);
            });
        }; 
        showPlayerFieldCards(); 
    };
};
// comp plays card from hand - card is removed from compHand and moved to compField
function compFieldCard() {
    let i = Math.floor(Math.random() * compHand.length);
    compField.push(compHand.splice(i, 1));
    console.log(i);
    cHand[compHand.length].children[0].textContent = "";
    cHand[compHand.length].children[1].textContent = "";
    cHand[compHand.length].children[2].textContent = "";
    showCompHandCards();
};
// show cards that have entered playerField in pField
function showPlayerFieldCards() {
    playerField.forEach(function(card, i) {
        pField[i].children[0].textContent = card.name;
        pField[i].children[1].textContent = "";
        pField[i].children[2].textContent = card.atk;
        pField[i].children[3].textContent = card.hp;
    });
};
function showCompFieldCards() {
    compField.forEach(function(card, i) {
        cField[i].children[0].textContent = card.name;
        cField[i].children[1].textContent = "";
        cField[i].children[2].textContent = card.atk;
        cField[i].children[3].textContent = card.hp;
    });
};

// click card in field to attack opponent
    // click event on player card
    // click event on enemy card
        // enemy card hp - player card atk
        // if answer is negative add to enemy hp

function declareBattle() {
    console.log("CLICK!")
    battleField.push(this.dataset.atk);
    console.log(battleField);
    cField.forEach(function(card) {
        card.addEventListener("click", setUpBattle);
    });
};

function setUpBattle() {
    battleField.push(this.dataset.hp);
    console.log(battleField);
}

function endTurn() {
    if (pTurn === true) {
        pTurn = false;
        cTurn = true;
    } else {
        pTurn = true;
        cTurn = false;
    };
};