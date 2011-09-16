app.views.EventDetailTimeLine = Ext.extend(Ext.Panel, {
	initComponent: function() {
	  var aList;
	  aList = {
		 xtype		: 'list',
		 emptyText	: 'No records found.',
		 store : app.stores.TaskListTemplates,
		 itemTpl: [
			'<tpl for".">',
			'	<div class="tli">', //tli = Task List Item
			'		<div class="li_title">{date:date("M. d, Y g:i a")}</div>',			
			'		<div class="li_name">{tli_name}</div>',
			'		<div class="li_location">{tli_location}</div>',
			'	</div>',
			'</tpl>'
		 ]
	  };
	  Ext.apply(this, {
		 id			: 'timeline',
		 iconCls		: 'calendar2',
		 title		: 'Time Line',
		 badgeText	: app.stores.TaskListTemplates.getCount(),
		 items		: [aList]
		
	  }); //Ext.Apply
		app.stores.TaskListTemplates.sort('date', 'ASC');
	   app.views.EventDetailTimeLine.superclass.initComponent.apply(this, arguments);  
	}//initComponent
});

Ext.reg('app.views.EventDetailTimeLine', app.views.EventDetailTimeLine);	  