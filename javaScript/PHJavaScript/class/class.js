class Person {
    constructor(name, age, occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    };
    introduction = "hey";
    work(){
        return this}

    
}
const person1 = new Person("eva", 26, "RA");
const person2 = new Person("eva", 26, "RA");
console.log(person1, person2)
console.log(person1.this)
console.log("person1 er work", person1.work)

class Student extends Person{
    constructor(name,id, grade){
        super(name)
        this.ID = id;
        this.grade = grade;
    }
    get getValue(){
        const grade = this.grade;
        if (grade > 80){
            console.log("got A+")
        }
        else if (grade >70){
            console.log("got A")
        }
        else{
            console.log("got B")
        }
    }
    set getValue(x){
        this.grade = x;

    }
}

const eva = new Student("eva", 20020, 79)
const evaStringfied = JSON.stringify(eva);
console.log("stringify:", evaStringfied.name)


const employee = {
    specification: {
        physical: {
            weight: 70,
            height: 5.10,
            color: "brown"
        }
    }
}
const {color} = employee.specification.physical;
console.log(color)
console.log(typeof(color))
