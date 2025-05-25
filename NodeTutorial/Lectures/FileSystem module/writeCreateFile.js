import * as fs from "fs/promises";

//create and write Files
try{
    await fs.writeFile("README.md","hello Nodejs");//This will write or replace all the content with totally new content. Gets replaced.
}
catch(error)
{
    console.log(error);
}