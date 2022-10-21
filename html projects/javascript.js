// function =  input e jeta pabo seta listOfItem e add korte hobe
// function = addFruitToList
// input = fruit 
// output = add the fruit to the list 
// step1:initialize listOfFruit = []
// step2:take the input fruit  
// step3: when press add button then  add the fruit in listOfFruit


// function = showFruit 
// input = fruitName 
// outPut = show fruitName 
// step1: take the fruitName from input value 
// step2: add the fruit in listOfFruit 
// step3: when click the add button show the fruit in listOfItem 
var listOfFruit = [];
$(document).ready(function(){
    $("button").click(function(){
        console.log($(this))
        // console.log($("button"))
        fruit = $("input").val();
        console.log(`list of fruit before add ${listOfFruit}`);
        console.log(`add fruit ${fruit}`);
        listOfFruit.push(fruit);
        var fruitId = listOfFruit.indexOf(fruit);
        console.log(`added fruitid ${fruitId}`)
        console.log(`list after add ${listOfFruit}`)
        $("#fruitList").append(`<li id = ${listOfFruit.indexOf(fruit)}><i class="fas fa-times-circle"></i>${fruit}</li>`)
        // $("#fruitList").append(`<li id = ${listOfFruit.indexOf(fruit)}"><i class="fas fa-times-circle"></i>${fruit}</li>`)
        // $("#fruitList").append(`<li id = ${listOfFruit.indexOf(a)}><i class="fas fa-times-circle"></i>apple</li>`)
        // $("#fruitList").append(`<li id = "0"><i class="fas fa-times-circle"></i>apple</li>`)
        // var fruitId = listOfFruit.indexOf(fruit);
        $(`#${listOfFruit.indexOf(fruit)} > i`).click(function(){
            var fruitId = listOfFruit.indexOf(fruit)
            console.log(`removed id ${fruitId}`);
            $(`#${fruitId}`).remove();
            fruitId = listOfFruit.indexOf(fruit);
            console.log(`fruitid after remove ${fruitId}`);
            listOfFruit.splice(fruitId, 1);
            console.log(`removed fruit ${fruit}`);
            console.log(`listOfFruil after remove = ${listOfFruit}`)
        })
    
    });
    // 1.$("button").click(function(){
    //     console.log($(this))
    //     1.console.log([button])
    //     2.fruit = $("input").val();
    //     3.fruit = 'a';
    //     4.console.log(`list of fruit before add ${listOfFruit}`);
    //     5.console.log(`list of fruit before add []`);
    //     6.console.log(`add fruit ${fruit}`);
    //     7.console.log(`add fruit 'a'`);
    //     8.listOfFruit.push(fruit);
    //     9.listOfFruit.push('a');
    //     10.listOfFruit = [a]
    //     11.var fruitId = listOfFruit.indexOf(fruit);
    //     12.var fruitId = ['a'].indexOf(fruit);
    //     13.var fruitId = ['a'].indexOf('a');
    //     14.var fruitId = 0;
    //     15.console.log(`added fruitid ${fruitId}`)
    //     16.console.log(`added fruitid 0`)
    //     17.console.log(`list after add ${listOfFruit}`)
    //     18.console.log(`list after add [a]`)
    //     19.$("#fruitList").append(`<li id = ${listOfFruit.indexOf(fruit)}><i class="fas fa-times-circle"></i>${fruit}</li>`)
    //     20.$("#fruitList").append(`<li id = ${['a'].indexOf('a')}><i class="fas fa-times-circle"></i>'a'</li>`)
    //     21.$("#fruitList").append(`<li id = '0'><i class="fas fa-times-circle"></i>'a'</li>`)
    //     22.$(`#${fruitId} > i`).click(function()
    //     23.$(`#0 > i`).click(function(){
    //         1.console.log(`removed id ${fruitId}`)
    //         2.console.log(`removed id 0`)
    //     }

    
    // function = removeItem 
    // step1:click on icon 
    // step2:take the item of the icon 
    // step3: remove the item from listOfFruit 
    // step4:remove the item  from html list 
    $("i").click(function(){

        console.log($(this))
        console.log(`${a+b}`)
        // var removeFruit = $("this").val();
        // console.log(removeFruit);
        // delete listOfFruit[listOfFruit.indexOf(fruit)];
        // console.log(listOfFruit);
        // $(`#${listOfFruit.indexOf(fruit)}`).remove();
    });
    console.log("hello world")

})

// 1.$("<i class='fas fa-times-circle'></i>").click(function()
// 2.$(icon).click(function(){
//     1.var removeFruit = $("this").val();
//     2.var removeFruit = $(icon).val();
// })