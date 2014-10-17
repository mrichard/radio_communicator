define([
  "appConfig",
  "js/radio.communicator"
], function( appConfig, Communicator ){

    return Marionette.ItemView.extend({

		initialize: function() {
			console.log( "Complier ItemView initialized" );
			Communicator.getChannel( appConfig.channels.GLOBAL ).comply( appConfig.events.TEST_COMMAND, _.bind( this.handleComply, this));
		},
		handleComply: function(){
			
		}
	});
});