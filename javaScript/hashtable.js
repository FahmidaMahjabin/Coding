var text = "hey there";
console.log(text.charCodeAt([1]));
console.log(text.charCodeAt([6]));
const array1 = [1, 2, 3, 4];
console.log(array1);

textArray = text.split("");
newText = textArray.join();
console.log(newText);
console.log(Date());
var date = Date.now();
var eventTime = new Date("December 31, 2019 11:30:00");
var remainingTime = (date - eventTime);
var remainingDay = Math.floor(remainingTime/8.64e7);
console.log(remainingDay)
function timeDifference(){
    var eventTime = new Date("december 31, 2019 11.30.00")
    return eventTime - Date();
}
console.log(timeDifference())
document.getElementById("submit").addEventListener("click",getInputValue());
function getInputValue(){
    document.querySelector("#show").innerHTML = document.querySelector("input").value;
}
