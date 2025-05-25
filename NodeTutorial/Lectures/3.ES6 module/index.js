//As in many places we use imports and it is the most commonly used so instead of require we can use import .

//for that first we have to create a package.json in that folder by npm init and then adding a type:"module" in the package.json. This will help to use the import word else will cause an error.

import greet from "./greet.js";
greet("Sutapa"); //passing the string as usernameto the function defined in greet.js