console.log(document.all);
let title = document.getElementById("header");
console.log(title)
console.log(title.innerText)
console.log(title.textContent)
console.log(title.innerHTML)
title.style.color = "red";

console.dir(document)
var unorderList = document.getElementsByTagName("ul");
console.log(unorderList)
let items = document.getElementsByClassName("item");
console.log(items)
for(item of items){
    item.style.color = "red";
}
// let lastChild = document.querySelectorAll("li:last-child");
// console.log(lastChild);
// for(child of lastChild){
//     child.style.color = "blue";
// }
let child = document.querySelector("ul").querySelector("li:nth-child(2)");
console.log(child)
child.style.color = "red";
var unorderList = document.querySelector("body");
let list = document.querySelector(".item");
console.log(list.closest(".header"));

var body = document.querySelector(".container");
var span = document.createElement("span");
span.textContent = "this is created ";
var ul = document.querySelector("ul");
body.insertBefore(span, ul );
var button = document.querySelector("#btn");
button.addEventListener("mouseover",function(){
    console.log("is clicked")
})
var password = document.getElementById("password");
password.addEventListener("paste", function(){
    alert("you can't paste your password")
})

const inputs = document.getElementsByTagName("input");
console.log(inputs)
for(let input in inputs){
    console.log(input)
}