const mysql=require("mysql");
var pool=mysql.createPool({
host:"127.0.0.1",
port:"8080",
user:"root",
password:"",
database:"music",
connectionLimit:20
});
module.exports=pool;