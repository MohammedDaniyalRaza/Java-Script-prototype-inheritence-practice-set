// const userMethods = {
//     about: function(){
//         return `${this.firstName} ${lastName} age is ${this.age} years old, his email is ${email} and he live in ${address}`;
//     },
//     is18: function(){
//         return age>= 18;
//     },
//     sing: function(){
//         return`I'm so lonly Broken Angle`;
//     },
// };


// function creatUser(firstName, lastName, age, email, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about= userMethods.about;
//     user.is18= userMethods.is18;
//     user.sing= userMethods.sing;
//     return user;
// }; 

// const user1 = creatUser("daniyal", "raza", 16, "daniyalraza@gmail.com", "north nazimabad block b karachi");

const userMethods = {
    about: function(){
        return `${this.firstName} ${this.lastName} age is ${this.age} years old, his email is ${this.email}, and he live in ${this.address}`;
    },
    is18: function(){
        return this.age >= 18;
    },
    sing: function(){
        return `Teri Hasi Per Mein Mar Hi Na Jaon...`;
    },
};

function creatUser(firstName, lastName, age, email,address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.sing = userMethods.sing;
    return user;
};

const user1 = creatUser("daniyal", "raza", 15, "daniyalraza@email.com", "north nazmibad karachi");
const user2 = creatUser("mazher", "chakka", 2, "ulloKaPatha@Gmail.program.com", "Shaitaan Gali Pareshaan Mohalla");

console.log(user1);
console.log(user2.about());

// console.log(user1.sing());

///java script ko jo chez (creatUser) me nahi mile gi to wo proto(userMethos) me jaa kar dekhe ga 
// proto ak bond creat kar raha hai object ka 
// jo chez appko apne object me nhi mile gi wo ap dosre object me dekhe ge 