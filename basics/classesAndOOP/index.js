// const obj = {
//   userName: 'tommy',
//   profession: 'developer',
//   getUserName: function () {
//     console.log('username', this.userName);
//     console.log('this in fn', this);
//   },
// };

// obj.getUserName();

function user(username, profession, isLoggedIn) {
  this.username = username;
  this.profession = profession;
  this.isLoggedIn = isLoggedIn;
  return this;
}

// const user1 = user('karan', 'developer', true); //same goes for this
// const user2 = user('roy', 'desiger', true); //this overrides the previous values, as it is refering to the same location/address in the memory

//lets create a new instance to overcome this issue

const user1 = new user('karan', 'developer', true); //here we're creating a new instance of the object user
const user2 = new user('roy', 'designer', true); //here as well

console.log(user1);
console.log(user2);

//to check if an instance is an instance of an object, we can use intanceof operator

console.log(user1 instanceof user); //true
