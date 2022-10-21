let addTwoNumber = (number1, number2) => {
    return number1 + number2;
}

let summation = addTwoNumber(10, 12)
console.log("summation:", summation)

let human = {
    name : "eva", age: 26,
    work : function(){
        console.log(`${this.name} works in BUET`)
    }
}
human.work();
console.log(Object.keys(human))
human.eat = function(){
    console.log("eat properly")
}
console.log("after adding method", Object.keys(human))
let num1 = "99.5";
let num2 = 15;
console.log(num1 + num2)

// function signal 
let showSignal = (signal) => {
    switch(signal){
        case "red":
            {console.log("it's denger");
            break;}
        case "yellow":
            {console.log("don't move");
        break;}
        case "green":
            {console.log("now you can go");
        break;}
        default:
        {console.log("that's not a valid signal")}
    }
}

showSignal("red")