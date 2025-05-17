
//Array Introduction
const numbers=[1,2,3,4,5]
console.log(numbers)
const stringarr=["Eat","sleep","code","repeat"]
console.log(stringarr)
//nested Array.
const a=["Eat",["One","Two"],1,12.5,true]
console.log(a)

// Array elements operation.
//push method
 const fruits=["Apple","Banana","Orange","Mango","Pomegranate"]
 fruits.push("Watermelon")
 console.log(fruits)

 //pop method->delete the last element
 console.log(fruits.pop(),"Function->has a return type")
 fruits.push("Grapes")
 console.log(fruits)

 //shift->removes the elemnt from the first.
console.log(fruits.shift()," Function ->has a return type")

//Unshift -> append at the beginning 
fruits.unshift("Strawberry")
console.log(fruits)





// complete the array.

//Object -> it is like a structure in c
const person={
    Firstname:"Sutapa",
    lastname:"Naskar",
    Age:20,
    Relationship: false,
    Education: ["Oxford","AIS","NIT DGP"],
    isprogrammer:true,
    10:"ten"
};
console.log(person)
console.log(typeof person)
let sutapa=[]
console.log(typeof sutapa)
//hence array is also a of object.

console.log(person.Firstname)
console.log(person["Firstname"])
console.log(person.Age)
console.log(person.Education)
console.log(person.isprogrammer)
//here we need only bracket notation else error
console.log(person['10'])
//delete
delete person.Firstname
console.log(person)

//Function
function greet()
{
    console.log("Hello from a function")
}
//call,run and execute the function
greet()
function sayHello(name)
{
    console.log(`Hello ${name}`)
}
sayHello("Sutapa")

//return from a function
function add(x,y)
{
    return x+y;
}
console.log(add(5,9))

// Function declaration and expression 
function sayHello(name)
{
    console.log(`Hello ${name}`)
}
// function expression ->initiallising and then calling
const greetings=function (name){
    console.log(`Hello ${name}`)
}
greetings("Sutapa")

//Call back function -> when a function is passed as an argument to another function

function showcallFunc(fn)//fn is the temporary name of the function passed inside the showcall function as we name parameter inside a function
{
    const value=10
    fn(value)
}
function abc(value)
{
    console.log(value+25)
}
showcallFunc(abc)

//defining a call back back function inside the called function
showcallFunc(function(value){
    console.log(`The value received is ${value}`)
})

//calling a call back function example
function greet2(name,cb)
{
    console.log(`Hello ${name}`)
    cb()//calling a callback function
}
 function callme()
{
    console.log(`I am a callback function`)
}
greet2("Sutapa",callme)

//local and global scope as it is in c++



//JSON handling
//Copying and pasting JSON data and making a object
const persona={
    Name:"Sutapa Naskar",
    Age: 20,
    Email:"sn@gmail.com",
    issubscribed:true,
    hobbies:["Reading","Running","Cooking"],
    Address:{
        City:"New York",
        Idk:true
    }
};
// JSON.stringify() here the data keys are inside double Quotes
console.log(JSON.stringify(persona))//converts the object to JSON data

// JSON.parse->to convert JSON data again into a object

console.log(JSON.parse(JSON.stringify(persona)))

//Date and time in JS
const currentDate=new Date() //Date constructor
console.log(currentDate)

const date=new Date()

const year=date.getFullYear();
const month=date.getMonth();
const day= date.getDay();
const hours=date .getHours()
//etc many more

console.log(`Year: ${year}`)
console.log(`Month: ${month}`)
console.log(`Month: ${day}`)
console.log(`Month: ${hours}`)
// some other types
console.log(date.getUTCDate())

// Converting dtae to local and used ways
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleString())  // and many others

// Incrementing the date or decreasing
date.setDate(date.getDate()+2)
console.log(date.toDateString())

//SetInterval -> repeatedly going to execute a block of code for a specified interval. like a loop
//setInterval(()=> console.log(`This function will be executed in every 2 second`),2000)

//setTimeout-> execute a given line of code after a specific time of delay
//setTimeout(function (){
    //console.log(`This function will be executed after 3 second`)
//},3000)

//stopping a interval (setInterval) returns a ID
//const intervalId = setInterval(function (){
   // console.log("This Function is executed at the interval of 1 second")
//},1000)

//Stopping the intetrval after 10 second
//setTimeout(function (){
//   clearInterval(intervalId)
//   console.log(`Interval Stopped`)
//},10000)

//Using the `` expression.
const firstName="Sutapa"
const lastname="Naskar"
function info()
{
    console.log("abc")
    return `My name is Sutapa & I am 19 years old`
}
console.log(`${info}`) // writes the whole function
console.log(`${info()}`)//writes what it returns and what inside the function

//Arrow function (shorter way to define a function)
// let a function be:function greet(username)
//                   {
//                     return `Hello ${username}`
//                    }
 greet=(username)=>{
    return `Hello ${username}`
 }
 console.log(greet("Sutapa"))

// if the function has one parameter as here ommit the bracket
// we can also remove the return keyword if the function has only one line of code
  add=num1=>console.log(`Adding 5 to the number ${num1} and it gives ${num1+5}`)
  add(7)
  const double=(n)=>n*2  //returns n*2
  console.log(double(25))

  //Enhanced object 
  user=(name,age,work)=>{
    return {
        name: name,
        age:age,
        work:work
    }}
    console.log(user("Sutapa",19,"Programmer"))
  //also in return if the name of the jey and the name of the parameter is same then we can also remove that
  function user2(name,age,work)
  {
    return {
        name,
        work,
        age
    }
  }
  console.log(user2("Sutapa",19,"Programmer"))

 //methods are functions inside a object

