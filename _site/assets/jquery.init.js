jQuery(document).ready(function() {

  // Rotate background images
  jQuery(".startpage #background-image img").each(function(index) {
    jQuery(this).hide();
    jQuery(this).delay(6000 * index).fadeOut('slow').fadeIn('slow');
  }); 
  
});
