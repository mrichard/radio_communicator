define([
  "appConfig",
  "js/radio.communicator"
], function( appConfig, Communicator ){

    return Marionette.ItemView.extend({

		initialize: function() {
			console.log( "CommanderItemView initialized" );
		},

		events: {
			"click": "handleComand"
		},

		handleComand: function( e ){
			e.preventDefault();
			console.log( "handleComand" );
			Communicator.getChannel( appConfig.channels.GLOBAL ).command( appConfig.events.TEST_COMMAND );
		}
	});
});