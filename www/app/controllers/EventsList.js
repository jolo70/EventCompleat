app.controllers.EventsList = new Ext.Controller({
	show	: function(options){
		app.views.viewport.setActiveItem(app.views.eventDetail, options.animation);
	},	
	add		: function(options){
		app.views.viewport.setActiveItem(app.views.eventForm, options.animation);
	}
});

