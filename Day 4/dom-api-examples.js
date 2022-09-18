const para = document.createElement("p");
para.textContent = "This is created using DOM api"

//we can also set attr using setAttribute
para.setAttribute("id", "js-para")
console.log(para.getAttribute("id"))
para.classList.add("first-class")
para.classList.add("second")


para.classList.remove("first-class")

const span = document.createElement("span") //dom node is created
span.id = "span-id" // accessing dom node properties
// span.className = "blue"
span.textContent = " this span is created by <em>document.createElement</em>"  //treats everything as text

span.innerHTML = " this span is created by <em>document.createElement</em>" //considers html elements
span.style.backgroundColor = "royalblue" // css object model
span.style.color = "yellow"

para.appendChild(span)

document.body.appendChild(para)

const hobbies = ["coding", "swimming"]
const ul = document.createElement("ul")
for (let hobby of hobbies){
    // let listitem = document.createElement("li");
    // listitem.textContent = hobby
    // ul.appendChild(listitem)

    ul.innerHTML += "<li class='blue'>" + hobby + "</li>"
}

document.body.appendChild(ul)


//getting the elements from the document

console.log(document.getElementById("js-para").textContent)

console.log(document.getElementsByClassName("blue"))

console.log(document.querySelector("p"))
console.log(document.querySelectorAll("p"))