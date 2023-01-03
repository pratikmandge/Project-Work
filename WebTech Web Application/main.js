// import
const express = require("express");

// To handle files
const fs = require("fs");

// Initiate express
const app = express();

// Middlewares
// for JavaScript and CSS
app.use(express.static("content"));

// Get route to Home Page
app.get("/", Home);
app.get("/home", Home);

// Get route to Contact Page
app.get("/contact", Contact);

// Get route to Career Page
app.get("/career", Career);

// Get route to Blog Page
app.get("/blog", Blog);

// Get route to About Page
app.get("/about", About);

// Get route to Know more Page
app.get("/apply", Apply);

// start server at port 3000
app.listen(3000,function()
{
	console.log("server is running");	
});

// Home function
function Home(req,res)
{
    res.sendFile(__dirname+"/content/html/main.html");
};
// Contact function
function Contact(req,res)
{
	res.sendFile(__dirname+"/content/html/contact.html");
};

// Career function
function Career(req,res)
{
	res.sendFile(__dirname+"/content/html/careers.html");
};

// Blog function
function Blog(req,res)
{
	res.sendFile(__dirname+"/content/html/blog.html");
};

// About function
function About(req,res)
{
	res.sendFile(__dirname+"/content/html/about.html");
};

// Know more function
function Apply(req,res)
{
	res.sendFile(__dirname+"/content/html/know more.html");
};