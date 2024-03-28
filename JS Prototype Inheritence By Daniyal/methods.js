// Methods
// function inside object  

// const person = {
//     firstName:"Daniyal",
//     age:15,
//     about: function(){
//         console.log(`Person Name Is ${this.firstName} and Person Age Is ${this.age}`)
//     },
// };

// console.log(person);
// person.about();


// const person = {
//     firstName: "Daniyal",
//     age:15,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
// };

// console.log(person.about);



function personinfo(){
    console.log(`Person Name Is ${this.firstName} And Person Age Is ${this.age}`);
};

const person1 = {
    firstName:"Daniyal",
    age:15,
    about: personinfo,
};

const person2 = {
    firstName:"Arshad",
    age:33,
    about: personinfo,
};

const person3 = {
    firstName:"Dani",
    age:14,
    about: personinfo,
};

person1.about();
person2.about();
person3.about();
 