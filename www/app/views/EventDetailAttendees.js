app.views.EventDetailAttendees = Ext.extend(Ext.Panel, {
	initComponent: function() {
	  var aList;
	  
	  aList = {
		 xtype		: 'list',
		 
		 emptyText	: 'No records found.',
		 store : app.stores.Attendees,
		 itemTpl: [
			'<tpl for".">',
			'	<div class="tli">', //tli = Task List Item
			'		<div class="attendees_full_name">{first_name} {last_name}</div>',	
			'	</div>',
			'</tpl>'
		 ]
	  };
	  
	  
	  Ext.apply(this, {
		 id			: 'attendees', 
		 title		: 'Attendees', 
		 iconCls		: 'user_list',
		 layout		: 'fit', //required - allows for complete vertical-scroll
		 badgeText	: app.stores.Attendees.getCount(), 
		 items		: [aList]
		
	  }); //Ext.Apply
		
		var AttendeeCount = app.stores.Attendees.getCount();
		/*
		this.setBadge(parseInt(AttendeeCount));
		*/
	   app.views.EventDetailAttendees.superclass.initComponent.apply(this, arguments);  
	}//initComponent
});

Ext.reg('app.views.EventDetailAttendees', app.views.EventDetailAttendees);	  

