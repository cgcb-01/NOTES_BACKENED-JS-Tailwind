const homeController=(req,res)=>{
    const data={
        name:"Sutapa",
        Age:"19"
    }
    res.render("index",data);
}
export {homeController}