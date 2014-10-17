define([
  "js/appConfig",
  "js/radio.communicator"
], function( appConfig, Communicator ){

    return Marionette.ItemView.extend({

		initialize: function() {
			console.log( "Replier ItemView initialized" );
			this.counter = 0;
			Communicator.getChannel( appConfig.channels.GLOBAL ).reply( appConfig.events.TEST_REQUEST, _.bind( this.handleReply, this));
		},

		handleReply: function(){

			return ++this.counter;
		}
	});
});