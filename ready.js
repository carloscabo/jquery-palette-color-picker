$(document).ready(function(){
  //La magia aquí

  // Sample 1
  $('[name="unique-name-1"]').paletteColorPicker();

  // Sample 2
  $('[name="duplicated-name-2"]').paletteColorPicker({
    clear_btn: 'last'
  });

  // Sample 3
  $('#unique-id').paletteColorPicker({
    custom_class: 'double',
    insert: 'after' // default -> 'before'
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


});
