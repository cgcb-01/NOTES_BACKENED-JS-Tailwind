//Module Wrapper 
//The use of IIFE function : Immediately Invoked function expression. 
(function(exports,require,module,__filename,__dirname)
{
    console.log("Hello from IIFE");
})();

//This was previously used as parent.
console.log(__filename)// This gives the path of the file 
console.log(__dirname)// This gives the directory
