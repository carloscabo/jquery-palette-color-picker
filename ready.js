$(document).ready(function(){
  //La magia aquí

  // Sample 1
  $('[name="unique-name-1"]').paletteColorPicker({
    onbeforeshow_callback: function ( color_picker_button ) {
      console.log( 'onbeforeshow_callback!!!' );
      console.log( $(color_picker_button) );
      console.log( color_picker_button );
    },
    onchange_callback: function ( clicked_color ) {
      console.log( 'onchange_callback!!!' );
      console.log( $(clicked_color) );
      console.log( clicked_color );
    }
  });

  // Sample 2
  $('[name="duplicated-name-2"]').paletteColorPicker({
    clear_btn: 'last',
    close_all_but_this: true // Default is false
  });

  // Sample 3
  $('#unique-id-3').paletteColorPicker({
    custom_class: 'double',
    insert: 'after' // default -> 'before'
  });

  // Sample 3B
  $('#unique-id-3b').paletteColorPicker({
    custom_class: 'force-left',
    insert: 'after', // default -> 'before'
  });

  // Sample 4
  $('#unique-id-4').paletteColorPicker({
    colors: [
      {"primary": "#E91E63"},
      {"primary_dark": "#C2185B"},
      {"primary_light": "#F8BBD0"},
      {"accent": "#CDDC39"},
      {"primary_text": "#212121"},
      {"secondary_text": "#727272"},
      {"divider": "#B6B6B6"}
    ],
    position: 'downside', // default -> 'upside'
  });

  // Sample 5
  $('#unique-id-5').paletteColorPicker({
    custom_class: 'wide',
    clear_btn: 'last'
  });

  // Sample 6A
  $('#unique-id-6A').paletteColorPicker({
    colors: ['#D50000','#304FFE','#00B8D4','#69F0AE','#FFFF00','#F8BBD0'],
    clear_btn: null
  });
  // Reset sample 6A
  $('.clear-sample-6A').on('click', function(e) {
    e.preventDefault();
    $('#unique-id-6A').data('paletteColorPickerPlugin').reset();
  });

  // Sample 6B
  $('#unique-id-6B').paletteColorPicker({
    colors: ['#D50000','#304FFE','#00B8D4','#69F0AE','#FFFF00','#F8BBD0'],
    clear_btn: null
  });
  // Reset sample 6B
  $('.clear-sample-6B').on('click', function(e) {
    e.preventDefault();
    $('#unique-id-6B').data('paletteColorPickerPlugin').reset();
  });

  // Sample 7
  $('#unique-id-7').paletteColorPicker({
    colors: ['#D50000','#304FFE','#00B8D4','#69F0AE','#FFFF00','#F8BBD0'],
    clear_btn: null
  });

  // Reload sample 7 existing value
  $('.change-sample-7').on('click', function(e) {
    e.preventDefault();
    $('#unique-id-7').val("#69F0AE");
    $('#unique-id-7').data('paletteColorPickerPlugin').reload();
  });

  // Reload sample 7B non existing value
  $('.change-sample-7B').on('click', function(e) {
    e.preventDefault();
    $('#unique-id-7').val("#808080");
    $('#unique-id-7').data('paletteColorPickerPlugin').reload();
  });

  // Sample 8
  $('#unique-id-8').paletteColorPicker({
    set_background: true
  });
});
