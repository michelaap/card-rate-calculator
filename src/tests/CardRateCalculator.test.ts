import Alelo from "../Alelo";
import CardRateCalculator from "../CardRateCalculator";
import MasterCard from "../MasterCard";
import Visa from "../Visa";

test("Deve calcular a taxa do cartão visa", () => {
  const cardRate = new CardRateCalculator();
  cardRate.addCard(new Visa(2000));
  expect(cardRate.getRates()).toBe(26);
});

test("Deve calcular a taxa do cartão mastercard", () => {
  const cardRate = new CardRateCalculator();
  cardRate.addCard(new MasterCard(3000));
  expect(cardRate.getRates()).toBe(45);
});

test("Deve calcular a taxa do cartão alelo", () => {
  const cardRate = new CardRateCalculator();
  cardRate.addCard(new Alelo(5000));
  expect(cardRate.getRates()).toBe(0);
});
