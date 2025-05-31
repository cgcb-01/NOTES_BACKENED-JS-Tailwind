/* A router object is an isolated instance of middleware and routes, Capable only of performing middleware and routes function. 
 A router behaves like a middleware itself. So we can use it as an argument to app.use() or as the argument to another router's use() method.

Once we have created a router object we can add a middleware and HTTP method routes on it . 
*/ 

import express from "express";
import students from "./routes/routes.js"
const app = express();

//PROCESS
// 1. Create routes folder and put your routes in a separate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export the router from the router file
// 5. Import the router
// 6. Use the (app.use) built-in middleware & provide your routes.

app.use('/students',students);
app.listen(8000,()=>console.log("Server Up"));