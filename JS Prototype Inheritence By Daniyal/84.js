function creatUser(firstName, lastName, age, email, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    return this;
};

creatUser.prototype.about = function(){
    return`${this.firstName} ${this.lastName} is ${this.age} years old and he live in ${this.address}`
};
creatUser.prototype.is18 = function(){
    return this.age>=18;
};
creatUser.prototype.sing = function(){
    return`Happy Birthday To You....`;
};

const user1 = new creatUser("Daniyal", "Raza", 16, "mohammeddaniyal1986@gmail.com", "North Nazimabad block B");
const user2 = new creatUser("arshad", "Hussain", 33, "arshad@gmail.com", "north karachi");

// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// console.log(user2.about());
// console.log(user2.is18());
// console.log(user2.sing());

for(let yup in user1){
    // console.log(yup);
    if(user1.hasOwnProperty(yup))
    console.log(yup);
}
