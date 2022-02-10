import CardRate from "./CardRate";

export default class MasterCard extends CardRate {
  constructor(readonly amount: number) {
    super("mastercard", amount);
  }

  getRate(): number {
    return 1.5;
  }
}
