var http = require("http");
var url = require("url");
var fs = require("fs");
var express = require("express");
var app = express();
app.use(express.static('tcb'));
app.listen(8990);
console.log("服务已启动")