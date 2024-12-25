class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    return `welcome, ${this.username}`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //super keyword is calling the (parent class constructor, allowing the child class to inherit properties (paramerts) and behavior (methods)) User class constructor and passing the username parameter, here super keyword is basically behind the scence providing the context of Teacher class's username to the username of User class's constructor, it's being possible due to extends keyword
    this.email = email;
    this.password = password;
  }

  addCourse() {
    return `a new course was launched by ${this.username}`;
  }
}
const user1 = new User('roy');
const tutor1 = new Teacher('mauni', 'mauni@mail.com', '123');
console.log(tutor1.addCourse());
console.log(tutor1.logMe()); //it's able to inherit the logMe method of User class

// const user2 = new User('bhalu');
// console.log('user1', user1.logMe());
// console.log('user2', user2.logMe());
