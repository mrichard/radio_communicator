// UMD communicator
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([ 'backbone', 'marionette', 'radio'], factory);
    } else if (typeof exports === 'object') {
        // Node(commonjs)
        module.exports = factory( require('backbone'), require('marionette'), require('radio') );
    } else {
        // Browser globals (root is window)
        root.communicator = factory( root.backbone, root.marionette, root.radio );
    }
}(this, function ( Backbone, Marionette, Radio ) {

	// communication controller
	// wraps Radio
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
}));
