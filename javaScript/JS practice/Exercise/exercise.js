// function = find leap year 
// input = year 
// output = true or false 
// step1: year k 
let price = 27;
price = 30;
console.log(price)
function inchToFeet(inch){
    return `feet: ${inch/12}`;
}
console.log(inchToFeet(45))

function mileToKilo(mile){
    return mile * 1.60934
}

console.log(mileToKilo(45))
// function = sum the all digits in a string 
function sumAllDigits(stringNumber){
    let sum = 0;
    for (let character of stringNumber){
        sum += parseFloat(character);
    }
    return sum;
}
console.log(sumAllDigits("019839"))

// function = check odd or even 
function isEven(number){
    if (number % 2 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(997))

// function = factorial of a given number 
// spet1: ekta number k (number-1) theke decrease kore 1 porjonto pultiply korbo 
function getFactorial(number){
    let factorial = 1
    if (number < 1){
        return "negative can't have factorial"
    }
    for(number; number > 1; number--){
        factorial *= number
    }
    return factorial
}
console.log(getFactorial(5))

function add(...numbers){
    sum = 0;
    console.log("numbers:", numbers)
    for (let number of numbers){
        sum += number
    }
    return sum
}
console.log(add(2, 3, 4, 5))
const text2 = `hey Ayon
I wanna kill you \n 
by the way 
buy`
console.log(text2)
const list = [1, 2 , 3]
console.log(...list)
