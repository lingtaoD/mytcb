requirejs.config({
    baseUrl: '../lib',
    paths: {
        jquery:'jquery',
         backbone:'backbone',
        underscore:"underscore",
        shops:"../app/shops",
        url:"../app/config",
        router:"../app/router",
        myutil:'../app/myutil',
        getDatas:"../app/getDataServer",
        map:"../app/map",
    },
});

require(['router'],function(r){
	Backbone.history.start();
})