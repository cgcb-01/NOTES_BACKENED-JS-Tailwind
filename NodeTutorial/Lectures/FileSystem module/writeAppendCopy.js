import * as fs from "fs/promises";

//create and write Files
try{
    await fs.writeFile("README.md","hello Nodejs");//This will write or replace all the content with totally new content. Gets replaced.
}
catch(error)
{
    console.log(error);
}

//Now to append new lines in a file instead of replacing the existing ones
try{
    await fs.appendFile("README.md","\nNode.js is the best");
}
catch(error)
{
    console.log(error);
}

//Copy Files
try{
    await fs.copyFile("README.md","info.txt");
}
catch(error)
{
    console.log(error);
}

//Get File Information
try{
    const info=await fs.stat("info.txt");
    console.log(info);
    console.log(info.isDirectory()); //not a directory but a file
    console.log(info.isFile()); 
}
catch(error)
{
    console.log(error);
}