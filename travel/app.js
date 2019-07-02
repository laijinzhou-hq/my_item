const express=require("express");
const userRouter=require("./routes/user.js");
var app=express();
app.listen(8080);
app.use(express.static("public"));
app.use("/user",userRouter);