// function hello(){
//    console.log("Hello Daniyal");
// }

// hello();
// console.log(hello.name);

// java script me function ko function ki tarah bhi treat kr sakte hain aur function ko object ki tarah bhi treat kr sakte hain;

// we can add our property 
// hello.myOwnProperty = "Daniyal";
// console.log(hello.myOwnProperty);

// name property ---> tell's function name
// function's provide more useful property.

// function hame free space matlab empty object{} dete hain aur isko prototype bolte hain... 
// sirf function's hi prototype ko provide karte hain 


// console.log(hello.prototype); // {};
//only function's provide prototype property.

// if (hello.prototype){
//     console.log("prototype is here");
// }else{
//     console.log("this is not prototype");
// };

// const hello = {
//     firstName:"Daniyal",
//     lastName:"Raza",
//     age:14,
// };

// if (hello.prototype){
//     console.log("This is prototype");
// }else{
//     console.log("That's not prototype");
// }; 


// const yup = ["value1", "value2", "value 3"];
// console.log(yup);

// if(yup.prototype){
//     console.log("That's prtotype");
// }else{
//     console.log("Is Not prototype....");
// };


// prtotype sirf fuction ke pass hota ha!!!


function hello(){
    console.log("Hello Daniyal...!!!");
};

hello();

hello.prototype.abc = "Arshad Hussain";
hello.prototype.xyz = "Abdul Wasay";
hello.prototype.sing = function(){
   return "Happy Birthday To You....!"
}

console.log(hello.prototype);
console.log(hello.prototype.sing());
