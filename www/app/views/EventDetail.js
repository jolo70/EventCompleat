app.views.EventDetail = Ext.extend(Ext.TabPanel, {
	 tabBar: {
			dock	: 'bottom',
			layout	: {pack: 'center'},
			ui		: 'light'
	},
	initComponent: function() {
     var titlebar;
	  
	  titleBar = {
        xtype	: 'toolbar',
        title	: "Birthday Party",
		  dock	: 'top',
		  layout: 'auto',
		  items	: [ 
				{
					text		: 'Back', 
					ui   		: 'back', 
					iconMask	: true,
					handler 	: function(){
						Ext.dispatch({
							controller	: app.controllers.EventDetail,
							action		: 'back',
							id			: 1,
							animation	: {
									type		: 'slide',
									direction	: 'right'
							}		
						});
					}
				},
				{xtype: 'spacer'},
				{
					iconCls	: 'add', 
					ui		: 'plain', 
					iconMask: true
				}
		  ]
     };
	  
	  Ext.apply(this, {
		  id					: 'app.views.EventDetail',
		  fullscreen			: true,
		  layout				: 'card',
		  cardSwitchAnimation	: {type: 'fade', duration: '500'},
		  dockedItems			: [titleBar],
		  defaults		: {
					iconMask	: true, 
					ui			: 'plain',
					scroll		: 'vertical',
					fullscreen	: true,
										
				},
		  items			: [

			app.views.EventDetailTaskList,
			app.views.EventDetailAttendees,
			app.views.EventDetailBudget,
			app.views.EventDetailBudgetChart,																							
				{id: 'more', title: 'More', iconCls: 'more'}
		  
		  ]
	  });	
        app.views.EventDetail.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('app.views.EventDetail', app.views.EventDetail);
