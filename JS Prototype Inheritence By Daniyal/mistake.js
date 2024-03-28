// const user1 = {
//     firstName:"Daniyal",
//     age:15,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
// };

// // do not do this mistake 

// // user1.about();
// const myfucn = user1.about;
// myfucn();


// const user1 = {
//     firstName:"Daniyal",
//     age:15,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
// };

// const myFunc = function(){
//     console.log(this);
//     console.log(this.firstName, this.age);
// };

// myFunc();


const user1 = {
    firstName:"Daniyal",
    age:15,
    about: function(){
        console.log(this.firstName, this.age);
    },
};

const user2 = {
    firstName:"Arshad Hussain",
    age:15,
}

const myFunc = user1.about.bind(user1);

myFunc();