# Modal
<img src="/_images/modal-main.png" width="250">

This template provides a basic modal in-app message with one button.

A close button (x) is provided in the upper right hand corner.  (Note: A close button action must always be included in your HTML to allow users to dismiss your in-app message. Ex: ```<a href="appboy://close">Close</a>```)

### Files included in folder

* `template.html` - html template.  This includes a main image (provided as a background image of the `.top-container`), header, message, and one button.
* `main.css` - main stylesheet to style your template.  (ex: change the transparency of the background, change button colors, fonts, size, etc)
* `light.svg` - svg used for the close button.  If you would like to use a darker colored close button, copy and paste the `dark.svg file` from [fullscreen-pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-pagination) and change the image source in `template.html (line 14)`.
* `background-dark-blue.png` - image used as a background image in the top half of the in-app message.  If you would like to use a different background image, remove this file from this folder, add the image of your choice, and change the `background-image url` for `.top-container` in `main.css (line 58)`

