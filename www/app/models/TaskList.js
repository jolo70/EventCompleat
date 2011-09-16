app.models.TaskList = Ext.regModel("app.models.TaskList", {
	fields: [
		{name: 'id', type: 'int'},
		{name: 'tli_name', type: 'string'},
		{name: 'tli_description', type: 'string'},
		{name: 'tli_location', type: 'string'},
		{name: 'tli_owner', type: 'string'},		
		{name: 'event_type_id', type: 'string'},
		{name: 'event_style_id', type: 'string'},
		{name: 'date', type: 'date'},
		{name: 'cost', type: 'float'}			
	]
});