define([
  "jquery",
  "backbone",
  "marionette",
  "radio",
  "underscore",
  "appConfig",
  "js/views/item/publisherItemView",
  "js/views/item/subscriberItemView",
  "js/views/item/commanderItemView",
  "js/views/item/complierItemView",
  "js/views/item/requesterItemView",
  "js/views/item/replierItemView"

], function( appConfig, PublisherItemView, SubscriberItemView, CommanderItemView, ComplierItemView, RequesterItemView, ReplierItemView ){

    // get the .publisher elements and build a view for each
    $( ".publisher" ).each( function(){
        new PublisherItemView({
          el: $(this)
        });
    });

    // get the .subscriber elements and build a view for each
    $( ".subscriber" ).each( function(){
      new SubscriberItemView({
        el: $(this)
      });
    });


    // get the command elements and build a view for each
    $( ".commander" ).each( function(){
        new CommanderItemView({
          el: $(this)
        });
    });


    // get the comply elements and build a view for each
    $( ".complier" ).each( function(){
        new ComplierItemView({
          el: $(this) // needs a model
        });
    });
    

    // get the requester elements and build a view for each
    $( ".requester" ).each( function(){
        new RequesterItemView({
          el: $(this)
        });
    });


    // get the replier elements and build a view for each
    $( ".replier" ).each( function(){
        new ReplierItemView({
          el: $(this)
        });
    });
});



