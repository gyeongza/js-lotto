const InputView = require("./InputView");
const Money = require("./Money");

class LottoGame {
  #money;

  constructor() {
    this.#money;
  }

  startGame() {
    InputView.getMoney(this.handleMoney);
  }

  handleMoney = (money) => {
    new Money(money)
    this.#money = money;
  };
}

module.exports = LottoGame;
