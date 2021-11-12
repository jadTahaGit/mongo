const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog")

//conect to MongoDB
const dbURI = "mongodb+srv://jadtaha:root@cluster13.md4ks.mongodb.net/mongoDB?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err)=>console.log(err));


app.set("view engine", "ejs");

//Middleware & static files:
app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongo sanboxes routes
app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: "New Blog 1",
        snippet: "about my new Blog",
        body: "More aout my Blog Nostrud exercitation cupidatat ad enim commodo aliquip fugiat est nostrud consequat laborum incididunt."
    });

    blog.save()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
        
    });

});

app.get("/all-blogs", (req, res)=>{
    Blog.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    });
});

app.get("/single-blog", (req, res)=>{
    Blog.findById("618eb12145c8733acf63acba")
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    });
});

// routes
app.get("/", (req,res)=> {
    // const blogs = [
    //     {title: "Mongo ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
    //     {title: "ShopWare ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
    //     {title: "Spriker ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
    // ]
    // res.render("index", {title: "Home", blogs});
    
    res.redirect("/blogs");

}  );

app.get("/about", (req,res)=> {
    res.render("about", {title: "About"});
}  );

// blog routes:
app.get("/blogs", (req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render("index", {title: "All Blogs", blogs: result})
    }).catch((err) => {
        console.log(err)
    });
})


app.get("/blogs/create", (req,res)=> {
    res.render("create", {title: "Blogs"});
}  );


app.use((req,res)=> {
    res.status(404).render("404");
}  );


