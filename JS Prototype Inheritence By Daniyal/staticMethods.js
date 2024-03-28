// Static Methods 

class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    static classInfo(){
        return `This Is Person Class..`
    };

    /// Static Method Direct Class Se Related Hota Ha..

    static disk = "This Is Disc Break Blah Blah Blah........"

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    };

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    };

    eat(){
        return `${this.firstName} is eating`;
    };

    isCute(){
        return this.age<=1;
    };

    cute(){
        return`true`;
    };
};


const person1 = new person("Daniyal", "Raza", 15);
console.log(person1.eat());
console.log(person1.fullName);
console.log(person.classInfo());
console.log(person.disk);

// static property ko Object per access nahi kar sakte isko sirf class per hi acces kar sakte hain.. 