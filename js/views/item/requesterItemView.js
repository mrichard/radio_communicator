define([
  "js/appConfig",
  "js/radio.communicator"
], function( appConfig, Communicator ){

    return Marionette.ItemView.extend({

		initialize: function() {
			console.log( "RequesterItemView initialized" );
		},

		events: {
			"click": "handleRequest"
		},

		handleRequest: function( e ){
			e.preventDefault();
			var count = Communicator.getChannel( appConfig.channels.GLOBAL ).request( appConfig.events.TEST_REQUEST );
			this.$el.text( this.$el.text() + " " + count );
		}
	});
});