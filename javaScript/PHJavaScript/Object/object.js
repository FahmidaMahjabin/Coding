const people = {name: "eva",
height: 58,
age: 26,
likings: {book:"atomic habit", activity: "yoga", food: "pasta"},
occupation: function(){console.log("works at buet")}};

const people2 = {...people};
console.log(people2)

const {height,age} = people;
const {food, activity: exercise} = people.likings;
console.log(height, age);
console.log(food, exercise);
const numbers = [1, 2, 3, 4, 5, 6, 7];
[first,, third,...all] = numbers;
console.log(first, third, all)
const people3 = {name: "kyle", age: 24};

const people4 = {...people, ...people3};
console.log(people4)

console.log(people3.likiexercisengs?.method?.activity);
people.occupation?.();
console.log("done")

let digits = [1, 2, 3, 4];
const square = digits.map(number => number**2);
console.log(square)
const names = ["tom hanks", "shila", "kijawani0", "alangir"];
const getLength = name => name.length;
const nameLength = names.map(getLength);
console.log(nameLength)

const getTom = names.filter(name => name.startsWith("tom"));
console.log(getTom)
// closure practice

function increase(){
    let count = 0;
    return function(){
        count += 1;
        return count;

    }
}
const number1 = increase()
console.log("number1:",number1())
console.log("number1:",number1())
console.log("number1:",number1())
console.log("number1:",number1())
const number2 = increase();
console.log("number2:", number2())