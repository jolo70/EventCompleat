app.views.EventDetailBudgetChart = Ext.extend(Ext.Panel, {
	initComponent: function() {
	  var chartPanel;
	  
	  chartPanel = new Ext.chart.Panel({
			title			: 'Cost',
			//fullscreen	: true //creates a modal windows
			dockedItems	: [],
			items			: {
				cls			: 'pie1',
				theme			: 'Demo',
				store			: app.stores.TaskListTemplates,
				shadow		: true,
				animate		: true,
				insetPadding: 5,
				series		: [{
					type			: 'pie',
					field			: 'cost',
					showInLegend: true,
					highlight	: false,
					label			: {field: 'tli_name'}
				}],
			
			
			},
			
	  
	  });
	  
	  Ext.apply(this, {
		 id			: 'budgetChart',
		 iconCls		: 'piechart',
		 title		: 'Pie Chart',
		 layout		: 'fit',
		 badgeText	: "",
		 dockedItems: [],
		 items		: [chartPanel]
		 
		
	  }); //Ext.Apply
	   app.views.EventDetailBudgetChart.superclass.initComponent.apply(this, arguments);  
	}//initComponent
});

Ext.reg('app.views.EventDetailBudgetChart', app.views.EventDetailBudgetChart);	  