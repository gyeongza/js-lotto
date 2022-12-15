class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    if (parseInt(money, 10) % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Money;
