const user = {
  username: "Pintoo",
  email: "pintoo@mailinator.com",
  loginCount: 9,

  getUserDetails: function () {
    // console.log("Get user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function UserNew(username, email, loginCount) {
  this.username = username;
  this.email = email;
  this.loginCount = loginCount;

  this.welcome = function(){
    console.log(`Welcome to ${this.username}`);
  }
  return this;
}

const userOne = new UserNew("Pintoo", "email@mailinaor.com",12);
const userTwo = new UserNew("Cena", "cema@mailinaor.com", 123)
console.log(userOne);
console.log(userTwo.constructor);

