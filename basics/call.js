function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username); //using call method here, because it transfers the current context of a function to another function, which in this case is setUsername (reciever function) and createUsername (sender function)
  this.email = email;
  this.password = password;
}

const result = new createUser('rocky', 'rocky@maill.com', '123'); //using new keyword for creating a new instance of this 'createUser' function
console.log(result);
