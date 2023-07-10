const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♠", "♥", "♦", "♣"];
var deck = [];

var card_one_open = false;
var card_two_open = false;

function createDeck() {
    let counter = 0;
    suits.forEach(suit => {
        ranks.forEach(rank => {
            console.log(rank + " of " + suit);
            counter +=1 ;
        })
    });
    console.log("Counter = " + counter);
}

class Card {
    constructor(rank, suit, id) {
        this.rank = rank;
        this.suit = suit;
        this.id = id;
    }
}

// createDeck();





var start_game_button = document.getElementById("load-deck");
start_game_button.onclick = addCardContainerEventListeners();


// This code snippet adds event listeners for each card container,
// It also allows the cards to show and hide their details
function addCardContainerEventListeners(){
    // Getting the card containers
    let cardContainersCollection = document.getElementsByClassName('card-container');
    var cardContainers = Array.from(cardContainersCollection);

    // Addint an event listner to each container
    cardContainers.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('show-details');
            displayCardAfterClick()
      });
    });
}


function displayCardAfterClick(){
    if (card_one_open != true){
        console.log("One Card is now open");
        card_one_open = true;
    }
    else if (card_one_open  && !card_two_open){
        console.log("Two cards are now open")
        card_two_open = true;
    }
    else if (card_one_open && card_two_open){
        console.log("Cards are now closed")
        // Remove cards if matching
        card_one_open = false;
        card_two_open = false;
        hideAllCards()
    }
}

function hideAllCards(){
    let cardContainersCollection = document.getElementsByClassName('card-container');
    var cardContainers = Array.from(cardContainersCollection);

    // Addint an event listner to each container
    cardContainers.forEach(card => {
        var isDetailsShown = card.classList.contains("show-details");

        if (isDetailsShown) {
          card.classList.remove("show-details");
        } 
    });
}


// var parentElement = document.querySelector(".cards-container");
// parentElement.addEventListener("click", function(event){
//     if (event.target.classList.contains("card-container")){

//     }
// })