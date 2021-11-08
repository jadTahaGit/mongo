const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);


//Middleware
app.use((req, res, next) => {
    console.log("new request made:");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();  //to the next middleware
})


app.use((req, res, next) =>{
    console.log("in the next middleware");
    next();
})

app.get("/", (req,res)=> {
    const blogs = [
        {title: "Mongo ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
        {title: "ShopWare ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
        {title: "Spriker ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
    ]
    res.render("index", {title: "Home", blogs});
}  );


app.get("/about", (req,res)=> {
    res.render("about", {title: "About"});
}  );

app.get("/blogs/create", (req,res)=> {
    res.render("create", {title: "Blogs"});
}  );


app.use((req,res)=> {
    res.status(404).render("404");
}  );


