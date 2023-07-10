// The function below creates the deck
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.id = this.rank + " of " + this.suit;
    }

    toString(){
        return this.rank + " of " + this.suit;
    }
}