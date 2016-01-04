$(document).ready(function() {
  // La magia aquí

  var $cps = $('[data-colorpicker-from-palette]');

  $cps.each(function(idx, el) {

    var
      $el = $(el),
      colors = $el.data('palette'),
      current_color = $el.val(),
      target = $el.attr('name'),
      $bubble = $('<div>')
                 .addClass('data-colorpicker-from-palette-bubble')
                 .attr('data-target', target);

      console.log(colors);

      // Append clear
      $('<span>').addClass('swatch clear').appendTo( $bubble );

      // test insert
      $.each( colors, function( idx, obj ) {
        var
          key = Object.keys( obj ),
          col = obj[key],
          $sw = $('<span>').addClass('swatch')
            .attr('title', key)
            .attr('data-color', col)
            .css('background-color', col);

        if ( col === current_color ) { $sw.addClass('active'); }

        $sw.appendTo( $bubble );
      });

      $bubble.insertBefore($el);

  });

  $(document).on('click', '.data-colorpicker-from-palette-bubble span.swatch', function(e) {
    e.preventDefault();
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');

    var color = $(this).attr('data-color');
    if ( typeof color === typeof undefined || color === false ) {
      color = '';
    }
    $( '[name="'+$(this).parent().attr('data-target')+'"]' ).val( color );

  });

});
