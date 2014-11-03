// UMD communicator
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['radio'], factory);
    } else if (typeof exports === 'object') {
        // Node(commonjs)
        module.exports = factory(require('b'));
    } else {
        // Browser globals (root is window)
        root.communicator = factory(root.b);
    }
}(this, function ( radio ) {

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
