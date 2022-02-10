import Card from "./Card";
import CardRate from "./CardRate";

export default class CardRateCalculator {
  cards: Card[];

  constructor() {
    this.cards = [];
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  getRates(): number {
    return this.cards.reduce((total, card) => {
      if (card instanceof CardRate) {
        total += card.calculate();
      }
      return total;
    }, 0);
  }
}
