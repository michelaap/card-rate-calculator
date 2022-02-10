import CardRate from "./CardRate";

export default class Visa extends CardRate {
  constructor(readonly amount: number) {
    super("visa", amount);
  }

  getRate(): number {
    return 1.3;
  }
}
