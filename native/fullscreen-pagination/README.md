# Fullscreen with pagination
<img src="/_images/fullscreen-pagination.gif" width="250">

This template provides a basic fullscreen in-app message with pagination using [Slick](http://kenwheeler.github.io/slick/).

A close button (x) is provided in the upper right hand corner.  (Note: A close button action must always be included in your HTML to allow users to dismiss your in-app message. Ex: ```<a href="appboy://close">Close</a>```)

### Files included in folder

* `template.html` - html template. This includes three slides (with a main image, header, and message), a pagination bar, two buttons (skip and next), and one button (close) on the last slide.
* `pagination.css` - main stylesheet to style your template. (ex: change background images, button colors, fonts, size, etc)
* `pagination.js` - initializes slick.  To customize the pagination style, read the documentation in [Slick](http://kenwheeler.github.io/slick/) and edit this file accordingly.
* `dark.svg` - svg used for the close button in the upper right hand corner.  If you would like to use a lighter colored close button, copy and paste the `light.svg file` from [fullscreen-main](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-main) and change the image source in `template.html (line 18)`.
* `image-light-grey.png` - main image used in the middle of the in-app message on each slide.  If you would like to use a different image, remove this file from this folder, add the image of your choice, and change the image source in each of the image tags in `template.html (line 26, 42, 58)`.
* `slick.min.js` - Slick's jquery file.
* `slick.css` and `slick-theme.css` - Slick's css files.
