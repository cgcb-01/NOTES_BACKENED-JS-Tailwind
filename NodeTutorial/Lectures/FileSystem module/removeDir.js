import * as fs from "fs/promises";

//Remove Folder / Directory
try{
    await fs.rmdir("d:\\Desktop\\html\\File");
    console.log("Removed");
}
catch(error)
{
    console.log(error);
}