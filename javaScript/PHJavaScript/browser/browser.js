const showFunc = function(work){
    console.log(`I am doing ${work}`)
}
setTimeout(() =>{showFunc("eat")}, 5000);
console.log("hey there")

for(let i = 0; i <= 6; ++i){
    console.log(i)
}

function printHello(){
    var msg = "hello";
    console.log(msg)
}

printHello();
// const value = parseFloat(prompt("enter number:"));
// alert(value + 200);
setTimeout(console.log("sey hello"), 3500)
const youtub = confirm("do you wanna see youtub?");
if (youtub){
    console.log(location.href);
}
else{
    console.log("stay here")
}
