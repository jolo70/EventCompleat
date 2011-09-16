app.views.EventForm = Ext.extend(Ext.form.FormPanel, {
	initComponent: function() {
     var addButton, titlebar, bottombar, aFieldsetEventProfile, aFieldsetCommunication;
	  
	  titlebar = {
        xtype	: 'toolbar',
        title	: 'New Event',
		dock	: 'top',
		layout	: 'hbox',
		items	: [ 
			{
				text: 'Back', 
				ui: 'back',
				iconMask: true,
				handler: function () {
					Ext.dispatch({
						controller	: app.controllers.EventForm,
						action		: 'back',
						animation	: {
								type	: 'fade',
								duration: '200'
						}
						
					});
				}
			}
		]
     };
	  
	  bottombar = {
			xtype : 'toolbar',
			dock	: 'bottom',
			layout: 'hbox',
			ui		: 'light',
			items : [
				/*{text: 'Cancel', ui: 'decline', iconMask: true},*/
				{xtype: 'spacer'},
				{text: 'Reset', ui: 'action', iconMask: true},	
				{
					text: 'Save', 
					ui: 'confirm', 
					iconMask: true,
					handler: function(){
						Ext.dispatch({
							controller	: app.controllers.EventForm,
							action		: 'save',
							id			: 1,
							animation	: {
									type		: 'fade',
									duration	: '200'
							}
							
						});
					}
				}		
			]
			
	  };
	  
	  aFieldsetEventProfile = {
			xtype: 'fieldset',
         title: 'Event Profile',
         items: [
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Name',
						  placeHolder: 'My Big Event'
                },
                {
						  xtype: 'selectfield',
                    name : 'type',
                    label: 'Type',
                    valueField : 'type',
                    displayField : 'type',
                    store : app.stores.EventTypes
					 },
					 {
						  xtype: 'selectfield',
                    name : 'style',
                    label: 'Style',
                    valueField : 'style',
                    displayField : 'style',
                    store : app.stores.EventStyles
					 },
                {
                    xtype: 'datepickerfield',
                    name : 'date',
                    label: 'Date'
                },
					 {
                    xtype: 'textfield',
                    name : 'location',
                    label: 'Location',
						  placeHolder: '123 Main St., Somecity, Somewhere'     
                }
					 
            ]
	  
	  };
	  
	  aFieldsetCommunication = {
			xtype: 'fieldset',
         title: 'Communication',
         items: [{
					xtype: 'emailfield',
                   	name : 'email',
                   	label: 'Email',
                   	placeHolder: 'you@eventcompleat.com',
                   	useClearIcon: true
                },
                {
					xtype	: 'checkboxfield',
                   	name 	: 'chkTextMsg',
                   	label	: 'TextMsg',
                   	value	: true,
					nowrap	: true
				},{
					xtype: 'checkboxfield',
                   	name : 'chkFacebook',
                   	label: 'Facebook',
                   	value: true
                },{					
				   	xtype: 'checkboxfield',
                   	name : 'chkTwitter',
                   	label: 'Twitter',
                   	value: true
                }
					 
            ]
	  
	  };
		  Ext.apply(this, {
			id			: 'app.views.EventForm',
			scroll		: 'vertical',
			layout		: 'auto',
			cls			: 'HomePage',
			fullscreen  : true,
			dockedItems	: [titlebar, bottombar],
			items			: [aFieldsetEventProfile, aFieldsetCommunication]
		  });
        app.views.EventForm.superclass.initComponent.apply(this, arguments);
    }
});

//Ext.reg('app.views.EventForm', app.views.EventForm);
