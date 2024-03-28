// function creatUser(firstName, lastName, age, email, address){
//     const user = Object.create(creatUser.prototype); // {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     return user;
// };

// creatUser.prototype.about = function(){
//     return `${this.firstName} ${this.lastName} is ${this.age} years old, Their email is ${this.email}, And he Live in ${this.address}`;
// };
// creatUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// creatUser.prototype.sing = function(){
//     return `Happy Birthday To You...!`;
// };

// const user1 = creatUser("Daniyal", "Raza", 15, "daniyal.1986@gmail.com", "North Nazimabad Karachi");
// const user2 = creatUser("Arshad", "Hussain", 33, "arshadh11@gjmail.com", "Wahid Colony Lahore");
// const user3 = creatUser("Wasay", "bin Faisal", 18, "wasayabdul786@gmail.com", "Azizabad Multan");
// const user4 = creatUser(prompt("Enter Your First Name"), prompt("Enter Your Last Name"), prompt("Enter Your Age"), prompt("Enter Your Email"), prompt("Enter Your Address"))

// console.log(user1.about());

// console.log(user4.about());
// console.log(user4.is18());
// console.log(user4.sing());

function creatUser(firstName, lastName, age, email, address){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    return this;
};

creatUser.prototype.about = function(){
    return `${this.firstName} ${this.lastName} Age Is ${this.age} His email is ${this.email} and He Live In ${this.address}`;
};
creatUser.prototype.is18 = function(){
    return this.age>=18;
};
creatUser.prototype.sing = function(){
    return `Happy Birthday To You...`
};

const user1 = new creatUser("Mohammed", "Daniyal", 16,"Daniyalraza9881@gmail.com","north Nazimabad Block B Karachi..");
const user2 = new creatUser("Arshad", "", 33, "Arshy9822hussain@gmail.com", "Wahid Colony Karachi");

console.log(user1.about());
console.log(user2.about());
console.log(user1.sing());
console.log(user2.is18());
console.log(user1.is18());
console.log(user2.sing());
