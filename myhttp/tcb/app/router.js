
define("router",['backbone','url','shops','jquery',"getDatas","map"],function(bb,conf,shops,$,getDatas,map){
	url1 = conf.shopsUrl + "/shops/pagacount/1";
	shops.listShop(url1,getDatas.getDataServer);
	$(".map_div").click(function(){//点击地图模式加载地图
		shops.listShop(url1,getDatas.getDataServer);
	})
	var router = Backbone.Router.extend({
	  routes: {
	    "help":                 "help",    // #help
	    "getshopdata/:m/:count": "getdata"
	  },

	  help: function() {
	    alert("help")
	  },

	  getdata: function(m,count) {
	  	var url = conf.shopsUrl + "/"+m+"/pagacount/" + count;
	   	shops.listShop(url,getDatas.getDataServer);
	   	//点击变色。
	   	$(".a2").click(function(e){
			//e.preventDefault();
			top_page.style.display = "inline-block";
			var page = $(this).text();
			//$.getJSON("http://localhost:3000/tcb/shops/pagacount/"+page+"?callback=?",pressJSON);

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
	  }

	});
	return new router();
})