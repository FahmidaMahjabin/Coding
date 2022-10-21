
console.log(document)


// button click korle light off image change hoye light on er image hobe and button er inner text change hoy turn off light hobe.

var buttonElement = document.getElementById("btn");
console.log(buttonElement)
buttonElement.addEventListener("click", function(){
  document.getElementById("light").src = "img/lightOn.jpg";
  buttonElement.innerText = "turn off Light"

})
var paragraph = document.querySelector("p");
console.log(paragraph)
paragraph.addEventListener('click', function(){
  
  paragraph.style.fontSize = "35px";
})
 document.write(11);
//  window.alert("hey alert")

//  var list = "<li>apple</li>"
//  for number in Range(4){

//  }
let b = 7;
function increment(){
  for (let i = 0;i < 5; i++){
    b = b + 1;
  }
  return b
}
let newB = increment()
console.log(newB)
console.log(b)

let a = 10;
for(var i = 0 ; i< 4; i++){
  let a = 5;
  a = a + i;
  console.log(`inside block ${a}`)
}
console.log(a)
carName = "volvo";
console.log(carName);
var carName;
const pi = 3.14;  
console.log(pi)
// pi += 10; we cant do this 
const list1 = [1, 2, 3, 5];
list1[3] = 10;
list1.push(20)
console.log(list1)
{
  const a = 12;
  console.log(`const value of a inside block: ${a}`)
}
console.log(` value of a outside block: ${a}`)

let theNumber = Number(prompt("enter the number:"));
if (!Number.isNaN(theNumber)){
  console.log(`square of number ${theNumber**2}`)
}
else{
  console.log("give a number")
}
let name ;
do{
  name = prompt("enter your name");
  while (!name){
    
  }
}

