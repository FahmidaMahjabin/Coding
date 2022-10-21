// function remove duplicate from an Array 
// step1:define a new Array
// step2: array theke ekta kore element nibo AND check korbo j newArray te element ase kina dekhte hobe 
// step3:jodi na thake then newArray te add korte hobe 
// step4:return newArray
function removeDuplicate(array){
    if (array.length <= 1){
        return array
    }
    else{
        let uniqueArray = [];
        for(let element of array){
            if(!uniqueArray.includes(element)){
                uniqueArray.push(element)
            }
        }
        return uniqueArray;
    }
}

let list1 = ['a', 'n', 'a', "a"];
console.log("unique list element:", removeDuplicate(list1))

const products = [
    {name: "laptop", price: 65000},
    {name:"dress", price: 1000, quantity: 3},
    {name:"pant", price: 200, quantity: 5},
    {name:"bag", price: 400, quantity:2}
]
function getTotalCost(products){
    let totalCost = 0;
    for(let product of products){
        if (product.quantity){
            totalCost += product.price * product.quantity;
        }
        else{
            totalCost += product.price;
        }
        console.log(totalCost)
    }
    
}
console.log("total cost of all products", getTotalCost(products))

let dress = {name: "jama", price:300};
if(dress.quantity){
    console.log("has quantity")
}
else{
    console.log("no quantity")
}

function getPositiveValues(list){
    let positiveValues = [];
    for(let number of list){
        if (number >= 0){
            positiveValues.push(number)

        }
        else{
            break;
        }
        
    }
    return positiveValues;
}
let list2 = [10, 20, 30];
console.log(getPositiveValues(list2))

// function = find the second largest number of an array 
// input = numbers 
// step1:list er first element take largest define korbo
// step2:list er second theke last porjonto ekta kore element nibo 
//     step2.1:jodi element > largest then secondLargest hobe largest value and largest = element 
//     step2.2:jodi element secondLargest er cheye boro hoy then secondLargest = element
// step3:jodi largest and secondLargest equal hoy then there is no second largest

function getSecondLargest(list){
    if (list.length >= 2){
        let largest = list[0];
        let secondLargest = largest;
        for(let element of list){
            if (element > largest){
                secondLargest = largest;
                largest = element;
            }
            else if(element > secondLargest){
                secondLargest = element;
            }
        }
        if(largest == secondLargest){
            throw "no second largest element"
        }
        return secondLargest;

    }
    else{
        throw "there is less than two element"
    }
}
// console.log(getSecondLargest(list2))

function getMarriage(age){
    const marriage = (age>21)? "marry" : "no marry";
    console.log(marriage)
}
getMarriage(20)
let list3 = [...list2];
console.log(list3)
for(let number of list3){
    console.log(number)
}
let laptop = {name: "laptop", price: 65000, quantity: 3}
const newProduct = {...laptop};
console.log(newProduct)
console.log(laptop === newProduct)

