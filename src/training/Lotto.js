class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateNumber(numbers);
    this.validateLength(numbers);
    this.validateDuplication(numbers);
    this.validateRange(numbers);
  }

  validateNumber(numbers) {
    if (isNaN(numbers.join(""))) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 숫자의 개수는 6개입니다.");
    }
  }

  validateDuplication(numbers) {
    if ([...new Set(numbers)].length < 6) {
      throw new Error("[ERROR] 중복 없이 입력해 주세요.");
    }
  }

  validateRange(numbers) {
    if (numbers < 1 || numbers > 45) {
      throw new Error("[ERROR] 숫자의 범위는 1~45입니다.");
    }
  }
}

module.exports = Lotto;
