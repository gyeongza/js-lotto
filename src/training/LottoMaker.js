const { Random } = require("@woowacourse/mission-utils");

const LottoMaker = {
  generate(quantity) {
    let lottos = [];
    while (lottos.length < quantity) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(lotto.sort((a, b) => a - b));
    }
    return lottos;
  },
};

module.exports = LottoMaker;
