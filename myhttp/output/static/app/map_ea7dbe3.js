define("map",["jquery"],function($){
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
	return {
		map:function (orign,datas){ 
			console.log(arguments);
		    var mymap = new AMap.Map('map_content', {
		        center: orign,
		        zoom: 10
		    });
		   
		   	for(var index = 0;index < 5; index++){
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
			
	}
})