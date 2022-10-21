// console.log(sum(range(1, 10)))

// function = range (that will make an array with the range value )
// input = start, end, step 
// step1:start theke end porjonto step gap e ekta kore value list e push korbo
function range(start, end, step = 1){
    let array = [];
    if (start < end){
        for(let number = start; number <= end; number+=step){
            array.push(number)
        }
    }
    else{
        for(let number = start; number >= end; number-=step){
            array.push(number)
        }
    }
    return array;
}
let list = range(30, -10, 3)
console.log(list)
console.log(sum([3]))

// function  = sum 
// input = array 
// step1: array theke ekta kore element niye sum er sathe add korte hobe 
function sum(array){
    let sum = 0;
    for(let number of array){
        sum = sum + number;
    }
    return sum
}

// function  = reverse array 
function reverseArray(array){
    let reverseArray = '';
    for(let index = array.length-1 ; index >= 0; index -= 1){
        reverseArray += array[index];
    }
    return reverseArray;

}
text = "learningProgramming"
reverseText = reverseArray(text);
console.log(reverseText)
// function= reverseArrayInPlace(reverse an array without making a new array)
// step1:array er first element nibo  and ekta variable ee rakhbo 
// step2:array er last element nibo jake first element er jaygay boshabo and swap korbo  
// step2:step1 and 2 korbo jotokkhon porjonto leftElement er index <= rightElement er index hoy
function reverseArrayInPlace(array){
    let i = 0;
    let j = array.length-1;
    while(i <= j){
        let temporary = array[i];
        console.log(temporary);
        array[i] = array[j];
        array[j] = temporary;
        console.log(array)
        i += 1;
        j -= 1; 
    }
    return array
}
let array = ['p', 'e', 'n'];
console.log(reverseArrayInPlace(array))

// function = arrayToList (ekta array thakbe seta theke linked list banate hobe)
// input = array 
// output = linked list 
// array er every element ekta object hobe and tar 2 property value and rest thakbe 
// step1:array er first element ta nibo , ekta node object define korbo jar value is element and rest is an object 
// step2:node er rest e porer element er value and rest object define korbo 

function makeArrayToList(array){
    if(array.length >= 1){
        let firstNode = {};
        firstNode.value = array[0];
        firstNode.rest = {};
        if(array.length > 1){
            currentNode = firstNode.rest
            for(let index = 1 ; index < array.length; index++){
                
                currentNode.value = array[index];
                currentNode.rest = {};
                currentNode = currentNode.rest    
            }
        }
        return firstNode
    }    
}


let list1 = [1, 2, 3];
console.log(makeArrayToList(list1))
// deep comparison 
const object1 = {
    name: "Ali",
    age: "20"
}
object2 = {
    name: "Ali",
    age: "20"
}
console.log(object1 === object2)
console.log(Object.keys(object1))
// function = deep comparison 
// input = 2 values 
// output = true if they are same else false 
// step1: two parameter er type dekhbo jodi same type hoy and object na hoy then value same hole true 
// step2:object type hole :
//     step2.1: object keys same kina check korbo 
//     step2.2: key values same kina check korbo 
function deepComparison(value1, value2){
    if (typeof(value1) != typeof(value2)){
        return false
    }
    else if (typeof(value1) == "object" && typeof(value2) == "object"){
        console.log("into object section")
        // do object compare
        return compareTwoObject(value1, value2)

    }
    else{
        if(value1 === value2){
            return true
        }
        else{
            return false
        }

    }
}

// function = compare two object 
// input = obj1, obj2 
// step1:obj1 and obj2 er key list ber korbo 
// step2:list e same number element ase kina check korbo 
// oi list er ekta element niye obj1 and obj2 er value same pai kina check korbo. jodi same na hoy then false return hobe

function compareTwoObject(object1, object2){
    if (object1 != null && object2 != null){
        const keysOfObj1 = Object.keys(object1);
        console.log('keys of object1', keysOfObj1)
        const keysofObj2 = Object.keys(object2);
        if (keysOfObj1.length !== keysofObj2.length){
            return false
        }
        for(let key of keysOfObj1){
            if(object1.key !== object2.key){
                return false
            }
            else if(typeof(object1[key]) == 'object' && typeof(object2[key]) == 'object' ){
                return compareTwoObject(object1.key, object2.key)
            }
        }
        return true
        
    }
    else{
        if (object1 == null && object2 == null){
            return true
        }
        else{
            return false
        }
    }
    
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepComparison(obj, {here: 1, object: 2}))
// console.log(deepComparison(obj, {here: {is: "an"}, object: 2}))



