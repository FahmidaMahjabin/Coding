const firstHeading = document.getElementById("div-1");
console.log(firstHeading)
firstHeading.style.fontSize = "24px"
const header = document.getElementsByTagName("h3");
console.log(header)
for (let h3 of header){
    h3.style.color = "skyblue";
}
const thirdParagraph = document.querySelector("#div-3 p");
thirdParagraph.style.color = "green";
console.log(document.getElementById("div-3").children)
// make a list of 5 elements

for(let i = 0; i<5; i++){
    const li = document.createElement("li");
    li.innerText = `item ${i}`;
    const ul = document.getElementById("unorderList");
    console.log(ul);
    ul.appendChild(li)
}

const button = document.getElementById("btn");
button.addEventListener("click", makeGreenBG)
// button.onclick = makeGreenBG
function makeGreenBG(){
    document.body.style.backgroundColor = "green"
}
function showText(){
    const paragraph = document.createElement("p")
    paragraph.innerText = "hey ami new paragraph"
    document.body.appendChild(paragraph)
}


