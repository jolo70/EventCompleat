app.views.Viewport = Ext.extend(Ext.Panel, {
	id					: app.views.viewport,
    fullscreen			: true,
	cls					: 'HomePage',
    layout				: 'card',
    cardSwitchAnimation	: 'slide',
    initComponent: function() {
        //no need to apply to app.views because registered in every file
		Ext.apply(app.views, {
			eventsList : new app.views.EventsList(),
			eventDetail: new app.views.EventDetail(),
			eventForm : new app.views.EventForm()
			
		});
		//put instances of cards into viewport
		 Ext.apply(this, {
			items: [
				app.views.eventsList,
				app.views.eventDetail,
				app.views.eventForm
			]
		 });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});

//Ext.reg('app.views.Viewport', app.views.Viewport);
