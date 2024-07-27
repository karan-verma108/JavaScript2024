class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  get password() {
    return `${this._password.toUpperCase()}1234`;
  }
  set password(value) {
    this._password = value;
  }
}

const userObj = new User('karan', 'abc');
console.log(userObj.password);
