export default abstract class CardRate {
  constructor(readonly flag: string, readonly amount: number) {}

  calculate() {
    return (this.amount * this.getRate()) / 100;
  }

  abstract getRate(): number;
}
