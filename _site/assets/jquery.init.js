jQuery(document).ready(function() {

  // Rotate background images
  jQuery(".startpage article img").each(function(index) {
    jQuery(this).hide();
    jQuery(this).delay(3000 * index).fadeIn(3000).fadeOut();
  });  
  
});
