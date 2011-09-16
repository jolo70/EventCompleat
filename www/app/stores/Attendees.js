app.stores.Attendees = new Ext.data.Store({
	model		: 'app.models.Attendees',
	autoLoad	: true,
	data		: [
		  {id: '1', first_name: "Jose", last_name: "Lopez"},
		  {id: '2', first_name: "John", last_name: "Smith"}
    ]	
});