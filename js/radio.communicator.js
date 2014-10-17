define([
	"radio"
],function( Radio ) {

		var Communicator = Marionette.Controller.extend({
			initialize: function( options ) {
				this.channels = {};
			},

			// creates a new channel
			_createChannel: function( channel ){
				this.channels[ channel ] = Radio.channel( channel );
			},

			// gets a channel
			getChannel: function( channel ){
				if( !this.channels[ channel ] ) {
					this._createChannel( channel );
				}
				return this.channels[ channel ];
			}
		});

		return new Communicator();
	});