const userMethods = {
    about: function(){
        return `${this.firstName} ${this.lastName} age is ${this.age} years old his email is ${this.email} and he live in ${this.adress}`;
    },
    is18: function(){
        return this.age >=18;
    },
    sing: function(){
        return`Heat Waves`;
    },
};

function creatUser(firstName, lastName, age, email, adress){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.adress = adress;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;

};

const user1 = creatUser("Daniyal", "raza", 15, "daniyal@gmail.com", "North Nazimabad Karachi");
const user2 = creatUser("arshad", "hussain", 33, "Arshadhussain@gmail.com", "Deffence phase 1 karachi");

console.log(user1.about());
console.log(user2.sing());