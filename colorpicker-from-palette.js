$(document).ready(function() {
  // La magia aquí

  var $cps = $('[data-colorpicker-from-palette]');

  $cps.each(function(idx, el) {

    var
      target = $(el).attr('name'),
      $bubble = $('<div>')
                 .addClass('data-colorpicker-from-palette-bubble')
                 .attr('data-target', target);


      // test insert
      var num = 12;
      for (var i = 0; i < num; i++) {
        $bubble.append(
          $('<span>').addClass('swatch').attr('data-color', '#f00')
        );
      }

      if ( num < 6) { $bubble.addClass('single-line'); }

      $bubble.insertBefore($(el));

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
