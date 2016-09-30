var cityTab = document.getElementsByClassName("top_sp2")[0];//切换城市
var city = document.getElementsByClassName("city")[0];//城市框
var city_colse = document.getElementsByClassName("city_colse")[0];//关闭切换城市框
cityTab.onclick = function(){
	city.style.display = "block";
}
city_colse.onclick = function(e){
	e.stopPropagation();
	console.log("aaa");
	console.log(city);
	city.style.display = "none";
}

// 客户服务
var p_elem = document.getElementsByClassName("li_p1")[0];
var li_elem = document.getElementsByClassName("li5")[0];
li_elem.onmouseover = function(){
	p_elem.style.display = "block";
}
li_elem.onmouseout = function(){
	p_elem.style.display = "none";
}
//轮播
var lunbo_content = document.getElementsByClassName("lunbo_content")[0];
var ctrl_item = document.getElementsByClassName("ctrl_item");
console.log(ctrl_item);
var start = 0;
var index = 1;
setTimeout(function(){lunbo_content.time = setInterval(move,1)},3000);
function move(){
	start -= 10;
	if (start % 1200 == 0 || start == 0) {
		clearInterval(lunbo_content.time);
		for(var j=0;j<ctrl_item.length;j++){
				ctrl_item[j].style.background="#fff";
			}	
			ctrl_item[index].style.background="#333";

			index++;

			if(index==ctrl_item.length){
				index=0;
		}
		setTimeout(function(){
			lunbo_content.time = setInterval(move,1);
				//index++;
				
					//
		},3000)
		if (start == -6000) {
				start = 0;
			
		}
	}
	lunbo_content.style.left = start + "px";
}


// 进入店铺
var list_item = document.getElementsByClassName("list_item");
for(var i = 0;i < list_item.length;i++){
	list_item[i].onmouseover = a_block;
	list_item[i].onmouseout = a_none;
}
function a_block(){
	this.childNodes[7].style.display = "block";
	this.style.background = "#f7f7f7";
}
function a_none(){
	this.childNodes[7].style.display = "none";
	this.style.background = "#fff";
}

//地图
var map_btn = document.getElementsByClassName("map_div")[0];
var map = document.getElementById("gdMap");
var close_map = document.getElementsByClassName("close_map")[0];
var model = document.getElementById("model");
// var url = "http://localhost:3000/tcb/shops/pagacount/1?callback=?";
map_btn.onclick = function(){
	map.style.display = "block";
	model.style.display = "block";
	//$.getJSON(url,pressJSON);
}
close_map.onclick = function(){
	map.style.display = "none";
	model.style.display = "none";
	$("#mapContent").css("display","none");
}



//分页
var page_num = document.getElementsByClassName("a2");
var top_page = document.getElementsByClassName("next_page1")[0];//上一页
var next_page = document.getElementsByClassName("next_page")[0];//下一页
console.log(page_num);


//数据填充
var pic_img = $(".pic_img");//图片
var addr_name = $(".addr_name");//名字
var shop_grade = $(".shop_grade");//等级
var desc = $(".desc");//主营
var addr = $(".addr")//地址
var visit = $(".score_p_span3")//人气
var into_shop = $(".into_shop");
console.log($(addr_name));


//搜索框、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
var search_ipt = document.getElementsByClassName("addr_ipt")[0];
search_ipt.oninput = function(e){
	e.preventDefault();
	var script = null;
	script = $("<script></script>");
	var target = e.target || e.srcElement;
	script.appendTo($("body"));
	var str = target.value;
	src  = "http://suggest.bang.360.cn/suggest?word=" + str + "&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=suggest&t=0.3514809920297852"
	script.attr("src",src);
	script.remove();
}

function suggest(datas){
	var data = datas.result;
	var cssMap={
		border:"1px solid balck",
		width:"468px",
		height:"40px",
		background:"#fff",
		"line-height":"40px",
		"text-indent":"10px",
		position:"relative",
		top:"41px",
		left:"-60px",
	};
	$(".suggestP").remove();
	for(var i = 0;i < 6;i++){
		$("<p class='suggestP'></p>").text(data[i].word).css(cssMap).appendTo($("form"));
	}
	$(".suggestP").mouseover(function(){
		$(".suggestP").css("background","white");
		$(this).css("background","lightblue");
	})
	$(".suggestP").click(function(){
		$(".addr_ipt").val($(this).text());
		$(".suggestP").css("display","none");
	})

}