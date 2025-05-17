/* when a web page is loaded the browser creates a Document Object Model
of the page it converts and amkes an object for everything that ar ethere in the web page as a document 
It contains and makes a document of all the functions an dproperties that we use in HTMl and css like on click, bgcolor,etc */
console.log(document)
// and then we will be able to see all the object

console.dir(document)

// now since this document is an object we can access all the methods and keys by dot operator

console.log(document.head)
console.log(document.title)
console.log(document.URL)

//getElementByTagName
console.log(document.getElementsByTagName("h6"))
console.log(document.getElementsByTagName("h6").length)

//getElemntById
console.log(document.getElementById("main")) //write the ID

//getElemntByClassName
console.log(document.getElementsByClassName("cls-1"))
//in console as you move on that the section of that class will be highlighted

//**querySelector
//It can handle all the above cases: for tag: just tag name
//class: . ClassName
//ID: # IDname

console.log(document.querySelector("h3"))
console.log(document.querySelector(".cls-1"))
console.log(document.querySelector("#main"))
//but it gives only one element at a time as it does for cls-1 only the first is selected
console.log(document.querySelector("li"))

//to solve it we will use querySelectorAll
console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll(".cls-1"))


//-------------------storing data in a variable--------------------------------
const h1= document.querySelectorAll("li")
console.log(h1)


//----------------------innertext,innerHTML,textContent etc -----------------------------
const p=document.querySelector("p")
console.log(p.innerText,`
    
    `) 
// no script tag and else will be there only the formatted text. Alos the output is shown of the console log that was there inside the <p> tag

console.log(document.querySelector("p").textContent,`

`)

//To include all the html tags even
console.log(document.querySelector(".top-bottom").innerHTML,`
`)

//Modifying an element in javascript

const h= document.querySelector("h3")
const h2= document.querySelector("h3")
h2.innerText="Text Changed" // just changing the text
h.innerHTML="<em>Changed tag</em>" //changing tag and text both


//------------------Classes and Classlist(only for a single element)----------------------------
const h3=document.querySelectorAll("h3")
console.log(h3)
console.log(h3[0].classList) //we get all the class list of that tag
console.log(h3[1].classList)
console.log(h3[2].classList)//multiple classes

 
//say I want to add a class to a tag
//say heading to h1
const h4=document.querySelector("h1")
h4.classList.add("heading") //inspect and see the new code in console and inspect.

//removing classes from a element
h4.classList.remove("heading")
h3[2].classList.remove("cls-2")
console.log(h3[2].classList)//removed cls-2.

//*** Toggle
h3[2].classList.toggle("cls-2") // not there so add
h3[2].classList.toggle("cls-3") // this class was there so it removes it
console.log(h3[2].classList)
//*** toggle accepts only one attribute so we can use for each to run a loop
const element = document.querySelectorAll("h3");
["cls-1", "class2", "cls-3"].forEach(cls => element[2].classList.toggle(cls));

// -------------------------ATTRIBUTES-------------------------------
const a = document.querySelector("a")
console.log(a.href)
//modifying the attribute tag
console.log(a.href="www.youtube.com")//setting attributes
const input= document.querySelector("input")
console.log(input.value)
//setting attributes.
input.value="Bye"
console.log(input.value)
console.log(input.type) 
//if change type to password then password.
input.type="password"
console.log(input.type)
//placeholder
input.placeholder="Placeholder"  // It gives information to the user what we have to give input
console.log(input.placeholder)
console.log(input.placeholder="Password")
//getAttribute()
console.log(input.getAttribute("placeholder"))
//setAttribute
input.setAttribute("type","text")

//-------------------SIBLINGS--------------------------------
//parent of the li is ul, parent of the ul is the body parent of the body is the html tag.
const child1=document.querySelector("li")
console.log(child1.parentElement)
console.log(child1.parentElement.parentElement)
console.log(document.querySelector("body").parentElement)
//getting the child
let ul=document.querySelector("ul")
console.log(ul.children)
console.log(ul.children[1].innerText)
console.log(ul.children[4])
console.log(ul.children[0].innerText="One")
//siblings
console.log(document.querySelector("li").nextElementSibling.textContent)
console.log(document.querySelectorAll("li")[1].nextElementSibling.nextElementSibling.innerHTML)
//previousElementSibling
console.log(document.querySelectorAll("li")[1].nextElementSibling.nextElementSibling.previousElementSibling.innerHTML)
//previousSibling
console.log(document.querySelectorAll("li")[1].nextElementSibling.nextElementSibling.previousSibling) //says about the type

//----------------STYLING--------------------------
const ele=document.querySelector("h1")
console.log(ele)
console.log(ele.style)
ele.style.color="Green"
ele.style.backgroundColor="Yellow"
console.log(ele.style)

//--------------Creating Element and Appending it to the DOM-----------------------------------
const create=document.createElement("h1")
create.textContent="Hello World I am Sutapa!"
create.classList.add("cls-1")
console.log(create)
//append it to the body-> will be printed at the last as we appended it
const body=document.body
body.appendChild(create)
const ul2=document.querySelector("ul")
const newLi=document.createElement("li")
newLi.innerText="I'm li tag"
ul.appendChild(newLi)
//insertBefore
const firstLi=document.querySelector("li")
//selector.insertBefore(what,where)
ul.insertBefore(newLi,firstLi) //ul is the parent and newli is the child
//insertAdjacentElemnt
const firstp=document.querySelector("p")
const i=document.createElement("i")
i.innerText="I'm Italics"
i.style.color="blue"
//beforebegin,afterend,beforeend,afterbegin
//here only last line will get executed now to execute all we need to change what also i.e i element
firstp.insertAdjacentElement("beforebegin",i)//in a new line before begin
firstp.insertAdjacentElement("afterbegin",i) //in the same line just ebfore the word where it begins.
firstp.insertAdjacentElement("beforeend",i) //in same line after end
firstp.insertAdjacentElement("afterend",i) //in a new line after end
//append
const section=document.querySelector("section")
const h2new=document.createElement("h2")
h2new.innerText="Hello Sutapa"
section.append("IdontKnow",h2new) //can append multiple things
console.log(section.children)
section.prepend('Checking',h2new)
 // NOTE: an element can be inserted at a particular position only so as we use h2new in both append and prepend the last one will get executed and will be removed from append position

 const Listmine=document.querySelector(".Listmine")
 Listmine.removeChild(document.querySelectorAll("li")[3])
 console.log(Listmine)


 //-----------EVENTS------------------------
//Dont make a habit of making inline events.
//Inline Events Ex:
//<button onclick="alert(`Ay`)">Click Me</button> declared in html--> a bad way to declare.
//bad way 2
const secondBtn=document.querySelector(".secondBtn")
//secondBtn.onclick=alert("sutapa")
secondBtn.onclick=()=>console.log("Sutapa")

//Great way
 //the syntax of the event listener is :element.addEventListener(event, function, useCapture);
const best=document.querySelector(".best")
const greetings=()=>console.log("Best way by eventListener")
best.addEventListener("click",greetings)

//event(e) object
const para=document.querySelector('.para')
para.addEventListener("click",(event)=>console.log(event))
const form=document.querySelector("form")
//form.addEventListener("submit",(event)=>{
   // event.preventDefault()//prevents the default behaiviour of submit i.e refreshing the page
   // console.log(event)})
    //taking the value of the form from the submit button
const inputnew=document.querySelector(".newinput")
form.addEventListener("submit",(a)=>{
    a.preventDefault()
    console.log(inputnew.value)
})
//event: is the name of the event,then we make a function that will get executed on that event.
//useCapture is optional: a boolean true or false that specifies
//form.addEventListener means a fuction is going to be inserted inside a event for a particular query.

