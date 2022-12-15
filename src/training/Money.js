class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    this.validateNumber(money);
    this.validateCash(money);
    this.validateRange(money);
  }

  validateNumber(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
  }

  validateCash(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
  }

  validateRange(money) {
    if (money <= 0) {
      throw new Error("[ERROR] 0원보다 큰 금액을 입력해야 합니다.");
    }
  }

  getQuantity() {
    return this.#money / 1000;
  }
}

module.exports = Money;
