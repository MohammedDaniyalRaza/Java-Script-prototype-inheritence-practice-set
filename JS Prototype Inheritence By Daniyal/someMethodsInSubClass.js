// Some Methods In Sub Class 

class Animal{
    constructor(name, age, food){
        this.name = name;
        this.age = age;
        this.food = food;
    };

    about(){
        return`${this.name} is ${this.age} years old`;
    };

    eat(){
        return`${this.name} is eating ${this.food}`
    }
    isCute(){
        if(this.age<=1){
            return `${this.name} Is Safe For Children's`;
        }else{
            return `${this.name} is dangerous for children's`;
        };
    };
};

const animal1 = new Animal("lion", 1);
console.log(animal1.about());
console.log(animal1.isCute());


class anime extends Animal{
    constructor(name, age, food, speed){
        super(name, age, food);
        this.speed = speed;
    };

    eat(){
        return `${this.name} is eating expensive Food ${this.food}`
    }
    run(){
        return `${this.name} is running At ${this.speed} KMPH`;
    };
    // eat(){
    //     return `${this.name} is eating ${this.food}`
    // };
};

const tiger = new anime("Tiger", 15, "Biryani", 65);
console.log(tiger.eat());