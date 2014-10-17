define([
	"underscore"
	],

	function( _ ) {

		var page = document.location.pathname;

		// list of pageConfigurations
		var pageConfigurations = [
		];

		// list of global configurations
		var globalConfigurations = {
			channels: {
				GLOBAL: "GLOBAL"
			},
			events: {
				TEST_PUBLISH: "TEST_PUBLISH",
				TEST_REQUEST: "TEST_REQUEST",
				TEST_COMMAND: "TEST_COMMAND",
				
			}
			
		};

		var returnValue = {};

		// loop through each page config and add it to the returnValue if matches
		_.each( pageConfigurations, function( config ){

			if( config.match.test( page ) ) {
				_.extend( returnValue, config.configuration);
			}
		});

		// merge global and page configs
		return  _.extend({}, globalConfigurations, returnValue);
});
