// Arrow Function 



// const user1 = {
//     firstName:"Daniyal Raza",
//     age:32,
//     about: () =>{
//         console.log(this.firstName, this.age);
//     },
// };
// user1.about.call();

// arrow function me this nahi hota 

const user1 = {
    firstName:"Daniyal Raza",
    age:32,
    about: () =>{
        console.log(this);
        console.log(firstName, age);
    },
};
user1.about();