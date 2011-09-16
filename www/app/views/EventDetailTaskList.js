app.views.EventDetailTaskList = Ext.extend(Ext.Panel, {
	initComponent: function() {
	  var aList;
	  aList = {
		 xtype		: 'list',
		 emptyText	: 'No records found.',
		 store : app.stores.TaskListTemplates,
		 itemTpl: [
			'<tpl for".">',
			'	<div class="tli">', 
			'		<div class="li_title">',
			'			<table cellpadding=0 cellspacing=0 border=0 width=100%>',
			'				<tr><td class="li_name">{tli_name}</td><td class="li_date">{date:date("M. d, Y g:i a")}</td></tr>',
			'			</table> ',
			'		</div>',			
			'		<div class="li_description">{tli_description}</div>',	
			'		<div>',
			'			<table cellpadding=0 cellspacing=0 border=0 width=100%>',
			'				<tr><td class="li_location">{tli_location}</td><td class="li_owner">{tli_owner}</td></tr>',
			'			</table> ',					
			'		</div>',
			'	</div>',
			'</tpl>'
		 ]
	  };
	  Ext.apply(this, {
		 id			: 'tasklist',
		 title		: 'Task List',
		 iconCls		: 'event-complete',
		 layout		: 'fit',
		 badgeText	: app.stores.TaskListTemplates.getCount(),
		 items		: [aList]
		
	  }); //Ext.Apply
	   app.stores.TaskListTemplates.sort('date', 'ASC');
	   app.views.EventDetailTaskList.superclass.initComponent.apply(this, arguments);  
	}//initComponent
});

Ext.reg('app.views.EventDetailTaskList', app.views.EventDetailTaskList);	  