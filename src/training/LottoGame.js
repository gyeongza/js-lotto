const InputView = require("./InputView");
const Money = require("./Money");

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
    console.log(this.#quantity)
  };
}

module.exports = LottoGame;
