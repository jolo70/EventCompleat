app.views.EventDetailBudgetChart = Ext.extend(Ext.Panel, {
	initComponent: function() {
	  var chartPanel, titleBar;
	  
	titleBar = {
		xtype	: 'toolbar',
		dock	: 'top',
		ui		: 'light',
		items	: [
			{
				text	: 'Back', 
				ui		: 'back', 
				iconMask: true,
				handler : function () {
					Ext.dispatch({
						controller	: app.controllers.EventDetailBudget,
						action		: 'back',
						id			: 1,
						animation	: {
							type		: 'fade',
							duration	: '300'
						}		
					});
				}
			}
		]
     };
	  
	  chartPanel = new Ext.chart.Panel({
			title			: 'Cost',
			dockedItems		: [titleBar],
			items			: {
				cls			: 'pie1',
				theme		: 'Demo',
				store		: app.stores.TaskListTemplates,
				shadow		: true,
				animate		: true,
				insetPadding: 5,
				series		: [{
					type		: 'pie',
					field		: 'cost',
					showInLegend: true,
					highlight	: false,
					label		: {field: 'tli_name'}
				}]
			}
	  });
	  
	  Ext.apply(this, {
		 id			: 'app.views.EventDetailBudgetChart',
		 //itemId		: 'app.views.EventDetailBudgetChart',
		 iconCls	: 'piechart',
		 title		: 'Pie Chart',
		 layout		: 'fit',
		 badgeText	: "",
		 style		: "background-color: white;",
		 dockedItems: [],
		 items		: [chartPanel]
		 
		
	  }); //Ext.Apply
	   app.views.EventDetailBudgetChart.superclass.initComponent.apply(this, arguments);  
	}//initComponent
});

Ext.reg('app.views.EventDetailBudgetChart', app.views.EventDetailBudgetChart);	  