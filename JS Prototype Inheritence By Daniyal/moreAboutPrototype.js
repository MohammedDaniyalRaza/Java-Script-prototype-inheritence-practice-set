// let numbers = [2,3,4,5];
// console.log(numbers);


// let num = new Array(2,3,4,5);
// console.log(Array.isArray(num));

// let numbers = [0,1,2,3];
// console.log(Object.getPrototypeOf(numbers));

// function hello(){
//     console.log("Happy Birthday....!");
// };
// console.log(hello.prototype);

// console.log(Array.prototype);

function hello(){
    console.log("Happy Birthday To yyou...");
};

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("7");
console.log(hello.prototype);