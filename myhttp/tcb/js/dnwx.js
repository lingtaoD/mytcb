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
var url = "http://localhost:3000/tcb/shops/pagacount/1?callback=?";
map_btn.onclick = function(){
	map.style.display = "block";
	map.style.top = "600px";
	model.style.display = "block";
	$.getJSON(url,pressJSON);
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
console.log($(addr_name));



window.onload = function(){
	$.getJSON(url,pressJSON)
}


$(".a2").click(function(e){
	e.preventDefault();
	top_page.style.display = "inline-block";
	var page = $(this).text();
	$.getJSON("http://localhost:3000/tcb/shops/pagacount/"+page+"?callback=?",pressJSON);

	var obj = {
		display:"inline-block",
		background:"#fff",
		border:"1px solid #d6d6d6",
		color:"#999",
		height:"42px",
		"line-height":"42px",
		"margin-left":"3px",
		width:"42px",
		"text-decoration":"none",
		"vertical-align":"middle"
	}

	$(".a2").css(obj);

	$(this).css({
		color:"white",
		background:"#fc6621",
		"border-color":"#fc6621"
	});

})

function pressJSON(data){
	console.log(data);
	console.log("sfdsfd");
	var datas = data.shop_data;
	console.log(datas);
	for(var s = 0;s < pic_img.length;s++){
		pic_img[s].src = datas[s].shop_ico;
		addr_name[s].innerHTML = datas[s].shop_name;
		desc[s].innerHTML = "主营："+ datas[s].shop_desc;
		addr[s].innerHTML = "地址: " + datas[s].addr;
		visit[s].innerHTML = "人气：" + datas[s].shop_visit + "预览";
	}
	var orignY = parseFloat(datas[0].map_latitude);
	var orignX = parseFloat(datas[0].map_longitude);
	var orign=[orignX,orignY];
	console.log(datas);
	Map(orign,datas);
}

////////////////创造地图
function Map(orign,datas){ 
	console.log(arguments);
    var mymap = new AMap.Map('map_content', {
        center: orign,
        zoom: 10
    });
   
   	for(var index = 0;index < 10; index++){
   		(function(j){
   			var positionX = datas[j].map_longitude;
	   		var positionY = datas[j].map_latitude;
	   		var position = [positionX,positionY];
	   		var mark = [],info = [];
	   		var icon = new AMap.Icon({
	            image : '../images/markerIcon.png',
	            size : new AMap.Size(24,38)
	    	});
	   		mark[j] = new AMap.Marker({
				icon:icon,
	        	position: position,
		    });
		    mark[j].setMap(mymap);//地图的点标记
		    mymap.setFitView()//地图的自适应
		    info[j] = new AMap.InfoWindow({
		       content:show(datas[j]),
		       offset:new AMap.Pixel(0,-28)
		    })
		   	var clickHandle = AMap.event.addListener(mark[j],"click",function() {
	   			info[j].open(mymap,mark[j].getPosition());
	   			//$("#mapContent").css("display","block");
			})
   		})(index)	
   	}
}
function show(datas){ 	
	// for(var i = 0;i < 5;i++){
		var shop_name = "店名：" + datas.shop_name;
	 	var shop_desc = "主营：" + datas.shop_desc;
		var shop_addr = "地址：" + datas.addr;
		var shop_href = datas.shop_addr;
		$("#shopContent").text(shop_name);
		$("#descContent").text(shop_desc);
		$("#addrContent").text(shop_addr);
		$("#contentHref").attr("href",shop_href);
	return $("#mapContent").html();
}