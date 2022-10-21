class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    color = 'red';
    getArea(){
        console.log("the "  + " rectange is " + this.height +" " + this.width)
    }
    

}
const square = new Rectangle(10, 10);
console.log(square.getArea())

let employee = {
    name: "eva",
    Age: 25,
    salary: 100,
    getSalary: function(days){
        return this.salary  * days
    }
    

};
console.log(employee)
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
} 

console.log(a); // 11
console.log(b); // 2

var circle = {
    radius: 4,
    location: {
        x_axis: 3,
        y_axis: 10
    },
    draw: function(){
        console.log("draw function")
    }
}
console.log(circle.location['x_axis'])

function makeEmployee(name, age, title){
    return {name,
    age,
    title,
    salary: function(amount){
        console.log(`depend on ${this.title}'s ${amount}'`)
    }

};
}
const employee1 = makeEmployee("eva", 25, "product manager");
console.log(employee1.salary(2000));
const employee2 = makeEmployee("ayon", 29, "software dev");
employee2.salary(3000)
console.log(employee1.constructor)
// constractor function 
function Circle(radius){
    this.radius = radius;
    let password ="xyz";
    
    let work = function(){
        console.log("do work")
    }
    this.draw = function(){
        return work
    };
    Object.defineProperty(this, 'newWork', {get:function(){
        return work
    }})
    
    
}

let circle1 = new Circle(1);
circle1.draw();
circle1.location = function(){
    console.log("this is from 50 m")
};
circle1.color = "red";

for(let key in circle1){
    console.log(key, circle1[key])

}
let key = Object.keys(circle1)
if ("draw" in circle1){
    console.log("found draw")
}
console.log(circle1.draw());
class Person{
    constructor(name){
        this._name = name
    }
    changeName(newName){
        this._name = newName
    }
};
let person1 = new Person("eva")
person1.changeName("ayon")
console.log(person1._name)
console.log(Infinity- Infinity*2);
let text = "het there.\n I'm eva. I want to \t Dance"
console.log(text)
console.log(NaN == NaN);
console.log(false || null)
// console.log(sum(range(1, 10)))