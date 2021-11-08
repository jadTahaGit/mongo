const express = require("express");
const app = express();


app.set("view engine", "ejs");

app.listen(3000);

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


