const InputView = require("./InputView");
const Money = require("./Money");
const OutputView = require("./OutputView");

class LottoGame {
  #quantity;

  constructor() {
    this.#quantity;
  }

  startGame() {
    InputView.getMoney(this.handleMoney);
  }

  handleMoney = (money) => {
    this.#quantity = new Money(money).getQuantity();
    OutputView.printQuantity(this.#quantity);
  };
}

module.exports = LottoGame;
