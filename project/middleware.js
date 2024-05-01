const express = require("express");
const user = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

app.use(express.urlencoded({extended : false}));

// app.use((req,res,next) =>{
//     // console.log("hello for middleware1");
//     // req.myUsername = "nileshkumar";
//     // return  res.json({mgs : "hello form middleware 1"});
//     next();


// });

// app.use((req,res,next) =>{
//     console.log("hello for middleware2");
//     return  res.json({mgs : "heyyy"});
   


// });


app.get("/api/user",(req,res) =>{
    return res.json(user);
});




//  app.listen(8000, () =>{
//     console.log("server started");
//  })



// ---------------Http Header --------
