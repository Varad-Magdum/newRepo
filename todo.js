document.querySelector("#createList").addEventListener("click", createList);
document.querySelector("#close").addEventListener("click", hideListForm);
document.querySelector("#addList").addEventListener("click", createCard);

function createList(){
    document.querySelector("#listForm").style.visibility = "visible";
    console.log("List Created");
}


function hideListForm() {
    document.querySelector("#listForm").style.visibility = "hidden";
    console.log("hide list form executed")
}

function createCard() {
    document.querySelector("#listForm").style.visibility = "hidden";
    let userInput = document.querySelector("#listName").value;
    console.log("card is created");
    let div1 = document.createElement("div");
    
    let title = document.createElement("h4");
     title.innerText = userInput;
    let plusIcon = document.createElement("i");
    plusIcon.className = "fa-solid fa-plus";
    div1.append(title, plusIcon);
    let lists = document.querySelector("#lists");
    lists.appendChild(div1);


    // title.innerText = userInput;
}
