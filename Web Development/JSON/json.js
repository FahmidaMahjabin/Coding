var person =
{name : "ayon",
age: 25,
greetings: function(){
    alert(`hey ${this.name} , are you ${this.age}? `)
}
};
// person.greetings()
console.log(typeof(person.greetings))
var personJson =
{'name' : "ayon",
'age': 25,
'greetings': function(){
    alert(`hey ${this.name} , are you ${this.age}? `)
}
};
console.log(typeof(personJson))
var newPerson = JSON.stringify(person);
console.log(newPerson)
var personObj = JSON.stringify(personJson)
console.log(personObj)
var jsonPerson = JSON.parse(personObj)
console.log(jsonPerson)
const animal = {};
console.log(typeof(animal))

var person = {
    name: {
        first :"Bob",
        last:"Smith"

    } ,
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  }
person.occupation = function(){
    console.log(`${this.name.first} is working in amazon`)
}
var color = "skin";
var value = "black";
person[color] = value;
console.log(person.skin)
console.log(person.occupation())
console.log(person['name']['first'])


var fruitListHtml = '';
function fruit(listOfFruit){
  
  for(index in listOfFruit){
      console.log(index)
      console.log(listofFruit[index])}
  }
var listofFruit = ['a', 'b', 'c'];
fruit(listofFruit)

function drawRactangle(len, wid,obset){
  return {
    length :len,
    width :wid,
    draw : function(){
      alert(`draw a rectangle ${obset} from center`)

}
}
}
var rectangle1 = drawRactangle(10, 5, 3)

var rectangle2 = drawRactangle(12, 6, 3)
console.log(rectangle2)
console.log(rectangle1)
console.log(rectangle1 === rectangle2)

function Circle(radius){
  console.log(this)
  this.radius = radius;
  this.draw = function(){
    console.log(`draw the circle with ${this.radius} radius`)
  };
}
var circle1 =new Circle(5)
circle1.draw()