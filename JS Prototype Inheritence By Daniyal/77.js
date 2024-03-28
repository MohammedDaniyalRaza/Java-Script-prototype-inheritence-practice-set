// const user ={
//     firstName:"Daniyal",
//     lastName:"Raza",
//     email:"mohammeddaniyalraza@gmail.com",
//     age: 15,
//     address: "House No K2, north nazimabad block B, Karachi.",
//     about: function(){
//         return`user Name is ${this.firstName}, his age is ${this.age}, his email is ${this.email}, and his address is ${this.address}`
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
// };


// const num = user.about();
// console.log(num);

// console.log(user.is18());


// proto, proto type, class


//// function
/// as a input lega first name, lastname, email, address ,age wagera 
/// 1)ye function pehle object creat kare ga.
/// 2)phir function object creat karne ke badd usme khuch key value paire add kare ga..
/// 3)uske-baad function object return kare ga


// const user = {
//     firstName:"Daniyal",
//     lastName:"Raza",
//     email:"mohammeddaniyalraza@gmail.com",
//     age:15,
//     address:"House No k2 north nazimabad karachi",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old and his email is ${this.email}.his address is ${this.address}`
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
// };

// const num = user.about();
// console.log(num);

// function that creat object then it add key value paire the function return object 

function creatUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about= function(){
        return `${this.firstName} age is ${age} years old, his email is ${email}, and he live in ${address}`
    };
    user.is18 = function(){
        return this.age >=18;
    };
    return user;
};

const yup = creatUser("daniyal", "raza", "mohammeddaniyal@gmail.com" , 15, "karachi");

console.log(yup); 

const num = yup.is18();
console.log(num);

const deatail = yup.about();
console.log(deatail);
