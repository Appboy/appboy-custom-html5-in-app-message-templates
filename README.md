![Braze Logo](https://github.com/Appboy/appboy-custom-html5-in-app-message-templates/blob/master/braze-logo.png)

HTML5 IAM Templates
==========

# Update

:warning: We're working on a refreshed template library https://github.com/braze-inc/in-app-message-templates.
This messages will be deprecated. 


# Overview

Braze provides the ability to create campaigns with fully customizable In-App Messages using HTML5.  We have provided a set of templates and some documentation to get you through the process of creating a customized in-app message.

# Getting Started

To get started, clone this repo into any directory of your choice by clicking the "Clone or download" button in this repo, copying the URL, and enter `git clone <copied url>` into your terminal.  This will download all of the templates and their respective files for you to edit.

<img src="/_images/git-clone.gif" width="860">

# Templates

Choose a template you would like to base your customized in-app message off of. Edit the files within the folder until you achieve the desired result.  While developing, follow the instructions under "Previewing" and "Testing" to continuously view your updated customized template.

* Native Messages (Apps Only)
  * [Fullscreen](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/native/fullscreen-main)
  * [Fullscreen with pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/native/fullscreen-pagination)
  * [Fullscreen with rating](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/native/fullscreen-rating)
  * [Modal](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/native/modal-main)
  * [Modal with pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/native/modal-pagination)
  * [Modal with rating](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/native/modal-rating)
* Web Messages (Browsers Only)
  * [Fullscreen with pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/web/fullscreen-pagination)
  * [Email Capture](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/web/email-capture)

# Previewing

If you would like to preview your customized template using Google Chrome Dev Tools before uploading it to a Braze campaign:

1. Open template.html in a Google Chrome tab.
2. Open up Chrome Dev Tools in that Google Chrome tab (Mac: ctrl + option + i; Windows: F12, ctrl + shift + i).
<img src="/_images/open-dev-tools.png" width="600">
3. Turn on Device Mode in Chrome Dev Tools (upper left hand corner of Dev Tools, next to the pointer button).
<img src="/_images/device-mode.png" width="600">
4. Toggle through different devices to ensure your template will display your message correctly.
<img src="/_images/toggle-device.png" width="400">

# Uploading Customized Templates to Braze

When you've finished customizing and testing your template, follow these instructions to upload your template to a Braze campaign:

1. Compress all of the necessary files (css, js, and image files, excluding template.html and README.md) into a zip file.  Since Braze's Custom HTML IAM campaigns currently do not support zip files that contain folders, be sure to compress only the files, and not a folder of the files.

<img src="/_images/compress-zip.png" width="400">

2. In Braze's dashboard, open up and create/edit your IAM campaign.  Choose "Custom HTML" as your IAM type.  Copy and paste the contents of template.html in the html box and upload your zip file.

<img src="/_images/create-custom-html-iam.png" width="600">

# Testing

If you would like to test your customized template on a mobile device by using a test Braze campaign, follow the instructions in [Braze Academy](https://www.braze.com/academy/Dashboard_Features/#sending-a-test-in-app-message).  This testing procedure is available if you are using our updated in-app messaging format. If the UI in this link is not available in your dashboard yet, please contact success@braze.com to enable this new feature and in the meantime, test your message by sending to a [test segment](https://www.braze.com/academy/Dashboard_Features/#creating-a-designated-test-segment).

# Communicating with Braze

Custom HTML in-app messages support syntax for communicating with Braze - enabling rich support for actions such as logging a Custom Event, or opening the Braze News Feed.  For more information on doing this from within an app, [click here](https://www.braze.com/academy/Best_Practices/#native-html-messages), and for information on doing this on the web, [click here](https://www.braze.com/academy/Best_Practices/#web-html-messages).
