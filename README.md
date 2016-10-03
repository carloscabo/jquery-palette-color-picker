# JQuery Palette Color Picker
JS component to pick colors from a predefined / restricted palette. <mark>Take a look to the `demo.html` included in this repository to see it in action.</mark>

![Snapshot](https://raw.githubusercontent.com/carloscabo/jquery-palette-color-picker/master/img/snapshot.png)

[Watch the demo included in the repo](https://htmlpreview.github.io/?https://raw.githubusercontent.com/carloscabo/jquery-palette-color-picker/master/demo.html)

# Requirements

`JQuery 1.7+`  
`palette-color-picker.js`  
`palette-color-picker.css / scss`

# Basic usage

Create a `<input type="text" name="UNIQUE_NAME">` in your `<html>` document. The `name` attribute is used to **bind the color picker to the input**, so its recommended to be **unique** if you have several inputs with the same name, **all of them will change simultaneously when user picks a color**.

Call `.paletteColorPicker()` over the input element.
```javascript
$(document).ready(function(){
  $('[name="UNIQUE_NAME"]').paletteColorPicker();
  // You can use something like...
  // $('[data-palette]').paletteColorPicker();
});
```

# Color data
The color options for the picker are automatically get from the `data-palette` attribute. You can define the colors as an array of **string values**.
````html
<!-- Array of strings -->
<input type="text" name="unique-name-2" data-palette='["#0F8DFC","rgba(135,1,101)","#F00285","hsla(190,41%,95%,1)","#94B77E","#4C060A","#053F32","#ED8074","#788364"]' value="#053F32">
````

Alternativelly you can use an **array of objects** in **key: value pairs**. If you set the data this way, the keys will be used as value in the `input` field, this is useful if you want to work with class names... or strings representing the colors instead the color value itself.

````html
<!-- Array of objects -->
<input type="text" name="unique-name-1" data-palette='[{"primary": "#E91E63"},{"primary_dark": "#C2185B"},{"primary_light": "#F8BBD0"},{"accent": "#CDDC39"},{"primary_text": "#212121"},{"secondary_text": "#727272"},{"divider": "#B6B6B6"}]' value="primary">
````

# Color data on plugin initialization
Additionally you can set the color palette in the options for the plugin initialization, doing so if `data-palette` attribute is present **will be ignored**.
```javascript
// Basic usage, array of color values
$(document).ready(function(){
  $('[name="UNIQUE_NAME"]').paletteColorPicker({
    colors: ["#0F8DFC","rgba(135,1,101,1)","#F00285","hsla(190,41%,95%,1)"]
  });
});
```

# All available settings
```javascript
$(document).ready(function(){
  // Advanced exacmple
  $('[name="UNIQUE_NAME"]').paletteColorPicker({
    // Color in { key: value } format
    colors: [
      {"primary": "#E91E63"},
      {"primary_dark": "#C2185B"},
      {"primary_light": "#F8BBD0"},
      {"accent": "#CDDC39"},
      {"primary_text": "#212121"},
      {"secondary_text": "#727272"},
      {"divider": "#B6B6B6"}
    ],
    // Add custom class to the picker
    custom_class: 'double',
    // Force the position of picker's bubble
    position: 'downside', // default -> 'upside'
    // Where is inserted the color picker's button, related to the input
    insert: 'after', // default -> 'before'
    // Don't add clear_btn
    clear_btn: 'last', // null -> without clear button, default -> 'first'
    // Timeout for the picker's fade out in ms
    timeout: 2000 // default -> 2000
  });
});
```

# Destroy instance of paletteColorPicker

```javascript
$( input_element ).data('paletteColorPickerPlugin').destroy();
```

# Clear

Clear current control and value of related input.

```javascript
$( input_element ).data('paletteColorPickerPlugin').clear();
```

# Reset to inital state

Resets the color picker (and its related input field) to the initial value it had when it was initialized.

```javascript
$( input_element ).data('paletteColorPickerPlugin').reset();
```

# Changelog
* V.1.03 (2016/10/03) Added option to **disable clear button**, added methods to **reset** and **clear** plugin
* V.1.02 (2016/06/08) Improved iOS / Android click / touch behaviour
