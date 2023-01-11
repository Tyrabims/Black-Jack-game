let playerD = {
    name:"Per",
    chips: 200
    }

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messages = document.getElementById("messager");
let sumNums = document.getElementById("sumNum");
let cardNums = document.getElementById("cardNum");
let playerDetails = document.getElementById("player");


playerDetails.textContent =playerD.name + ": $" + playerD.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11 
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardNums.textContent = "Cards: "; 
    for (i = 0; i < cards.length; i++) {
        cardNums.textContent += cards[i] + " ";
    }
    
    sumNums.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You 've got Blackjack!";
    } else {
        message = "You 're out of the game!";
        isAlive = false;
    }
      
    messages.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}


