
// $(document).ready(function(){
//     console.log($("a").attr("target"))
//     $("h1").css("color","blue")

    // $("button").click(function(){
    //     $(".first").toggle(1000)
    // });
// $(document).ready(function(){
//     $("button").click(function(){
//         newText = $("#dib1").html("<p> hey there </p>");
//         console.log(newText)

//     })
// });

// function addition(number1, number2){
//     return number1 + number2
// }
// console.log(addition(20, 30))

// //  function = input name jodi number hoy tahole error dekhabe 
// function myfunction(){
//     var name = document.getElementById("nm").value ;
//     try {
//         if(isNaN(name) == false) throw "its a number";
//         else{
//             document.getElementById("p1").innerHTML = name;
//         }

//     }
    
//     catch(err) {
//         document.getElementById("p1").innerHTML = err;
//     }
// }
// var object1;
// object1 = document.getElementById("dib1").style.background = 'blue';
// object1 = document.getElementById("dib1").style.padding = '10px';
// object1 = document.getElementById("dib1");
// object1.innerHTML = '<i>Ayon kutta</i>';
// object1.innerHTML = '<b>Ayon Gadha</b>';
// object2 = document.getElementById("1").innerHTML = "hey there";

// console.log(object2);
// when click color button add color 
$(document).ready(function(){
    $("#color").click(function(){
        $("h1").css('color','red')
    });
    // $("#italic").click(function(){
    //     $("h1").append(`<i>${$(this).innerText}</i>`)
    // });
    // $("div").find("*")[0].innerHTML = "baal";
    $("p").click(function(){
        $(this).siblings().hide();
    });
    $("li:first-child").css("color","blue");

})
document.getElementById("first").style.backgroundColor = "black";
document.getElementById("first").style.color = "white";
document.getElementById("first").style.padding = '10px';
document.getElementById("first").innerHTML= "<i>Ayon kutta</i>";
var value = document.querySelector('h1');
value.innerHTML = '<b>hey there</b>';
var val = document.querySelector('li:nth-child(3)').style.background = "red";
var val = document.querySelector('li:nth-child(3)').innerText = "antor";
console.log(val);
var value = document.getElementsByClassName('sample');
value[0].innerText = "eva";
var value = document.getElementsByTagName('sample');
function getElement(){
    var value = document.querySelectorAll('li:nth-child(odd)');
    value.forEach(function(item){
        item.style.backgroundColor = "gray"
    })
    for (var index = 0; index < value.length ; index++){
        value[index].innerHTML = "hello"
    }

}
getElement()
console.log(value)
