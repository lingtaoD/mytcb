var express = require("express");
var app = express();
var fs = require("fs");
var bufferData=[];
fs.readFile("data/1.json",function(err,data){
	bufferData.push(data);
})
fs.readFile("data/2.json",function(err,data){
	bufferData.push(data);
})
fs.readFile("data/3.json",function(err,data){
	bufferData.push(data);
	app.listen(3000);
	console.log("服务已启动...")
});

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/tcb/shops/pagacount/:count",function(req,res){
	var count = req.params.count - 1;

	//res.set("Content-type","application/json");
	res.send(bufferData[count]);
})