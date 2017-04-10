# Fullscreen
<img src="/_images/fullscreen-main.png" width="250">

This template provides a basic full screen in-app message.

A close button (x) is provided in the upper right hand corner.  (Note: A close button action must always be included in your HTML to allow users to dismiss your in-app message. Ex: ```<a href="appboy://close">Close</a>```)

### Files included in folder

* `template.html` - html template.  This includes a main image with a background image, header, message, and one button.
* `main.css` - main stylesheet to style your template. (ex: change background images, button colors, fonts, size, etc)
* `light.svg` - svg used for the close button.  If you would like to use a darker colored close button, copy and paste the `dark.svg file` from [fullscreen-pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-pagination) and change the image source in `template.html (line 13)`.
* `background-dark-blue.png` - image used as a background image in the top half of the in-app message.  If you would like to use a different background image, remove this file from this folder, add the image of your choice, and change the `background-image url` for `.top-container` in `main.css (line 43)`
* `image-light-blue.png` - main image used in the middle of the in-app message.  If you would like to use a different image, remove this file from this folder, add the image of your choice, and change the image source in the image tag in `template.html (line 18)`

