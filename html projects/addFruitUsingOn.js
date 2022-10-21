// function = addFruit 
// input = none 
// output = add the fruit in listOfFruit and show in browser 
// step1: take the value of input as a fruit 
// step2: add the fruit in listOfFruit 
// step3:show the fruit as list in html in browser 

// function  = remove fruit 
// input = 
// output = remove from listOfFruit and remove from browser 
// step1: jei icon e click korbo tar parent er id tai oi fruit er index so oi fruit ta listOfFruit theke delete korbo 
// step2:oi item ta html er list thekeo remove korbo
$(document).ready(function(){
    $("button").click(function(){
        var listOfFruit = [];
        var fruit = $("input").val();
        console.log(fruit)
        listOfFruit.push(fruit);
        $("ul").append(`<li><i class="fas fa-circle"></i>${fruit}</li>`);
        
        
        $("ul").on("click","li",function(){
            // var fruitId = $(this).attr("id");
            // console.log(fruitId);
            // listOfFruit.splice(fruitId, 1);
            $(this).remove();
        
        });
    
});
});

// function addFruit(){
//     var fruit = $("input").val();
//     console.log(fruit)
//     listOfFruit.push(fruit);
//     $("ul").append(`<li id = ${listOfFruit.indexOf(fruit)}><i class="fas fa-circle"></i>${fruit}</li>`)
// }
// 1.var listOfFruit = [];
// 2.var fruit = $("input").val();
// 3.var fruit = address1.val()
// 4.var fruit = "a";
// 5.listOfFruit.push(fruit)
// 6.listOfFruit.push("a")
// 7.address2.push("a")
// 8.["a"]
// 9.$("ul").append(`<li id = ${listOfFruit.indexOf(fruit)}><i class="fas fa-circle"></i>${fruit}</li>`)
// 10.address3.append(`<li id = ${listOfFruit.indexOf(fruit)}><i class="fas fa-circle"></i>${fruit}</li>`)
// 11.address3.append(`<li id = ${listOfFruit.indexOf("a")}><i class="fas fa-circle"></i>${"a"}</li>`)
// 12.address3.append(`<li id = 0><i class="fas fa-circle"></i>"a"</li>`)
// 13.`<li id = 0><i class="fas fa-circle"></i>"a"</li>`

 

// function removeFruit(){
//     $("ul").on("click","li",function(){
//         var fruitId = $(this).attr("id");
//         console.log(fruitId);
//         listOfFruit.splice(fruitId, 1);
//         $(this).remove();
    
//     })

// }

// 1.$("ul").on("click","li",function()
// 2.address4.on("click","li",function(){
//     1.var fruitId = $(this).attr("id")
//     2.var fruitId = addressOfli.attr("id")
//     3.var fruitId = "1"
//     4.console.log(fruitId)
//     5.console.log("1")
//     6.listOfFruit.splice(fruitId, 1)
//     7.listOfFruit.splice("1", 1)
//     8.["a", "c"]
//     9.$(this).remove();
//     10.$("li").remove();
//     11.address6.remove();
// }
