define([
  "appConfig",
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
			console.log( "handleRequest" );
			// publish event via communivator
		}
	});
});