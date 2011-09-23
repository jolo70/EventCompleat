app.controllers.EventsList = new Ext.Controller({
	show	: function(options){
		app.views.viewport.setActiveItem('app.views.EventDetail', options.animation);
	},	
	add		: function(options){
		app.views.viewport.setActiveItem('app.views.EventForm', options.animation);
	}
});

