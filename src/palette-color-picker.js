(function($) {
  // La magia aquí

  // Publin core
  $.paletteColorPicker = function( el, options ) {
    var
      ns = 'palette-color-picker', // Base attr / class
      $el = $(el);
      plugin = this,
      timer = null,
      colors = $el.data(ns),
      current_color = $el.val(),
      target = $el.attr('name'),
      $button = $('<div>')
                  .addClass(ns+'-button')
                  .attr('data-target', target),
      $bubble = $('<div>')
                  .addClass(ns+'-bubble'),
      // Final settings will be stored here
      plugin.settings = {},
      // Default settings
      defaults = {
        size: null,
        position: 'upside', // downside
        insert: 'before' // default
      };

    // Init
    plugin.init = function() {
      // Extand settings with user options
      plugin.settings = $.extend({}, defaults, options);

      // Capitalize position
      plugin.settings.insert = plugin.settings.insert.charAt(0).toUpperCase() + plugin.settings.insert.slice(1);

      // Add custom class / size
      if (plugin.settings.size) {
        $bubble.addClass(plugin.settings.size);
      }

      // Clear button
      $('<span>').addClass('swatch clear').attr('title', 'Clear selection').appendTo( $bubble );

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

      // Public
      plugin.destroy = function() {
        // code goes here
      };

      // Events
      // Simple click
      $button.append( $bubble ).on('click', function(){
        var $b = $( this );
        $b.find('.'+ns+'-bubble').fadeToggle();
        clearTimeout(plugin.timer);
        plugin.timer = setTimeout(function(){
          $b.trigger('pcp.fadeout');
        }, 2000);
      })
      // Fade timer
      .on('pcp.fadeout', function() {
        $( this ).find('.'+ns+'-bubble').fadeOut();
      })
      // Enter bubble
      .on('mouseenter', '.'+ns+'-bubble', function() {
        clearTimeout(plugin.timer);
      })
      // Leave bubble
      .on('mouseleave', '.'+ns+'-bubble', function() {
        plugin.timer = setTimeout(function(){
          $button.trigger('pcp.fadeout');
        }, 2000);
      })
      // Click on swatches
      .on('click', 'span.swatch', function(e){
        var
          color = $( this ).attr('data-color'),
          $button = $( this ).closest( '.'+ns+'-button' ),
          $bubble = $( this ).closest( '.'+ns+'-bubble' );

        $bubble.find('.active').removeClass('active');

        // Set background on color
        // User clicked in the clear swatch
        if ( $(e.target).is('.clear') ) {
          $button.removeAttr('style');
          color = '';
        } else {
          $(this).addClass('active');
          $button.css('background', color);
        }
        $( '[name="'+$button.attr('data-target')+'"]' ).val( color );
      })['insert'+plugin.settings.insert]( $el );

      // Upside / downside, default is upside
      if ( plugin.settings.position === 'downside' || ($el.offset().top) + 20 < $bubble.outerHeight() ) {
        $bubble.addClass('downside');
      }

    };

    // Start
    plugin.init();
  };

  // add the plugin to the jQuery.fn object
  $.fn.paletteColorPicker = function(options) {
    return this.each(function() {
      if (typeof $(this).data('paletteColorPickerPlugin') === 'undefined') {
        $(this).data('paletteColorPickerPlugin', new $.paletteColorPicker(this, options));
      }
    });
  };

})(jQuery);

// Auto-init over elements with
$(function() {
  $('[data-palette-color-picker]').paletteColorPicker();
});
