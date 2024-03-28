class Animal{
    constructor(name, age, food){
        this.name = name;
        this.age = age;
        this.food = food;
    };

    eating(){
        return`${this.name} is Eating ${this.food}`
    };
    isAge(){
        if(this.age<=1){
            return `${this.name} Is very Cute`;
        }else{
            return `${this.name} is danger For child's`;
        };
    };

    isCute(){
        return true;
    };
};

const animalNo1 = new Animal("Lion", 2, "Chicken");
const animalNo2 = new Animal("Cat", 1, "Fish");

console.log(animalNo1.isAge());
console.log(animalNo1.eating());
console.log(animalNo1.isCute());

console.log(animalNo2.eating());

class dog extends Animal{

};

const tommy = new dog("Tommy", 1 , "Chicken's");
console.log(tommy.eating());
console.log(tommy.isAge());