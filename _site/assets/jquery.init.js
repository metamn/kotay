jQuery(document).ready(function() {

  // Rotate background images
  jQuery(".startpage #background-image img").each(function(index) {
    jQuery(this).hide();
    jQuery(this).delay(6000 * index).fadeOut('slow').fadeIn('slow');
  }); 
  
  // Click on background image and show menu
  jQuery("footer nav a").click(function(event) {
    event.preventDefault();    
    alert('a');
        
    jQuery('.arrow-right').animate({
      borderLeftWidth: "70em",
      borderTopWidth: "70em",
      borderRightWidth: "70em",
      borderBottomWidth: "70em",
      top: "-80em"
    }, 1500 );
    
    jQuery('.arrow-left').animate({
      borderLeftWidth: "60em",
      borderTopWidth: "60em",
      borderRightWidth: "60em",
      borderBottomWidth: "60em",
      bottom: "-80em",
      left: "35%"
    }, 1500 );

  });
  
});
