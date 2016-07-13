# Modal with pagination
<img src="/_images/modal-pagination.gif" width="250">

This template provides a basic modal in-app message with pagination using [Slick](http://kenwheeler.github.io/slick/).

A close button (x) is provided in the upper right hand corner.  (Note: A close button action must always be included in your HTML to allow users to dismiss your in-app message. Ex: ```<a href="appboy://close">Close</a>```)

### Files included in folder

* `template.html` - html template. This includes three slides (with a main image, header, and message), a pagination bar, two buttons (skip and next), and one button (close) on the last slide.
* `pagination.css` - main stylesheet to style your template. (ex: change the transparency of the background, change button colors, fonts, size, etc)
* `pagination.js` - initializes slick.  To customize the pagination style, read the documentation in [Slick](http://kenwheeler.github.io/slick/) and edit this file accordingly.
* `light.svg` - svg used for the close button in the upper right hand corner.  If you would like to use a darker colored close button, copy and paste the `dark.svg file` from [fullscreen-pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-pagination) and change the image source in `template.html (line 18)`.
* `background-dark-blue.png` - image used as a background image in the top half of the in-app message.  If you would like to use a different background image, remove this file from this folder, add the image of your choice, and change the `background-image url` for `.top-container` in `main.css (line 138, 143, 148)`
* `slick.min.js` - Slick's jquery file.
* `slick.css` and `slick-theme.css` - Slick's css files.
