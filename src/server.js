const express = require("express"); //importing express libreary
const app = express(); //creates app object, contains server instructions
const port = process.env.PORT || 5001;

app.use("/static/index", express.static("public")); //tells app to use public folder when request is made to /static
app.use("/static/page1", express.static("public/pg1"));
app.use("/static/page2", express.static("public/pg2"));
app.listen(5001, ()=>{
    console.log(`listening on port ${port}`);
}); //listening on localhost:5001 for requests to our webserver
