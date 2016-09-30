define("shops",["myutil","jquery","url"],function(t,$,conf){
	console.log(conf.shopsUrl);

	return {
		listShop:function(url,fn){
			var result = null;
			$.ajax({
				type:"get",
				url:url,
				dataType:'text',
				// url:conf.shopsUrl + "/pagacount/1",
				success:function(data){
					fn(data);
				},
				error:function(err){
					//console.log(err);
				}
			})
		}
	}
})