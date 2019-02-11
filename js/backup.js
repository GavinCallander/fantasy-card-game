// atk (once per card)************************
// player clicks own card to push to battleField
    // if cards on comp side, battle
// choose the card player wants to attack with
function playerBattle() {
    for (let i = 0; i < playerField.length; i++) {
        if (this.dataset.name === playerField[i].name) {
            battleField.push(playerField[i]);
            playerCard = battleField[0];
            pField.forEach(function(card) {
                card.removeEventListener("click", playerBattle);
            })
            cField.forEach(function(card) {
                card.addEventListener("click", atkCompCard);
            });
        };
    };  
};
// choose the computer card to attack
function atkCompCard() {
        console.log("CLICK!");
        for (let i = 0; i < compField.length; i++) {
            if (this.dataset.name === compField[i].name) {
                
                battleField.push(compField[i]);
                console.log(battleField);
                compCard = battleField[1];
            }; 
            battleResult();
        };
    };
// battle result
function battleResult() {
    let a = compCard.hp - playerCard.atk;
    let b = playerCard.hp - compCard.atk;
    if (a < 1) {
        console.log("comp card is gone");
    }
    if (b < 1) {
        console.log("player card is gone");
    }
};
    
    // if nothing, direct hit

// if no win, end turn
function playerEndTurn() {
    turnOne = false;
    compTurn();
};