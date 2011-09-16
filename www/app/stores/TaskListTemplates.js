app.stores.TaskListTemplates = new Ext.data.Store({
	model		: 'app.models.TaskList',
	autoLoad	: true,
	data		: [
		//{tli_name: 'Test', tli_description: 'Test Description'}
		  //{id:'', tli_name: '', tli_description: '', tli_location: '', tli_owner: '', event_type_id: '', event_style_id: ''},
		  
		  {id:'1', tli_name: 'Cake', tli_description: 'Here is an area where you have lots of options. You can have a cake decorated and shaped to go with your theme, or a traditional cake just using the theme colors. You can have cake and ice cream or an ice cream cake. This is an area where your creativity can really come out.', tli_location: 'The Bakery', tli_owner: 'Jose Lopez', event_type_id: '1', event_style_id: '1', date: '8/28/2011 12:00', cost: '550'},
		  {id:'2', tli_name: 'Decorations', tli_description: 'You need decorations to put on the tables, along the walls, and around the room.', tli_location: '', tli_owner: 'Jose Lopez', event_type_id: '1', event_style_id: '1', date: '9/14/2011 1:00', cost: '100'},
		  {id:'3', tli_name: 'Food', tli_description: 'If the party is scheduled during or close to lunch or dinner, serving food is essential. During a party the children are usually having so much fun with each other that serving a "normal" meal is not only unnecessary, but also unneeded. The children want to get back to the party activities as soon as possible; so pizza, pigs in a blanket, or sandwiches and chips are usually perfect.', tli_location: 'Really Nice Place!', tli_owner: 'Jose Lopez', event_type_id: '1', event_style_id: '1', date: '8/28/2011 12:00', cost: '650'},
		  {id:'4', tli_name: 'Goodie Bags', tli_description: 'Goodie bags are something the children take home to remind them how much fun they had at the party, so be sure the items inside are fun too!', tli_location: '', tli_owner: 'Jose Lopez', event_type_id: '1', event_style_id: '1', date: '9/28/2011 12:00', cost: '100'},
		  {id:'5', tli_name: 'Games & Activities', tli_description: 'Activities can range from coloring with crayons to a Ferris Wheel in your backyard.', tli_location: '', tli_owner: '', event_type_id: '1', event_style_id: '1', date: '9/11/2011 12:00', cost: '75'},
		  {id:'6', tli_name: 'Entertainment', tli_description: 'The best entertainers are booked far in advance, so if you send out the invitations and then call the entertainers, you may not be able to get them on the date and time you need.', tli_location: '', tli_owner: '', event_type_id: '1', event_style_id: '1', date: '9/12/2011 10:00', cost: '300'}
		  
    ],
	 proxy: {
        type: 'localstorage',
        id: 'event-compleat-localstore'
	}
});