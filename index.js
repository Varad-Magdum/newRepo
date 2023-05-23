const myElement = document.createElement("div");
myElement.className = "varad";
myElement.id = "idv";
myElement.setAttribute("for", "name")
myElement.innerHTML= `<h1> my name is varad </h1>`
console.log(myElement);




document.querySelector("div.mynames").appendChild(myElement);

