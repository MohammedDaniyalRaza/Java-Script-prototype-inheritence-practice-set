// function creatUser(firstName, lastName, age, email, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function(){
//         return `${firstName} ${lastName} is ${age} years old, his email is ${email} and he live in ${address}`;
//         // return `${firstName} age is ${age} year's old`;
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     };
//     return user;
// };

// const user1 = creatUser("daniyal", "raza", "16", "daniyalraza@gmail.com", "north nazimabad karachi");
// console.log(user1);

// const num = user1.is18();
// console.log(num);

// const yup = user1.about("daniyal" , 16);
// console.log(yup);


// const user1 = creatUser("Daniyal", "Raza", 15, "daniyalraza@gmail.com", "North nazimabad karachi");
// const user2 = creatUser("Arshad", "Hussain", 33, "arshadhusain@gmail.com", "house no K-2 Block B Multan");
// const user3 = creatUser("Abdul", "Wasay", 17, "wasay@gmail.com", "Azizabad Karachi");
// const user4 = creatUser("Muzammil", "Hussain", 24, "muzammilHusain@gmail.com", "Ayeshamanzil Lahore");
// const user5 = creatUser("Shabbir", "Malik", 18, "shabbirMalik@gmail.com", "SohrabGoth K2 Hydrabad");
// const user6 = creatUser("Labib", "Bin Laeeq", 16, "labib54342@gmail", "FC Area A-21 total pump krachi")
// const user7 = creatUser("Laraib", "Razzaq", 21, "razzq99381@gmail", "Toolplaza Near Headcoater Sakhar")

// console.log(user1);

// const yup1 = user1.about();
// console.log(yup1);

// const yup2 = user2.about();
// console.log(yup2);

// const user8 = creatUser(prompt("Enter First Name"), prompt("Enter Last Name"), prompt("Enter Age"), prompt("Enter Email"), prompt("Adress"));
// console.log(user8);
// const yup = user8.about();
// console.log(yup);
/////////////////////////////////////////////////

const userMethods = {
    about : function(){
        return `${this.firstName} , ${this.lastName} is ${this.age} years old, his email adress is ${this.email} and he live in ${this.adress}`
    },
    is18 : function(){
        return this.age >= 18;
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
    return user;
};


const user1 = creatUser("Daniyal", "Raza", 16, "Daniyal@gmail.com", "North Nazimabad Karachi");
const user2 = creatUser("Arshad", "Hussain", 33, "Arshadhuss@gmail.com", "Mujahid Colony Karachi");
const user3 = creatUser("Sheikh", "Abdul Wasay", 17, "abdulwasay@gmail.com", "Tool plaza Hydrabad");

console.log(user1.about());
const yup2 = user2.about();
console.log(yup2);

