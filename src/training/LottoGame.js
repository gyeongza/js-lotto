const Bonus = require("./Bonus");
const InputView = require("./InputView");
const Lotto = require("./Lotto");
const LottoMaker = require("./LottoMaker");
const Money = require("./Money");
const OutputView = require("./OutputView");

class LottoGame {
  #quantity;
  #lottos;
  #winningNumbers;
  #bonus;

  constructor() {
    this.#quantity;
    this.#lottos;
    this.#winningNumbers;
    this.#bonus;
  }

  startGame() {
    InputView.getMoney(this.handleMoney);
  }

  handleMoney = (money) => {
    this.#quantity = new Money(money).getQuantity();
    OutputView.printQuantity(this.#quantity);
    this.#lottos = LottoMaker.generate(this.#quantity);
    OutputView.printLottos(this.#lottos);
    this.getWinningNumbers();
  };

  getWinningNumbers() {
    InputView.askWinningNumbers(this.handleWinningNumbers);
  }

  handleWinningNumbers = (numbers) => {
    this.#winningNumbers = numbers
      .split(",")
      .map((number) => parseInt(number, 10));
    new Lotto(this.#winningNumbers)

    this.getBonus()
  };

  getBonus() {
    InputView.askBonusNumber(this.handleBonusNumber)
  }

  handleBonusNumber = (bonus) => {
    new Bonus(bonus, this.#winningNumbers)
    this.#bonus = bonus;
  }
}

module.exports = LottoGame;
