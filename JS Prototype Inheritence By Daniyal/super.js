class Animal{
    constructor(name, age, food){
        this.name = name;
        this.age = age;
        this.food = food;
    };

    eat(){
        return `${this.name} is Eating ${this.food}`
    };
    cute(){
        if(this.age <= 1){
            return `${this.name} is Safe For Children's..`;
        }else{
            return `${this.name} Is Very Dangerous For Childre's....`;
        };
    };

    isCute(){
        return true;
    };
};

const animal1 = new Animal("Lion", 1, "Chickens");

console.log(animal1.eat());
console.log(animal1.cute());

class more extends Animal{
    constructor(name,age,food, speed){
        super(name,age,food)
        this.speed = speed;
    };
    about(){
        return `${this.name} is ${this.age} years old and his top speed is ${this.speed} KMPH`;
    };
    run(){
        return `${this.name} is running at ${this.speed} KMPH` 
    }
};
const anime = new more("Tiger", 12, "Goat", 65);
console.log(anime.about());

console.log(anime.run());