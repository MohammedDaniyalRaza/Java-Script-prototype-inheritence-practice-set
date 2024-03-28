// Getters And Setter's 
// class person{
//     constructor(firstName, LastName, age){
//         this.firstName = firstName;
//         this.LastName = LastName;
//         this.age = age
//     };

//     fullName(){
//         return `${this.firstName} ${this.LastName}`
//     };
// };


// const person1 = new person("Daniyal", "Raza", 15);
// console.log(person1);

// console.log(person1.fullName());

// fullName ko as a property Use GET laga kr kar sakte hain 

// class person{
//     constructor(firstName, LastName, age){
//         this.firstName = firstName;
//         this.LastName = LastName;
// //         this.age = age
//     };

//     // FullName is used in console without Parenthesis () after coding GET 
//     get fullName(){
//         return `${this.firstName} ${this.LastName}`
//     };
// };


// const person1 = new person("Daniyal", "Raza", 15);
// console.log(person1);

// console.log(person1.fullName);

class person{
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age
    };

    // get fullName(){
    //     return `${this.firstName} ${this.LastName}`
    // };
    // setName (firstName, LastName){
    //     this.firstName = firstName;
    //     this.LastName = LastName;
    // };

    set fullName(fullName){
        const [firstName , LastName] = fullName.split(""); // split string me jahan space hoga wahan se split usko 2 parts me divide karde ga just like "Daniyal Raza" Daniyal Raza
        this.firstName = firstName;
        this.LastName = LastName;
    }
};


let person1 = new person("Daniyal", "Raza", 15);
console.log(person1);

// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.LastName);

// person1.setName("Arshad", "Hussain");
// console.log(person1.firstName);
// console.log(person1.LastName);

// person1.firstName = "Abdullah";
// person1.LastName = "Advocate";
// console.log(person1.firstName);
// console.log(person1.LastName);


person1.fullName = "Advocate Dani";
console.log(person1)
// console.log(person1.fullName);