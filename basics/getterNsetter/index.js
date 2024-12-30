/* Class based getter and setter (most commonly used)

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  //let's create a getter
  get password() {
    return this._password.toUpperCase(); //but when we try to access it, or anyone accesses it, it'll be shown like ROY_ABCs
  }

  get email() {
    return `${this._email.slice(0, 3)}***`; //if anyone tries to get(access) the email property, it'll be returned like roy***s
  }

  set email(value) {
    this._email = value; //but we're setting (saving) it as it's been provided to us -> roy@mail.com
  }

  set password(value) {
    this._password = value; //it's setting the value of password at it's being passed, roy_abc
  }
}

//so basically both getter and setter are specials methods in classes that allow us to control access to the properties of an object.

const roy = new User('roy@mail.com', 'roy_abc');
console.log(roy);

console.log(roy.password);
console.log(roy.email); */

/* function based getter and setter

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get() {
      return this._email.toUpperCase();
    },
    set(value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, 'password', {
    get() {
      return '****';
    },
    set(value) {
      this._password = value;
    },
  });
}

const roy = new User('john@cena.com', '321');
console.log(roy);

console.log(roy.email); //upper case email
console.log(roy.password); //****
*/

/* object based getter and setter (least used)

const User = {
  _email: 'roy@mail.com',
  _password: '321',

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return '****';
  },

  set password(value) {
    this._password = value;
  },
};

const roy = Object.create(User);

// const roy = Object(User);
// console.log(roy); //here i was trying to print the 'own' properties of the newly created roy object, which at the moment is none
// let's try to add a new property
roy.company = 'very big company';
// console.log(roy.__proto__); //prints the properties of the parent object
console.log(roy); //now this prints the newly added property

// although despite not having anything in the roy Object, we still get to access the inherited properties/methods of its parent due to inheritence

console.log(roy.email); //we can access email getter

// console.log(roy.email);
// console.log(roy.password);
*/
