import * as fs from "fs/promises";

//Read the file names in a folder
try{
    const files=await fs.readdir("D:\\Desktop\\html");
    for(const file of files)
        console.log(file);
}
catch(error)
{
    console.log(error);
}