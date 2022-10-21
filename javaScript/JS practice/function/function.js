let makeAnoise = function(){
    console.log("ghrrrrr")
}
makeAnoise()
let add = (a, b) => {
    return a + b;
}
console.log(add(10, 2))
let minus = (a, b) => {
    // if (b == undefined){
    //     return -a;
    // }
    // else{
    return a-b
    // }
}
console.log(minus(8))

function multiplier(factor){
    return number => number * factor;
}

// let number = (number) =>{
//     return number * factor
// }

let twice = multiplier(5);
console.log(typeof(twice))
console.log("value of twice " , twice)
console.log("value of twice(2) " , twice(2))

// 1.twice = multiplier(5)
//     1.1:factor = 5;
//     1.2:return objFuncAddress2
// 2.twice = objFuncAddress2
// 1.twice(2) = objFuncAddress2(2):
//     1.1:number = 2;
//     1.2: number * factor;
//     1.3: 2 * 5;
//     1.4: 10
// 2.twice(2) = 10 


let square = x => x*x;
console.log("square of 5 " + square(5))

let min = (number1, number2) => {
    if (number1 <= number2){
        return number1;
    }
    else{
        return number2;
    }
}
console.log(min(7,11))