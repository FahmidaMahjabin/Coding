let square = (value) => {
    return value * value;
}
console.log(square(6))

function callAfunction(){
    console.log("array function return kora jay kina check kori");
    return value => value * value;
}

let x = callAfunction()
console.log(x)
console.log(x(5))
// 1.x = callAfunction()
// = console.log("array function return kora jay kina check kori");
// = return value => value * value;
// x = value => value * value
// 1.x(5):
//     1.1: value = 5 
//     1.2:  value * value 
//     1.3: 5 * 5
//     1.4: 25

function greaterThan(n){
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10)
console.log(greaterThan10(20))

// let add = (x) => (y) => x + y;
// let add5 = add(5)
// console.log(add5)
// console.log(add5(10))

let division = (x) => (y) => x/y;
let divide50 = division(50);
console.log(divide50(10))

function repeat(n, action){
    for(let i = 0; i < n; i++){
    action(i);
    }
  }

// 1.repeat(3, console.log):
//   1.1:n = 3, action = addressLog
//   1.2:for(let i = 0; i < 3; i++){
//       1.2.1:action(i)
//       1.2.2:addressLog(0)
//       1.2.3:console.log(0)
//       1.2.4:0
//     1.3:for (i = 1; 1 < 3; i++){
//         1.3.1:action(i)
//         1.3.2: addressLog(1)
//          1.3.3:console.log(1)
//          1.3.4: 1
//     }
//   }

console.log("add function", add)
// 1.123.log(add)
// 2.addressLog(add)


console.log("add(a, b) value:", add(2, 3))
function add(a, b){
    return a + b;
}  
let labels = []
repeat(5, i =>{
labels.push(i)
console.log(labels);
})

// 1.repeat:
//     1.1:n = 5, action = funcObjAddress
//     1.2:for(let i = 0; i < 5; i++){
//         1.2.1:action(i)
//         1.2.2:funcObjAddress(0):
//              1.2.2.0: i = 0
//             1.2.2.1: labels.push(i)
//             1.2.2.2:[].push(0)
//             1.2.2.3:[0]
//     }
let a = function add(a, b){
    return a +b;
}

// ekhane add ekta constant variable. jar value holo function object er value. jokhon function take call kori tokhon return er value pai .jeta add variable er value same na
console.dir("a:", a);
let c = {name: "Bangladesh"};
console.log("c:", c)

function squareElements(elements){
    for (let i = 0; i < elements.length; i++){
        elements[i] = elements[i]** 2;
    }
    return elements
}
let list = [2, 3, 4];
// console.log(squareElements(list))
let sqrItems = list.forEach( (item) => {item * 2})
console.log(sqrItems)

players = [{
    name: "sakib",
    avg: 50,
},
{name: "tamim",
avg: 48,},
{name: "mushi", avg: 45},
{name: "mahmudullah", avg: 30}]

// let getPlayerOver40Run = players.map((player) =>{
//     if (player.avg >= 40){
//         return player
//     }
// });

let getPlayerOver40Run = players.filter((player) =>
    {return player.avg >= 40});
console.log(getPlayerOver40Run)

// function = filter (ekta array dibo er kichu element filter korbe)
// input = list of player
// output = player having avg run greater than 40
// step1:ekta kore player er run check korbo 
// step2:jodi run 40 up hoy then ekta new array te push korbo


// function filter(listOfPlayer, check){
//     let playerWithRun40up = [];
//     for(let player of listOfPlayer){
//         check(playerWithRun40up, player)
//     }
//     return playerWithRun40up
// }

// function check(playerWithRun40up, player){
//     if(player.avg >= 40){
//         playerWithRun40up.push(player)
//     }
// }
console.log("player having 40 up using filter:", filter(players, player => {return player.avg >= 40}))
// 1.filter(players, check):
//     1.1:players = array, check = addressCheck
//     1.2:let playerWithRun40up = [];
//     1.3:for(let player of listOfPlayer){
//         1.3.1:player = listOfPlayer[0] = 1stObj
//         1.3.2:check(playerWithRun40up, player):
//              1.3.2.1:playerWithRun40up = [], player = {name:"sakib", avg: 50}
//              1.3.2.2:if(player.avg = 50 >= 40)
//     }

// map , forEach and filter assignment 

// function = filter 
// input = function , array 
// output = new array 
// step1:array theke ekta kore element nibo and function er parameter hishebe pass korbo 
// step2:jodi function return true hoy then newArray te oi element push korbo 
// step3:new array return korbo 

function filter(array, check){
    let newArray = [];
    for(let element of array){
        if(check(element)){
            newArray.push(element)
        }
    }
    return newArray
}

// function = forEach 
// input = array, function 
// output = nothing 
// step1:array er every element er jonno function ta call kore console.log kore
function forEach(array, callBackFunc){
    for(let element of array){
        callBackFunc(element)
    }
}
forEach(players, console.log)
players.forEach(console.log)

function noisy(f){
    return (...args) => {
        console.log("calling with arges", args);
        let result = f(...args);
        console.log("calling with", args, "returned", result);
        return result ;
    }
}
let funct = noisy(square);
console.log(funct)
console.log(funct(6, 2, 3, 4));

let numbers = [1, 2, 3];
let cube = numbers.reduce((accumulator, number) => accumulator += number*3, 0)
console.log("cube of list using reduce function", cube)