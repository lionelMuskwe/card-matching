class Deck {
    constructor(deck) {
        this.deck_of_cards = [];
        // const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        // const suits = ["♠", "♥", "♦", "♣"];
        this.ranks = ["A", "2", "3", "4", "5", "6"];
        this.suits = ["♠","♥" ];
    }


    shuffleDeck() {
        for (let i = this.deck_of_cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.deck_of_cards[i],this.deck_of_cards[j]] = [this.deck_of_cards[j], this.deck_of_cards[i]];
        }
    }

    append(card){
        this.deck_of_cards.push(card);
    }

    createDeck() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                let card_duplicate_1 = new Card(rank, suit);
                let card_duplicate_2 = new Card(rank, suit);
                deck.append(card_duplicate_1);
                deck.append(card_duplicate_2);
            })
        });
        this.shuffleDeck();
    }

    getCard(r, s) {
        let count = 0;
        for (const card of this.deck_of_cards) {
            // console.log("Search card: " + card.rank + " of  " + card.suit);
            if (card.suit === s && card.rank === r){
                return card;
            }
            count+=1
        };
        console.log("Card not found");
        return false;
        // console.log("Search count: " + count);
    }

    compareCards(card_one, card_two){
        if ((card_one.rank == card_two.rank) && (card_one.suit == card_two.suit)) {

            return true;
        } else {
            return false;
        }
    }
}