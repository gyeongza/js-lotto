const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  getMoney(callback) {
    Console.readLine("구매금액을 입력해 주세요. ", callback);
  },

  askWinningNumbers(callback) {
    Console.readLine("당첨 번호를 입력해 주세요. ", callback);
  }
};

module.exports = InputView;
