app.views.EventsList = Ext.extend(Ext.Panel, {
	initComponent: function() {
     var addButton, titlebar, bottombar, aList;
	  
	  addButton = { 
			itemId		: 'addButton',
			iconCls		: 'add',
			iconMask	: true,
			ui			: 'plain',
			scope		: this,
			handler		: function () {
				
				Ext.dispatch({
					controller	: app.controllers.EventsList,
					action		: 'add',
					id			: 1,
					animation	: {
							type		: 'fade',
							duration	: '300'
					}		
				});	
			}
	  };
	  
	  titlebar = {
        xtype	: 'toolbar',
        title	: 'Events',
		  dock	: 'top',
		  layout: 'fit',
		  items	: [ { xtype: 'spacer' }, addButton ]
     };
	  
	  bottombar = {
			xtype 	: 'toolbar',
			dock	: 'bottom',
			layout	: 'hbox',
			ui		: 'light',
			items	: [
				{xtype: 'spacer'},
				//{Budget, ui: 'confirm', iconMask: true},
				//{iconCls: 'team', ui: 'confirm', iconMask: true},
				//{iconCls: 'team', ui: 'action', badgeText: '125', iconMask: true},
				{text: 'Settings', iconCls: 'settings', iconMask: true}		
			]
		};

	  aList = {
		xtype		: 'list',
		layout		: 'auto',
		emptyText	: 'No records found.',
		itemTpl		: '{action}',
        store		: app.stores.EventsList,
        onItemDisclosure : function (record) {
			Ext.dispatch({
				controller	: app.controllers.EventsList,
				action		: 'show',
				id			: 1,
				animation	: {
						type		: 'fade',
						duration	: '300'
				}		
			});
		}
		
	};
	Ext.apply(this, {
		id					: 'app.views.EventsList',
		layout				: 'card',
		fullscreen  		: true,
		cardSwitchAnimation	: 'fade',
		dockedItems			: [titlebar, bottombar],
		items				: [aList]
	});
	//app.stores.EventsList.load();
	//aList.show();
	    app.views.EventsList.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('app.views.EventsList', app.views.EventsList);
