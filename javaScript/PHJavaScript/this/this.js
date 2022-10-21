let getPeopleByName = function(object){
    object.printName = function(){
        console.log("name",this.name)
    }
}
function getDetails(p1, p2, p3){
    console.log(`${this.name} is ${p1} ${p2} and ${p3}`)
}
const eva = {
    name: "eva",
    age :"26"
}
const ayon = {
    name: "ayon",
    age: 30
}
let v1 = "smart";
let v2 = "intellegent";
let v3 = "beautiful";
getDetails(v1, v2, v3)
getDetails.call(eva, v1, v2, v3)
getPeopleByName(eva);
getPeopleByName(ayon)

eva.printName()
ayon.printName()

// closure practice 
// function = count jeta kono parameter ney na but ekta function return kore jeta ekta number parameter ney
function getSum(){
    let sum = 0;
    return number => {sum += number;
        return sum;
        }
        
    
}
const sum = getSum()
console.log("sum of 5",sum(5))
console.log("sum of 10", sum(10))
console.log("sum of 20", sum(20))

function count(){
    let number = 0;
    return function (){
        return number++;
    }
};
const getNumber = count();
console.log(getNumber())
console.log(getNumber())
console.log(getNumber())