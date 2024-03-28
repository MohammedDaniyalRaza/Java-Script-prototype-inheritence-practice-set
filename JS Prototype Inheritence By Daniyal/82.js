// const userMethods = {
//     about : function(){
//         return `${this.firstName} age is ${this.age} and he live in ${this.address}`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//     sing : function(){
//         return "Happy Birthday To You G...";
//     },
// };


// function creatuser(firstName, lastName, email, age, address, about){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = about;
//     return user;
// };


// const user1 = creatuser("Daniyal", "Raza", "Daniyal@gmail.com", 15, "North Nazimabad Karachi");
// const user2 = creatuser("Arshad", "Hussain", "Arshad@gmail.com", 32, "Wahid Colony Karachi");
// const user3 = creatuser("Abdul", "Wasay", "wasay@gmail.com", 18, "Azizabad karachi");
// // console.log(user1);
// console.log(user1.about());

// console.log(user2);
// console.log(user2.about());

// console.log(user3);
// console.log(user3.about());



function creatUser(firstName, lastName, age, email, address, about){
    const user = Object.create(creatUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
} 

// if(creatUser.prototype){
//     console.log("That's Prototype");
// }else{
//     console.log("That's not Prototype");
// };

// creatUser.prototype.xyz = "Damiyal raza";
// console.log(creatUser.prototype.xyz);

// creatUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} year's old. Their Email is ${this.email} and He Live's in ${this.address}.`;
// };

// creatUser.prototype.is18 = function(){
//     return this.age >= 18;
// };

// creatUser.prototype.sing = function(){
//     return "Happy Birthday To You G...";
// };


// const user1 = creatUser("Daniyal", "Raza", 15, "Daniyal@gmail.com", "North Nazimabad Karachi");
// const user2 = creatUser("Arshad", "Hussain", 32, "Arshad@gmail.com", "Wahid Colony Karachi");
// const user3 = creatUser("Abdul", "Wasay", 18, "wasay@gmail.com", "Azizabad karachi");

// // console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());
