const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printQuantity(quantity) {
    Console.print(`${quantity}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(JSON.stringify(lotto).replace(/,/g, ", "));
    });
  },
};

module.exports = OutputView;
