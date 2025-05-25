import *  as fs from "fs/promises";

//creating Directory / Folder
//No error found in this case as in D drive Desktop there is html folder there courses folder is being created successflly.
try{
    await fs.mkdir("D:\\Desktop\\html\\courses");
    console.log("Folder Created");
}
catch(error){
console.log(error)
}

//Error: as here in D drive there is Desktop and html folder but there is no folder with name "nofolder so will show an error."
try{
    await fs.mkdir("D:\\Desktop\\html\\nofolder\\file");
    console.log("Folder Created");
}
catch(error){
console.log(error)
}

//Solution if there is any folder not present it will recursively keep creating folder.Example:
try{
    await fs.mkdir("D:\\Desktop\\html\\nofolder\\file\\index",{recursive:true});
    console.log("Folder Created");
}
catch(error){
console.log(error)
}