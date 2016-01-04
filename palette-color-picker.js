(function($) {

  $.paletteColorPicker = function( el, options ) {
    var
      ns = 'palette-color-picker',
      plugin = this,
      $el = $(el);
  };

})(jQuery);
  // La magia aquí

  var
    ns = 'palette-color-picker', // Namespace
    $cps = $('['+ns+']');

  $cps.each(function(idx, el) {

    var
      $el = $(el),
      colors = $el.data('palette'),
      current_color = $el.val(),
      target = $el.attr('name'),
      $button = $('<div>')
                  .addClass(ns+'-button')
                  .attr('data-target', target),
      $bubble = $('<div>')
                  .addClass(ns+'-bubble');

      // Append clear
      $('<span>').addClass('swatch clear').attr('title', 'Clear selection').appendTo( $bubble );

      // test insert
      $.each( colors, function( idx, obj ) {
        var
          key = Object.keys( obj ),
          col = obj[key],
          $sw = $('<span>').addClass('swatch')
            .attr('title', key)
            .attr('data-color', col)
            .css('background-color', col);

        if ( col === current_color ) {
          $sw.addClass('active');
          $button.css('background', col);
        }

        $sw.appendTo( $bubble );
      });

      $button.append( $bubble ).insertBefore( $el );

  });

  // Set / clear selected color
  $(document).on('click', '.'+ns+'-bubble span.swatch', function(e) {
    e.stopPropagation();
    var
      color = $( this ).attr('data-color'),
      $button = $( this ).closest( '.'+ns+'-button' ),
      $bubble = $( this ).closest( '.'+ns+'-bubble' );

    $bubble.find('.active').removeClass('active');
    $(this).not('.clear').addClass('active');

    // Set background on color
    if ( typeof color === typeof undefined || color === false ) {
      $button.removeAttr('style');
      color = '';
    } else {
      $button.css('background', color);
    }
    $( '[name="'+$button.attr('data-target')+'"]' ).val( color );
    $bubble.hide();
  });

  // Opens
  $(document).on('click', '.'+ns+'-button', function() {
    $( this ).find('.'+ns+'-bubble').toggle();
  });

});

// Auto-init over elements with
$(function() {
  $('[data-palette-colorpicker]').paletteColorPicker();
});
