// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };

// const obj2 = {
//     key3: "value3", 
// };

// console.log(obj2.key3);


// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };

// const obj2 = {
//     key3: "value3", 
// };

// console.log(obj2.key2);


// const obj{
    //  key1: "value1",
//     key2: "value2",
// };

// const obj2 = {};
// obj2.key3 = "value69"

// console.log(obj2.key3);




// const obj1 = {
//     key1: "value 1",
//     key2: "value 2",
//     key3: "value 3",
// };

// const obj2 = Object.create(obj1);
// console.log(obj2.key3);

// obj2.key3 = "unique value";

// console.log(obj2.key3);
// console.log(obj2.key1);
// console.log(obj2);

////// abhi brower me proto likha aa rha hai! 
// official ecma script ki documentation ne proto ko khuch is tarah likha howa ha
// [[prototype]]

// ye wala 
// __proto__
// aur ye wala 
// [[prototype]]
// dono ak hi baat hai


// javascript me 1 aur chez hoti hai jis ko ham bolte hain protype
// prototype 
// ye wala prototype alag chez ha
//__proto__ , [[prototype]] in dono se ye prototype bilkul diffrent hai

const obj1 = {
    key1:"value 1",
    key2:"value 2",
};

const obj2 = Object.create(obj1);
// console.log(obj2.__proto__);
console.log(obj2);

// object 2 ka proto object 1 hogaya 
// object 2 me object.creat(obj2) ki waja se obj2 
// java script ko jo chez object 2 se nahi mil rhi thi wo us ne object 2 se lali.......
