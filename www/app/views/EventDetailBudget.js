app.views.EventDetailBudget = Ext.extend(Ext.Panel, {
	initComponent: function() {
	  var aList, totalBar;
	  aList = {
		 xtype		: 'list',
		 layout		: 'fit',
		 emptyText	: 'No records found.',
		 store : app.stores.TaskListTemplates,
		 itemTpl: [
			'<tpl for".">',
			'	<div>',
			'		<table cellpadding=0 cellspacing=0 border=0 width=100%>',
			'			<tr><td class="li_name">{tli_name}</td><td align=right class="li_name">${cost}</td></tr>',
			'		</table> ',					
			'	</div>',
			'</tpl>'
		 ]
	  };
	 
	  totalBar = {
		  xtype	: 'toolbar', 
        title	: "",
		  dock	: 'bottom',
		  ui		: 'light',
		  layout	: 'fit',
		  items	: [ 
				{text: 'Total: ' + usMoney(String(app.stores.TaskListTemplates.sum('cost'))), style: 'font-size: 20pt;', ui: 'plain', iconMask: false},
				{xtype: 'spacer'},
				{
					iconCls: 'piechart', 
					ui: 'confirm', 
					iconMask: true,
					handler: function () {
						this.setActiveItem('budgetChart', {type: 'slide', direction: 'left'});
					
					}
				}
		  ]
	  };
	  
	  Ext.apply(this, {
		 id			: 'budget',
		 iconCls		: 'budget',
		 title		: 'Budget',
		 layout		: 'fit',
		 badgeText	: "",//app.stores.TaskListTemplates.getCount(),
		 dockedItems: [totalBar],
		 items		: [aList]
		 
		
	  }); //Ext.Apply
		app.stores.TaskListTemplates.sort('date', 'ASC');
	   app.views.EventDetailBudget.superclass.initComponent.apply(this, arguments);  
	}//initComponent
});

Ext.reg('app.views.EventDetailBudget', app.views.EventDetailBudget);	  