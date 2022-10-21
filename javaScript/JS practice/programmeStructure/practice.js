// function = enter a number and find out whether it's odd or even
// switch(prompt("enter a number:")){
//     case number % 2 == 0:
//         console.log("it's even");
//         break;
//     case number % 2 != 0:
//         console.log("it's odd");
//         break;
//     default:
//         console.log("not a number");
//         break;    
// }
/*switch (prompt("What is the weather like?")) {
case "rainy":
console.log("Remember to bring an umbrella.");
break;
case "sunny":
console.log("Dress lightly.");
case "cloudy":
console.log("Go outside.");
break;
default:
console.log("Unknown weather type!");
break;
}*/
function knowWeather(){
    let weather = prompt("what's today's weather?")
    if(weather == "rainy"){
        console.log("remember to bring an umberlla")
    }
    else if (weather == "sunny"){
        console.log("Dress lightly.");
    }
    else if (weather == "cloudy"){
        console.log("Go outside.");
    }
    else{
        "unknown weather type"
    }
}

// knowWeather()

let a = 10; 

// ekta number input dibo, oi koyta # er string return korbe 
// input = number 
// output = oi koyta # 
// step1: ek theke shuru kore oi number porjonto ekta kore "#" concate korbo 
function getATriangle(number){
    triange = "";
    for(let unit = 0; unit < number; unit++){
        triange += "#";
        console.log(triange);

    }
}
getATriangle(7)

// function  = make a triangle (7 ta line e 1 theke shuru kore 7th line e 7ta # diye triangle banabo)
// input = none 
// output = print triangle 
// step1: 
function makeATriangle(){
    for(let number = 0; number < 7; number ++){
        console.log("#" * number)
    }

}
makeATriangle();

// fizzBuzz problem
// print numbers from 1 t0 100 where 
// number divisible by 3 print "Fizz"
// divisible by 5 but not by 3 print "buzz"
// divisible by both 3 and 5

function getNumber(){
    for (let number = 0; number <= 100; number ++){
        if (number % 5 == 0 && number % 3 == 0){
            console.log("FizzBuzz")
        }
        else if (number % 3 == 0){
            console.log("fizz")
        }
        else if (number % 5 == 0 && number % 3 != 0){
            console.log("Buzz")
        }
        
        else {
            console.log(number);
        }
}}

// getNumber()



// function = concate two character one by another 
// step1: if it's odd position then add add space character first 
// step2:if it's even position then add "#" character 
function addTwoCharacter(characterOne, characterTwo, noOfTimes){
    let oneLinePlayer = "";
    for(let position = 0; position < noOfTimes; position++){
        if (position % 2 == 0){
            oneLinePlayer += characterOne;

        }
        else{
            oneLinePlayer += characterTwo;
        }

    }
    return oneLinePlayer

}
let space = " ";
let player = "#";
// addTwoCharacter(space, player, 8)

// function = chessBoard print 
// input = number of 
// output = print the board 
// step1: define space = " " and player = "#"
// step2:if it's odd line then concate oddLinePlayer
// step3:if it's even line then concate evenLinePlayer

function printChessBoard(size){
    let space = " ";
    let player = "#";
    let chessBoard = "";
    let oddLinePlayer = addTwoCharacter(space, player, size);
    let evenLinePlayer = addTwoCharacter(player, space, size)

    for (let line = 0; line < size; line++){
       if (line % 2 == 0){
           chessBoard += evenLinePlayer + "\n";
       }
       else{
           chessBoard += oddLinePlayer + "\n";
       }
    }
    console.log(chessBoard)
    
}
printChessBoard(8)