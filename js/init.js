require.config({

  // Initialize the application with the main application file.
  deps: ["js/main"],

  baseUrl: "/",

  paths: {
    "jquery": "bower_components/jquery/dist/jquery",
    "backbone": "bower_components/backbone/backbone",
    "radio": "bower_components/backbone.radio/build/backbone.radio",
    "marionette": "bower_components/marionette/lib/backbone.marionette",
    "underscore": "bower_components/underscore/underscore"
  }

});
