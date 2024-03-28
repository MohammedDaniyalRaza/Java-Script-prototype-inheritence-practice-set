// function creatUser(firstName, lastName, age, email,address){
//     this.firstName =firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.address = address;
//     return this;
// };

// creatUser.prototype.about = function(){
//     return `${this.firstName} ${this.lastName} is ${this.age} years old and he live in ${this.address}`;
// };
// creatUser.prototype.is18 = function(){
//     return this.age>=18;
// };
// creatUser.prototype.sing = function(){
//     return `Happy Birthday To You...`;
// };


// const user1 = new creatUser("Mohammed", "Daniyal", 16,"Daniyalraza9881@gmail.com","north Nazimabad Block B Karachi..");
// const user2 = new creatUser("Arshad", "", 33, "Arshy9822hussain@gmail.com", "Wahid Colony Karachi");

// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());


class creatUser{
    constructor(firstName, lastName, age, email, address){
        console.log("Constructor Called")
        this.firstName = firstName;
        this.lastName = lastName; 
        this.age = age;
        this.email = email;
        this.address = address;
    };

    about(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.His email is ${this.email} And He live in ${this.address}`;
    };
    is18(){
        return this.age>=18;
    };
    sing(){
        return `Happy Birthday To you...`;
    };
    func(a){
        console.log(a);
    }
};

const user1 = new creatUser("Daniyal", "Raza", 15, "Daniyalraza1986@gmail.com", "North Nazimabad Block B Karachi.");
const user2 = new creatUser("Masood", "Manhoos", 133, "MasoodManhoos@gmail.com", "Pareshaan Gali Machar Colony");
// console.log(user2.about());
console.log(user2.is18());
console.log(Object.getPrototypeOf(user2));

user1.func("Daniyal Raza");