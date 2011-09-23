app.views.Viewport = Ext.extend(Ext.Panel, {
	id					: app.views.viewport,
    fullscreen			: true,
	//cls				: 'HomePage',
    layout				: 'card',
    cardSwitchAnimation	: 'fade',
    initComponent: function() {
        //no need to apply to app.views because registered in every file
		//put instances of cards into viewport
		Ext.apply(this, {
		 	id		: 'app.views.Viewport',
			items	: [
				{xtype: 'app.views.EventsList', id: 'app.views.EventsList'},
				{xtype: 'app.views.EventDetail', id: 'app.views.EventDetail'},
				{xtype: 'app.views.EventForm', id: 'app.views.EventForm'},
				{xtype: 'app.views.EventDetailBudgetChart', id: 'app.views.EventDetailBudgetChart'}
			]
		 });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
Ext.reg('app.views.Viewport', app.views.Viewport);
