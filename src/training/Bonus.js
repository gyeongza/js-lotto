class Bonus {
  #bonus;

  constructor(bonus, winningNumbers) {
    this.validate(bonus, winningNumbers);
    this.#bonus = bonus;
  }

  validate(bonus, winningNumbers) {
    this.validateNumber(bonus);
    this.validateDuplication(bonus, winningNumbers);
    this.validateRange(bonus);
  }

  validateNumber(bonus) {
    if (isNaN(bonus)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
  }

  validateDuplication(bonus, winningNumbers) {
    if (winningNumbers.includes(parseInt(bonus, 10))) {
      throw new Error("[ERROR] 당첨 숫자와 중복 없이 입력해 주세요.");
    }
  }

  validateRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 숫자의 범위는 1~45입니다.");
    }
  }
}

module.exports = Bonus;
