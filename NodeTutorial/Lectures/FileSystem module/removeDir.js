import * as fs from "fs/promises";

//Remove Folder / Directory
try{
    //await fs.rmdir("D:\\Desktop\\html\\File"); should be a directory only here File.txt is not a directory so gives a error.
    await fs.rmdir("D:\\Desktop\\html\\courses");//the directory to be removed should be empty.
    console.log("Removed");
}
catch(error)
{
    console.log(error);
}