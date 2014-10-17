define([
  "appConfig",
  "js/radio.communicator"
], function( appConfig, Communicator ){

    return Marionette.ItemView.extend({

		initialize: function() {
			console.log( "Replier ItemView initialized" );
			// listen for publish events
		},
	});
});