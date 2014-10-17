define([
  "js/appConfig",
  "js/radio.communicator"
], function( appConfig, Communicator ){

    return Marionette.ItemView.extend({

		initialize: function() {
			console.log( "PublisherItemView initialized" );
		},

		events: {
			"click": "handlePublish"
		},

		handlePublish: function( e ){
			e.preventDefault();
			Communicator.getChannel( appConfig.channels.GLOBAL ).trigger( appConfig.events.TEST_PUBLISH );
		}
	});
});