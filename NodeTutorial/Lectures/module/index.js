const greet= require("./greet")
const {person1,person2,person3}=require("./persons")
greet("Aasman")
greet(person1)
greet(person3)

//We can also use the normal import and the export keywords that we use but for that we have to include type=module in package .json

//The require Function is used to import a code from another module It is also used in the iife module wrapper
// No need to write the extension of the file that we are exporting.