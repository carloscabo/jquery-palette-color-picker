# JQuery Palette Color Picker
JS component to pick colors from a predefined / restricted palette.

# Requirements

`JQuery 1.7+`  
`palette-color-picker.js`  
`palette-color-picker.css / scss`

# Basic usage

Create a `<input type="text" name="UNIQUE_NAME">` in your `<html>` document. The `name` attribute is used to **bind the color picker to the input**, so its recommended to be **unique** if you have several inputs with the same name, all of them will change simultaneously when user picks a color.

Call `.paletteColorPicker()` over the input element.
```javascript
$(document).ready(function(){
  $('[name="UNIQUE_NAME"]').paletteColorPicker();
  // Also you can use somthing like
  // $('[data-palette]').paletteColorPicker();
});
```

# Color data
The color options for the picker are automatically get from the `data-palette` attribute. You can define the colors as an array of **key: value** objects.
````html
<!-- Array of objects -->
<input type="text" name="unique-name-1" data-palette='[{"dieximohopum":"#0F8DFC"},{"quidermuroxtca":"rgba(135,1,101)"},{"pink":"#F00285"},{"unmeranelche":"hsla(190, 41%, 95%, 1)"},{"canrilanamhe":"#94B77E"},{"roefincocurre":"#4C060A"},{"goesubkalabi":"#053F32"},{"siospokarexin":"#ED8074"},{"In The Thicket\u2666": "#788364"}]' value="#4C060A">
````
Also it can be done as an **array of strings**.
````html
<!-- Array of strings -->
<input type="text" name="unique-name-2" data-palette='["#0F8DFC","rgba(135,1,101)","#F00285","hsla(190,41%,95%,1)","#94B77E","#4C060A","#053F32","#ED8074","#788364"]' value="#0F8DFC">
````

# Color data on plugin initialization
Additionally you can set the color palette on plugin initialization, doing so if `data-palette` attribute is present will be ignored.
```javascript
$(document).ready(function(){
  $('[name="UNIQUE_NAME"]').paletteColorPicker({
    colors: ["#0F8DFC","rgba(135,1,101)","#F00285","hsla(190,41%,95%,1)"]
  });
});
```

# All available settings
```javascript
$(document).ready(function(){
  $('[name="UNIQUE_NAME"]').paletteColorPicker({
    colors: ["#0F8DFC","#ED8074","#788364"],
    // Add custom class to the picker
    custom_class: 'double',
    // Force the position of picker's bubble
    position: 'downside', // default -> 'upside'
    // Where is inserted the color picker's button, related to the input
    insert: 'after', // default -> 'before'
    // Clear button on last position
    clear_btn: 'last' // default -> 'first'
    // Timeout for the picker's fade out in ms
    timeout: 2000 // default -> 2000
  });
});
```

# TO-DO
- Destroy picker
- Refresh / update picker
