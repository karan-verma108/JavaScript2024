class User {
  constructor(username) {
    this.username = username;
  }

  printMyName() {
    return `Your name is : ${this.username}`;
  }

  static generateId() {
    //static methods belong to the class itself, not to the instances
    return 123;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}

const user1 = new User('roman');
const user2 = new Teacher('cody', 'cody@mail.com', '556');
// console.log(user2.printMyName()); //accessible due to inheritence
// console.log(user2.generateId()); // not accessible even though we inherted the properties and behavior of the parent class

// console.log(user1.generateId()); //not able to access generateId method because of static keyword

//static methods can be called on the class itself like this

console.log(User.generateId()); //accessible
console.log(Teacher.generateId()); //also accessible, because the class Teacher has access to it, not the instance of the class
