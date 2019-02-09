console.log("running");
// player deck arrays
var playerDeck = [
    {
        name: "one",
        image: "",
        atk: 1,
        hp: 1,
    },
    {
        name: "two",
        image: "",
        atk: 1,
        hp: 1,
    },
    {
        name: "three",
        image: "",
        atk: 1,
        hp: 2
    },
    {
        name: "four",
        image: "",
        atk: 10,
        hp: 10
    },
    {
        name: "five",
        image: "",
        atk: 2,
        hp: 3
    },
    {
        name: "six",
        image: "",
        atk: 3,
        hp: 2
    },
    {
        name: "seven",
        image: "",
        atk: 3,
        hp: 4
    },
    {
        name: "eight",
        image: "",
        atk: 4,
        hp: 3
    },
    {
        name: "nine",
        image: "",
        atk: 4,
        hp: 5
    },
    {
        name: "ten",
        image: "",
        atk: 5,
        hp: 4
    }
]
var compDeck = [
    {
        name: "eleven",
        image: "",
        atk: 1,
        hp: 1
    },
    {
        name: "twelve",
        image: "",
        atk: 1,
        hp: 1
    },
    {
        name: "thirteen",
        image: "",
        atk: 1,
        hp: 2
    },
    {
        name: "fourteen",
        image: "",
        atk: 2,
        hp: 1
    },
    {
        name: "fifteen",
        image: "",
        atk: 2,
        hp: 3
    },
    {
        name: "sixteen",
        image: "",
        atk: 3,
        hp: 2
    },
    {
        name: "seventeen",
        image: "",
        atk: 3,
        hp: 4
    },
    {
        name: "eighteen",
        image: "",
        atk: 4,
        hp: 3
    },
    {
        name: "nineteen",
        image: "",
        atk: 4,
        hp: 5
    },
    {
        name: "twenty",
        image: "",
        atk: 5,
        hp: 4
    }
]
// DOM variables
var playerHand = [];
var compHand = [];
var playerField = [];
var compField = [];
var playerDisc = [];
var compDisc = [];
var playerLp = 10;
var compLp = 10;
var battleField = [];
var pHand = document.querySelectorAll(".phandcard");
var pHandName = document.querySelector(".phname");
var pHandAtk = document.querySelector(".phatk");
var pHandHp = document.querySelector(".phhp");
var cHand = document.querySelectorAll(".chandcard");
var pField = document.querySelectorAll(".pfieldcard");
var cField = document.querySelectorAll(".cfieldcard");
var pHero = document.querySelector("#playerhero");
var cHero = document.querySelector("#comphero");
var pDeck = document.querySelector("#playerdeck");
// turn variables
var pTurn = false;
var cTurn = false;
var pDraw = false;
var cDraw = false;
var pAtk = false;
var cAtk = false;
var pBattle = false;
var cBattle = false;
var turnOne = true;
// DOMContentLoaded and game initialization
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 3; i++) {
        compHand.push(compDeck.shift());
        playerHand.push(playerDeck.shift());
    };
    startingPlayer();
    turn();
    showCompHandCards();
    showPlayerHandCards();
    showPlayerLp();
    showCompLp();
});
// randomize starting player ** revise - repetition, could refactor to make DRY
function startingPlayer() {
    let num = Math.floor(Math.random() * 10);
    let num1 = num%2;
    if (num1 === 0) {
        pTurn = true;
    } else {
        cTurn = true;
    };console.log(pTurn);
};
function turn() {
    if (pTurn === true) {
        playerTurn();
    } else {
        compTurn();
    };
};
// ***PLAYER MOVE LOGIC***
// draw card
function playerTurn() {
    if (pDraw === false && playerDeck.length > 0) {
        pDeck.addEventListener("click", playerDrawCard);
    };
};
function playerDrawCard() {
    if (playerDeck.length > 0) {
        for (let i = 0; i < 1; i++) {
            playerHand.push(playerDeck.shift());
        };
        showPlayerHandCards();
        pDeck.removeEventListener("click", playerDrawCard);
        pHand.forEach(function(card) {
            card.addEventListener("click", playerFieldCard);
        });
    } else {
        console.log("No more cards!");
    };
};
// field card
function playerFieldCard() {
    for (let i = 0; i < playerHand.length; i++) {
        if (this.dataset.name === playerHand[i].name) {
            playerField.push(playerHand.splice(i, 1)[0]);
            pHand[i].children[0].textContent = "";
            pHand[i].children[1].textContent = "";
            pHand[i].children[2].textContent = "";
        }; 
        showPlayerFieldCards();
        pHand.forEach(function(card) {
            card.removeEventListener("click", playerFieldCard);
        });
        if (turnOne === true) {
            pHero.addEventListener("click", endTurn);
        }
        pField.forEach(function(card) {
            card.addEventListener("click", playerBattle);
        })
    };
};
// atk (once per card)************************
    // if cards on comp side, battle
// choose the card player wants to attack with
function playerBattle() {
    for (let i = 0; i < playerField.length; i++) {
        if (this.dataset.name === playerField[i].name) {
            battleField.push(playerField[i]);
            console.log(battleField);
            cField.forEach(function(card) {
                card.addEventListener("click", playerSetUpBattle);
            });
        };
        for (let x = 0; x < compField.length; i++) {
            battleField.push(compField[x]);
        };
        let a = battleField[1].hp - battleField[0].atk;
        let b = battleField[0].hp - battleField[1].atk;
        if (a < 1) {

        }
    };  
};
// choose the computer card to attack
function playerSetUpBattle() {
        console.log("CLICK!");
        for (let i = 0; i < compField.length; i++) {
            if (this.dataset.name === compField[i].name) {
                battleField.push(compField[i]);
                console.log(battleField);
            };
        };
    };
// battle result
function battleResult() {
    
} 
    
    // if nothing, direct hit

// if no win, end turn
function playerEndTurn() {
    turnOne = false;
    compTurn();
};


// ***COMP MOVE LOGIC***
// comp AI
function compTurn() {
    if (cDraw === false && compDeck.length > 0) {
        setTimeout(compDrawCard, 2000);
    };
};
// draw card
function compDrawCard() {
    for (let i = 0; i < 1; i++) {
        compHand.push(compDeck.shift());
    };
    showCompHandCards();
    setTimeout(compFieldCard, 2000);
};
// field card
function compFieldCard() {
    let i = Math.floor(Math.random() * compHand.length);
        console.log(i);
        compField.push(compHand.splice(i, 1)[0]);
        cHand[i].children[0].textContent = "";
        cHand[i].children[1].textContent = "";
        cHand[i].children[2].textContent = "";
    showCompFieldCards();
    if (turnOne === false) {
        setTimeout(compBattle, 2000);
    } else {
        setTimeout(endTurn, 2000);
    };
};
// atk (once per card)
    // if cards on player field, battle
function compBattle() {
    let i = Math.floor(Math.random() * compField.length);
        battleField.push(compField[i]);
    let x = Math.floor(Math.random() * playerField.length);
        battleField.push(playerField[x]);
    let a = (battleField[1].hp - battleField[0].atk);
    let b = (battleField[0].hp - battleField[1].atk);
        console.log(b);
    if (a < 1) {
        playerDisc.push(playerField.splice(i, 1));
        pField[x].children[0].textContent = "";
        pField[x].children[1].textContent = "";
        pField[x].children[2].textContent = "";
    }
    if (b < 1) {
        playerDisc.push(playerField.splice(i, 1));
        cField[i].children[0].textContent = "";
        cField[i].children[1].textContent = "";
        cField[i].children[2].textContent = "";
    }
    if (a < 0) {
        playerLp = playerLp + a;
        showPlayerLp();
    };
    if (b < 0) {
        compLp = compLp + b;
        showCompLp();
    };
};
// battle result
    // if not, direct hit

// if no win, end turn

// *** END TURN AND GAME LOGIC ***
function endTurn() {
    console.log("click!");
    if (pTurn === true) {
        pTurn = false;
        cTurn = true;
        turnOne = false;
        compTurn();
    } else {
        cTurn = false;
        pTurn = true;
        turnOne = false;
        playerTurn();
    };
};

function endGame() {
    if (pLp < 1) {
        console.log("Computer Wins!");
    } else if (cLp < 1) {
        console.log("Player Wins!");
    };
};

// ***PLAYER DISPLAY LOGIC***
function showPlayerLp() {
    pHero.textContent = playerLp;
};
// display cards in player hand
function showPlayerHandCards() {
    playerHand.forEach(function(card, i) {
        pHand[i].children[0].textContent = card.name;
        pHand[i].children[1].textContent = card.atk;
        pHand[i].children[2].textContent = card.hp;
        pHand[i].setAttribute("data-name", card.name);
    });
};
// display cards in player field
function showPlayerFieldCards() {
    playerField.forEach(function(card, i) {
        pField[i].children[0].textContent = card.name;
        pField[i].children[1].src = "";
        pField[i].children[2].textContent = card.atk;
        pField[i].children[3].textContent = card.hp;
        pField[i].setAttribute("data-name", card.name);
    });
};
// ***COMP DISPLAY LOGIC***
function showCompLp() {
    cHero.textContent = compLp;
};
// display cards in comp hnd
function showCompHandCards() {
    compHand.forEach(function(card, i) {
        cHand[i].children[0].textContent = card.name;
        cHand[i].children[1].textContent = card.atk;
        cHand[i].children[2].textContent = card.hp;
        cHand[i].setAttribute("data-name", card.name);
    });
};
// display cards in comp field
function showCompFieldCards() {
    compField.forEach(function(card, i) {
        cField[i].children[0].textContent = card.name;
        cField[i].children[1].textContent = "";
        cField[i].children[2].textContent = card.atk;
        cField[i].children[3].textContent = card.hp;
        cField[i].setAttribute("data-name", card.name);
    });
};