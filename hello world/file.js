const   fs = require("fs");
   //--------------- writing the file============>

// fs.writeFileSync("./test.txt", "heyy this is komal");
// fs.writeFile("./test.txt","hello word ASyn",(err) =>{});
 
// const result = fs.readFileSync("./contact.txt" ,"utf-8");
// console.log(result);



// ..............reading the file //...........

// const result=null;
// fs.readFile("./contact.txt","utf-8",(err,result) =>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })
// console.log(result);


fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.cpSync("./test.txt","./copy.txt");