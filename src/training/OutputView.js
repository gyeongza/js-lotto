const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printQuantity(quantity) {
    Console.print(`${quantity}개를 구매했습니다.`);
  },
};

module.exports = OutputView;
