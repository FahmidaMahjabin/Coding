function addComment(){
    // take textarea value
    let comment = document.getElementById("comment").value ;
    console.log(comment)
    // add to paragraph
    let paragraph = document.createElement("p");
    paragraph.innerText = comment;
    paragraph.style.backgroundColor= "skyblue";
    paragraph.style.borderRadius = "20px";
    paragraph.style.display = "inline-block"
    // add paragraph to body
    document.getElementById("chatBox").appendChild(paragraph)
}
 
// submit button e click korle input er vlue pabe 
document.getElementById("input-btn").addEventListener("keyup", function(event){
    if (this.value == "delete"){
        document.getElementById("submit").removeAttribute("disabled");

    }
    else{
        document.getElementById("submit").setAttribute("disabled", true)
    }
})

// event bubble 
document.getElementById("list").onclick = function(event){
    event.target.remove();
    
}
document.getElementById("listSection").addEventListener("click", function(){
    console.log("whole section is clicked")
    
})
function clickFirstItem(em){
    console.log("first item is clicked");
    em.stopPropagation();

}
let listItem = document.getElementsByClassName("listItem");
for(let item of listItem){
    console.log(item)
}
// add item to list
document.getElementById("addItem").addEventListener("click", function(){
    let listItem = document.createElement("li");
    listItem.innerText = "new item";
    document.getElementById("list").appendChild(listItem)
})