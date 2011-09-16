app.stores.EventTypes = new Ext.data.Store({
	model		: 'app.models.EventTypes',
	autoLoad	: true,
	data		: [
		  {id: '1', type: 'Birthday Party'},
		  {id: '2', type: 'Wedding'},
		  {id: '3', type: 'LAN Party'}
    ]	
});