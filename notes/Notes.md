# View Engines:
- Pug
- Express Handelbars
- EJS


# EJS: HTML & JS:

The Power of EJS and view engines is when we start injecting dynamic content variables and logic in to these views.

EJS Tags are like PHP Tags:
<% const name = "mario" >

EJS looks as default in the folder views.







# Add an Object to the render Function:
In the object you can pass any kind of information!
And then add it to the views For example titles!. See the Code!


# Middleware
See the Foto: 
https://github.com/jadTahaGit/mongo/blob/master/notes/img/Middleware.png
https://github.com/jadTahaGit/mongo/blob/master/notes/img/mw.examples.png
https://github.com/jadTahaGit/mongo/blob/master/notes/img/mw2.png


The app.use... 404 is a middleware
- add a new arrgument to the function "next"
and then use it in the end as  function:  next() , 
this will let the app knows that after finishing the code of the middleware go to the second!


# Middleware Problem
if you put one app.get with a response in between 2 middlewares with next() functions. You'll face a problem:


//Middleware
app.use((req, res, next) => {
    console.log("new request made:");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();  //to the next middleware
})


app.get("/", (req,res)=> {
    const blogs = [
        {title: "Mongo ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
        {title: "ShopWare ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
        {title: "Spriker ECommerce ", snippet: "Lorem adsfsdaf dsgadsg ga sgdsg "},
    ]
    res.render("index", {title: "Home", blogs});
}  );


app.use((req, res, next) =>{
    console.log("in the next middleware");
    next();
})

The problem is that after doing the respose in after firing the handler the app will end in a way and will not reach the second middleware



# Middleware Package:
Morgan makes everything for us.  
app.use(morgan("dev"));
app.use(morgan("tini"));


# static files:
you can't link the css to the Html files. 
Try to create styles.css
try to open it /afafa/styles.css
The server will protect it!
you can see that in the network section in the devtools in chrome!
To specify the files that should be protected by a server and which not you need a framework. 
"Middleware and static files"

app.use(express.static("public"));

create a folder public and put the files init wich you wanna access. ;)
