class FormValidate {
  static pattern = {
    // name: /[^a-zа-яё ]/iu,
    login: /^[a-zа-яё0-9_-]{2,20}$/i,
    email: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
    password: {
      cyrillic: /[а-я]/i,
      digit: /\d/,
      upper: /[A-Z]+/,
      lower: /[a-z]+/,
      symbol: /['^£$%&*()}{@#~?><,|=_+¬-]/,
    },
  };

  static testName(str) {
    if (str.length < 2)
      return { status: false, error: "Имя не должно быть короче 2 символов" };
    if (!this.pattern.login.test(str))
      return { status: false, error: "Поле может содержать только буквы, цифры, дефис или нижнее подчеркивание" };

    return { status: true };
  }

  static testLogin(str) {
    return this.pattern.login.test(str);
  }

  static testEmail(str) {
    if (!this.pattern.email.test(str))
      return { status: false, error: "Введен не валидный email" };

    return { status: true };
  }

  static testPassword(str) {
    if (str.length < 8 || str.length > 24)
      return { status: false, error: "Длина пароля должна быть от 8 до 24 символов" };
    if (this.pattern.password.cyrillic.test(str))
      return { status: false, error: "В введенном пароле присутствует кириллица" };
    if (!this.pattern.password.digit.test(str))
      return { status: false, error: "Пароль должен содержать как минимум 1 цифру" };
    if (!this.pattern.password.upper.test(str))
      return { status: false, error: "Пароль должен содержать как минимум 1 заглавную букву" };
    if (!this.pattern.password.lower.test(str))
      return { status: false, error: "Пароль должен содержать как минимум 1 строчную букву" };
    if (!this.pattern.password.symbol.test(str))
      return { status: false, error: "Пароль должен содержать как минимум 1 специальный символ" };

    return { status: true };
  }
}

export default FormValidate;
