console.table({name:"Huxn", age:25 })//table
console.log("HEllo world")

//variables
//(reserved kaeyword)(variable name)(type of value)
//reserved keyword: let,var,const
let name;//declared variable undefined by default as no value.
 name="Sutapa Webdev";
console.log(name);

// primitime data types
let num=15.25;
let num2=10000000000000000000000000000000;
console.log(typeof num)
console.log(typeof num2)
console.log(2**3);// power 2 to the power 3

//Boolean data types.
//Falsy values are:
//->false->null->undefined->0->-0->NaN->' ',"",``,(empty quotes)
let notdefined=undefined;
console.log(notdefined);//ste by the compiler
notdefined=null;
console.log(notdefined);//set by programmer

//------------//
// Equality Operator
console.log(10==="10") //check value and type
console.log(10===10)
console.log(10===20)
console.log(10!=="10") // strict not equality operator(value+type)
console.log(10=="10")//loose equality operator.
console.log(10!="10")// loose not equality operator only value hence false

//strings----------//
//conactenation
let firstname='Sutapa'
let lastname='Naskar'
let fullname=firstname+' '+lastname
console.log(fullname)
//or
let fullname2=firstname.concat(lastname)
console.log(fullname)

//append of data in a string
firstname+=" is a Web dev Student"
console.log(firstname)

//length
console.log(firstname.length);

//to uppercase and to lower case
let x="HI Everyone !"
console.log(x.toLowerCase())
console.log(x.toUpperCase())

//Slicing of string.
firstname="SutapaNaskar"
//here the first starting index and then the next index is the index whic is
//one more than the index we want to reach
console.log(firstname.slice(0,1))

//Split and join -> split into array.
console.log(lastname.split('|',5).join())
console.log(lastname.split(""))

//Includes and trim
console.log(lastname.includes("Nas"))
let m="       abc   "
console.log(m.trim())

// speciality of ``
fullname=`${firstname} ${lastname}  and something else
 like 
 a b and c
 and did you see the line break?`
 console.log(fullname)

 //loops and logical operation 