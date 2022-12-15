const InputView = require("./InputView");
const LottoMaker = require("./LottoMaker");
const Money = require("./Money");
const OutputView = require("./OutputView");

class LottoGame {
  #quantity;
  #lottos;

  constructor() {
    this.#quantity;
    this.#lottos;
  }

  startGame() {
    InputView.getMoney(this.handleMoney);
  }

  handleMoney = (money) => {
    this.#quantity = new Money(money).getQuantity();
    OutputView.printQuantity(this.#quantity);
    this.#lottos = LottoMaker.generate(this.#quantity);
    OutputView.printLottos(this.#lottos);
  };
}

module.exports = LottoGame;
