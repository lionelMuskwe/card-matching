var card_one_open = "";
var card_two_open = "";
previousSelectedCards = [];

var start_game_button = document.getElementById("load-deck");
start_game_button.onclick = addCardContainerEventListeners;
var test_button = document.getElementById("test-button");
test_button.onclick = function(){
    deck.forEach(card => {
        console.log(String(card));
    })
    console.log("Printed Cards");
    console.log("Deck size :" + deck.length);
};


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
      });
    });
}


function displayCardAfterClick(){
    // console.log(card_one_open + " vs " + card_two_open);
    if (card_one_open != true){
        card_one_open = true;
    }
    else if (card_one_open  && !card_two_open){
        card_two_open = true;
    }
    else if (card_one_open && card_two_open){
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

function CreateCardsAndDisplayFromDeck(deck){
    deck.forEach(card => {
        // Create the parent container element
        var cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        let id = card.rank + "-" + card.suit;
        cardContainer.classList.add(id);

        if (card.suit === "♦" || card.suit === "♥" ){
            cardContainer.classList.add("black-colour");
        }
        else {
            cardContainer.classList.add("red-colour");
        }

        // Create the card cover element
        var cardCover = document.createElement("div");
        cardCover.classList.add("card-cover");

        // Create the card index element
        var cardIndex = document.createElement("div");
        cardIndex.classList.add("card-index");

        // Append the card index element to the card cover element
        cardCover.appendChild(cardIndex);

        // Create the card details element
        var cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details");

        // Create the card rank element
        var cardRank = document.createElement("div");
        cardRank.classList.add("card-rank");
        if (card.suit === "♦" || card.suit === "♥" ){
            cardRank.classList.add("black-colour-rank");
        }
        else {
            cardRank.classList.add("red-colour");
        }
        cardRank.textContent = card.rank;

        // Create the card suit element
        var cardSuit = document.createElement("div");
        cardSuit.classList.add("card-suit");
        cardSuit.textContent = card.suit;

        // Append the card rank and card suit elements to the card details element
        cardDetails.appendChild(cardRank);
        cardDetails.appendChild(cardSuit);

        // Append the card cover and card details elements to the card container element
        cardContainer.appendChild(cardCover);
        cardContainer.appendChild(cardDetails);

        // Append the card container element to the document body or another desired parent element
        cardsParentContainer = document.querySelector(".cards-container");
        cardsParentContainer.appendChild(cardContainer);

    })
}


var deck = new Deck();
deck.createDeck();

CreateCardsAndDisplayFromDeck(deck.deck_of_cards)
addCardContainerEventListeners()


$(document).on("click", ".card-container", function() {
    displayCardAfterClick();

    // Get details of the clicked cards
    if (card_one_open == true || ((card_one_open && card_two_open == false) || card_two_open == true)) {
        let l_c_r =  $(this).find(".card-rank").html();
        let l_c_s =  $(this).find(".card-suit").html();
        // console.log("Selected card is : " + l_c_s + " of " + l_c_r);
        previousSelectedCards.push(deck.getCard(l_c_r, l_c_s));

        if (previousSelectedCards.length == 2){
            if (deck.compareCards(previousSelectedCards[0], previousSelectedCards[1])){
                console.log("Cards are similar");
                // Remove the cards from screen
                deleteCardFromScreen(previousSelectedCards[0]);
                deleteCardFromScreen(previousSelectedCards[1]);
                // Remove the cards from deck

            } else {
                console.log("Not Similar");
            }
        }
    } else {
        previousSelectedCards = [];
    }
  });


function checkIfCardsMatch(){
    console.log("Last clicked card: " + lastClickedCard.rank)
}

function deleteCardFromScreen(card_to_delete){
    let id = card_to_delete.rank + "-" + card_to_delete.suit;
    let cardContainersCollection = document.getElementsByClassName(id);
    var cardContainers = Array.from(cardContainersCollection);

    // Addint an event listner to each container
    cardContainers.forEach(container => {
        container.classList.add("completed");
    });

}

function deleteCardFromDeck(){

}