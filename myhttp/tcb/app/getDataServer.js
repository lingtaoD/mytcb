define("getDatas",["map"],function(map){
	return{
		getDataServer:function(data){
			var data_1 = JSON.parse(data);
			var datas = data_1.shop_data;
			for(var s = 0;s < pic_img.length;s++){
				pic_img[s].src = datas[s].shop_ico;
				addr_name[s].innerHTML = datas[s].shop_name;
				desc[s].innerHTML = "主营："+ datas[s].shop_desc;
				addr[s].innerHTML = "地址: " + datas[s].addr;
				visit[s].innerHTML = "人气：" + datas[s].shop_visit + "预览";
				into_shop.attr("href",datas[s].shop_addr) ;
			}
			var orignY = parseFloat(datas[0].map_latitude);
			var orignX = parseFloat(datas[0].map_longitude);
			var orign=[orignX,orignY];
			console.log(datas);
			map.map(orign,datas);
		}
	}
})