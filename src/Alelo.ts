import Card from "./Card";

export default class Alelo extends Card {
  constructor(readonly amount: number) {
    super("alelo", amount);
  }
}
