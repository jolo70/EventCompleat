app.controllers.EventDetail = new Ext.Controller({
	back	: function(options) {
		app.views.viewport.setActiveItem(app.views.eventsList, options.animation);
	}
});