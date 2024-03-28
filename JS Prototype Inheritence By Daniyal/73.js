// function hello(){
//     console.log("hello world");
// };
// hello();

// function yup(){
//     console.log("Hello world!!!!");
// };
// yup.call();

// CALL, APPLY , BIND 

// const user1 = {
//     firstName:"Daniyal",
//     age:15,
//     about: function (){
//         console.log(`first name is ${this.firstName} and age is ${this.age}`);
//     },
// };

// // user1.about();

// const user2 = {
//     firstName:"Arshad",
//     age:32,

// };

// user1.about.call(user2);


// const user1 = {
//     firstName:"Daniyal",
//     age:15,
//     about: function(hobby, favMusic){
//         console.log(this.firstName, this.age, hobby, favMusic);
//     },
// };

// const user2 = {
//     firstName:"Arshad Hussain",
//     age:32,
// };

// user1.about.call(user2, "Gitaar", "Lipss");


// function about(hobby, favMusic){
//     console.log(this.firstName, this.age, hobby, favMusic);
// };

// const user1 = {
//     firstName:"Daniyal Raza",
//     age:15,
// };

// const user2 = {
//     firstName:"Arshad Hussain",
//     age:32,
// };

// about.call(user1, "gaming", "heat waves");



/////////////      APPLY       ///////////////
// function about(hobby, favMusic){
//     console.log(this.firstName, this.age, hobby, favMusic);
// };

// const user1 = {
//     firstName:"Daniyal Raza",
//     age:15,
// };

// const user2 = {
//     firstName:"Arshad Hussain",
//     age:32,
// };

// about.apply(user2, ["Gaming", "HeatWaves"]);




////////////       BIND        //////////////
function about(hobby, favMusic){
    console.log(this.firstName, this.age, hobby, favMusic);
};

const user1 = {
    firstName:"Daniyal Raza",
    age:15,
};

const user2 = {
    firstName:"Arshad Hussain",
    age:32,
};

// about.bind(user1, "gaming", "Offshore");

// bind khuc nahi karta wo 1 function return karta ha 

const answere = about.bind(user1, "Gaming", "Baller");
answere();

const answere2 = about.bind(user2, "Play Free Fire", "Heatwaves");
answere2();