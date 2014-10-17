define([
	"js/appConfig",
  	"js/radio.communicator"
], function( appConfig, Communicator ){

    return Marionette.ItemView.extend({

		initialize: function() {
			console.log( "Subscriber ItemView initialized" );
			Communicator.getChannel( appConfig.channels.GLOBAL ).on( appConfig.events.TEST_PUBLISH, _.bind( this.handlePublish, this));
		},
		handlePublish: function(){
			this.$el.text( 'DONE!' );
		}
	});
});