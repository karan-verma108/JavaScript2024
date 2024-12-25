class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}loremIpsum100`;
  }

  capitalizeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User('john', 'cena@mail.com', 'you cannot see me');
// console.log('user1', user1.encryptPassword());
// console.log('user1', user1.capitalizeUsername());

//if we had to do this without using class syntax

function UserFn(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

UserFn.prototype.encryptPassword = function () {
  return `${this.password}loremImpsum`;
};

UserFn.prototype.capitalizeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new UserFn('rocky', 'rocky@mail.com', '123');
// console.log('user2', user2);
console.log('user2 encrtpass', user2.encryptPassword());
console.log('user2 capitlize username', user2.capitalizeUsername());
