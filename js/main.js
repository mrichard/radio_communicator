define([
  "jquery",
  "js/views/item/publisherItemView",
  "js/views/item/subscriberItemView",
  "js/views/item/commanderItemView",
  "js/views/item/complierItemView",
  "js/views/item/requesterItemView",
  "js/views/item/replierItemView"

], function( $, PublisherItemView, SubscriberItemView, CommanderItemView, ComplierItemView, RequesterItemView, ReplierItemView ){

    // get the .publisher elements and build a view for each
    $( ".publisher" ).each( function( index, element ){
      console.log( "in each" );
        new PublisherItemView({
          el: $(this)
        });
    });

    // get the .subscriber elements and build a view for each
    $( ".subscriber" ).each( function( index, element ){
      new SubscriberItemView({
        el: $(this)
      });
    });


    // get the command elements and build a view for each
    $( ".commander" ).each( function( index, element ){
        new CommanderItemView({
          el: $(this)
        });
    });


    // get the comply elements and build a view for each
    $( ".complier" ).each( function( index, element ){
        new ComplierItemView({
          el: $(this)
        });
    });
    

    // get the requester elements and build a view for each
    $( ".requester" ).each( function( index, element ){
        new RequesterItemView({
          el: $(this)
        });
    });


    // get the replier elements and build a view for each
    $( ".replier" ).each( function( index, element ){
        new ReplierItemView({
          el: $(this)
        });
    });
});



