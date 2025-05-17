//selecting all the query

let one=document.querySelector(".click")
let two=document.querySelector(".contextmenu")
let three=document.querySelector(".dblclick")
let four=document.querySelector(".mousedown")
let five=document.querySelector(".mouseenter")
let six=document.querySelector(".mouseleave")
let seven=document.querySelector(".mousemove")
let eight=document.querySelector(".mouseout")
let nine=document.querySelector(".mouseover")
let ten=document.querySelector(".mouseup")

// adding events
one.addEventListener("click",()=>{
    one.classList.toggle("red") //here you will see on one click red and on next click black as on first click toggle works it adds the red colorand on next click again toggle works and now as red was already there so removes it
})
//change the toggle to add and check

//in contextmenu the event is fired on right click
two.addEventListener("contextmenu",()=>{
    two.classList.toggle("blue")
})
//The event is fired on double click
three.addEventListener("dblclick",()=>{
    three.classList.toggle("teal")
})

four.addEventListener("mousedown",()=>{
    four.classList.toggle("steelblue")
})

five.addEventListener("mouseenter",()=>{
    five.classList.toggle("orange")
})

six.addEventListener("mousemove",()=>{
    six.classList.toggle("purple")
})
seven.addEventListener("mouseleave",()=>{
    seven.classList.toggle("pink")
})

eight.addEventListener("mouseover",()=>{
    eight.classList.toggle("crimson")
})

nine.addEventListener("mouseup",()=>{
    nine.classList.toggle("aqua")
})
