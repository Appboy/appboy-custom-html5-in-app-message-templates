# Modal with star rating
<img src="/_images/modal-rating.gif" width="250">

This template provides a modal IAM with star rating using font awesome for the star icons.  **Note: The stars will not appear if you do not add font awesome to your HTML template.**  If you would like to use font awesome, follow the instructions on font awesome's [website](http://fontawesome.io/get-started/).  The suggested way to add font awesome is to use Font Awesome CDN and add the embedded code in `template.html (line 42)`.

A close button (x) is provided in the upper right hand corner.  (Note: A close button action must always be included in your HTML to allow users to dismiss your in-app message. Ex: ```<a href="appboy://close">Close</a>```)

### Files included in folder

* `template.html` - html template.  This includes a main image, header, message, rating stars, and a submit button.
* `rating.css` - main stylesheet to style your template. (ex: change the transparency of the background, change button colors, fonts, size, etc)
* `rating.js` - initializes rating the stars.  You can change the number of stars that are initially filled by changing the parameter in `line 48` to a number from 0 (no stars filled) to the total number of stars (in this case, there are 5 stars).  To record the amount of stars a user selected, modify the event listener on the button in `line 51`.
* `dark.svg` - svg used for the close button.  If you would like to use a lighter colored close button, copy and paste the `light.svg file` from [fullscreen-main](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-main) and change the image source in `template.html (line 14)`.
* `image-light-grey.png` - main image used on the top of the in-app message.  If you would like to use a different image, remove this file from this folder, add the image of your choice, and change the image source in the image tag in `template.html (line 19)`.
