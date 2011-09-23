app.controllers.EventForm = new Ext.Controller({
	save	: function(options){
		app.views.viewport.setActiveItem('app.views.EventsList', options.animation);
	},
	back	: function(options){
		//app.views.eventForm.hide();
		app.views.viewport.setActiveItem('app.views.EventsList', options.animation);
	}
});

