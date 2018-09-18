//Load express
const express=require("express");
const path=require("path");

//create an instance of express application
const app = express();

//create routes

app.get('/time', (req,res)=>{
    //status
    res.status(201);
    res.type('text/plain');
    res.send(`<h1>The current time is ${new Date()}</h1>`);
    });


app.get('/', (req,res)=>{
    const userAgent=req.get('User-Agent');
    res.status(200);
    res.type('text/html')
    res.send(`<h1>Hello ${userAgent}</h1>`);
    });

//Static page only
// app.use(express.static(__dirname+"/public"));


//start server on port 3000 if undefined on command line
const PORT=parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

app.listen(PORT, ()=>{
    console.info(`Application started on port ${PORT} at ${new Date()}`);
});