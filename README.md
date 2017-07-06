# JQuery Palette Color Picker v1.13
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
    timeout: 2000, // default -> 2000
    // Forces closin all bubbles that are open before opening the current one
    close_all_but_this: false, // default is false
    // Sets the input's background color to the selected one on click
    // seems that some users find this useful ;)
    set_background: false, // default is false

    // Events
    // Callback on bubbl show
    onbeforeshow_callback: function( what ) {
      console.log(what);
    },

    // Callback on change value
    onchange_callback: function( clicked_color ) {
      console.log(clicked_color);
    }
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

# Callback functions

Define your own callback function that will be fired when a color swatch its clicked. Returns the color swatch item itlsef.

```javascript
$( input_element ).paletteColorPicker({
  onchange_callback: function ( clicked_color ) {
    console.log( 'onchange_callback!!!' );
    console.log( $(clicked_color) );
    console.log( clicked_color );
  }
});
```

There is an aditional callback is fired **right before the color's bubble is shwon**.

```javascript
$( input_element ).paletteColorPicker({
  onbeforeshow_callback: function ( color_picker_button ) {
    console.log( 'onbeforeshow_callback!!!' );
    console.log( $(color_picker_button) );
    console.log( color_picker_button );
  }
});
```

# Reload the value after it has been changed programatically

The new color should exists in the initial options otherwise the selection will be reset to initial value.

```javascript
$( input_element ).data('paletteColorPickerPlugin').reload();
```

# Changelog
* V.1.13 (2017/07/06) New features
  * [eafarooqi](https://github.com/eafarooqi) Bugfix
* V.1.12 (2017/06/27) New features
  * close_all_but_this
  * onbeforeshow_callback()
  * Style to force bubble to be shown on left side
  * More samples
* V.1.10 (2017/06/27) Some improvements by several people, thx!
  * [slavede](https://github.com/slavede) Added bower.json
  * [eafarooqi](https://github.com/eafarooqi) Reload value after programatically update
  * [wirthm](https://github.com/wirthm) Allow touch and click events simultaneously
  * [evalibantova](https://github.com/) Callback feature and better closing
  * [kleber099](https://github.com/kleber099) Add option of set background color select in input
  * [Desprit](https://github.com/Desprit) Fix rgba typo and comma
* V.1.03 (2016/10/03) Added option to **disable clear button**, added methods to **reset** and **clear** plugin
* V.1.02 (2016/06/08) Improved iOS / Android click / touch behaviour
