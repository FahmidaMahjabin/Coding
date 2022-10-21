let first = 10;
let second = 20;
[first, second] = [second, first];
console.log("first", first, "second:", second)

// function = get maximum of three values
// step1:first er value k maximum hishebe define korbo 
// step2:second value er sathe maximum compare  kore maximum e boshabo 
// step3:third er sathe compare kore maximum ber korbo 

function getMax(array){
    if (array.length < 1){
        throw "should be at least one value"
    }
    else if(array.length == 1){
        return array[0]
    }
    else{
        let maximum = array[0];
        for (let index = 1; index < array.length; index++){
            if (array[index] > maximum){
                maximum = array[index]
            }
        }
        return maximum

    }
    
}
array = [];
console.log(getMax(array))

// function  = fibonacci  series 
// input = nth position jei porjonto series ber korbo 
// step1:firstNumber = 0, secondNumber = 1 
// step2:thirdNumber = firstNumber + secondNumber 
// step3:nth = n-1 + n-2 for all number
function getFibonacciSeries(n){
    let series = [0, 1];
    // let first = series[0];
    // let second = series[1];
    for(let i = 2; i < n; i++){
        // let third = first + second;
        // series.push(third);
        // first = series[i-2];
        // second = series[i-1];
        series[i] = series[i-1] + series[i-2];
    }
    return series;
}
console.log(getFibonacciSeries(10));

function add(a, b){
    return a + b;
}
console.log(add("adam" + "eve"))