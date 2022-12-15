const InputView = require("./InputView");
const Lotto = require("./Lotto");

class LottoGame {
  #money;

  constructor() {
    this.#money;
  }

  startGame() {
    InputView.getMoney(this.handleMoney);
  }

  handleMoney = (money) => {
    this.#money = money;
  };
}

module.exports = LottoGame;
