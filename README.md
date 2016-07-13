HTML5 IAM Templates
==========

# Overview

Appboy provides the ability to create campaigns with fully customizable In-App Messages using HTML5.  We have provided a set of templates and some documentation to get you through the process of creating a customized in-app message.

# Getting Started

To get started, clone this repo into any directory of your choice by clicking the "Clone or download" button in this repo, copying the URL, and enter `git clone <copied url>` into your terminal.  This will download all of the templates and their respective files for you to edit.

<img src="/_images/git-clone.gif" width="860">

# Templates

Choose a template you would like to base your customized in-app message off of.  Edit the files within the folder until you achieve the desired result.  While developing, follow the instructions under "Previewing" and "Testing" to continuously view your updated customized template.

* [Fullscreen](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-main)
* [Fullscreen with pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-pagination)
* [Fullscreen with rating](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/fullscreen-rating)
* [Modal](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/modal-main)
* [Modal with pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/modal-pagination)
* [Modal with rating](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/modal-rating)

# Previewing

If you would like to preview your customized template using Google Chrome Dev Tools before uploading it to an Appboy campaign:

1. Open template.html in a Google Chrome tab.
2. Open up Chrome Dev Tools in that Google Chrome tab (Mac: ctrl + option + i; Windows: F12, ctrl + shift + i).
<img src="/_images/open-dev-tools.png" width="600">
3. Turn on Device Mode in Chrome Dev Tools (upper left hand corner of Dev Tools, next to the pointer button).
<img src="/_images/device-mode.png" width="600">
4. Toggle through different devices to ensure your template will display your message correctly.
<img src="/_images/toggle-device.png" width="400">

# Uploading Customized Templates to Appboy

When you've finished customizing and testing your template, follow these instructions to upload your template to an Appboy campaign:

1. Compress all of the necessary files (css, js, and image files, excluding template.html and README.md) into a zip file.  Since Appboy's Custom HTML IAM campaigns currently do not support zip files that contain folders, be sure to compress only the files, and not a folder of the files.

<img src="/_images/compress-zip.png" width="400">

2. In Appboy's dashboard, open up and create/edit your IAM campaign.  Choose "Custom HTML" as your IAM type.  Copy and paste the contents of template.html in the html box and upload your zip file.

<img src="/_images/create-custom-html-iam.png" width="600">

# Testing

If you would like to test your customized template on a mobile device by using a test Appboy campaign, follow the instructions in [Appboy Academy](https://www.appboy.com/academy/Dashboard_Features/#sending-a-test-in-app-message).  This testing procedure is available if you are using our updated in-app messaging format. If the UI in this link is not available in your dashboard yet, please contact success@appboy.com to enable this new feature and in the meantime, test your message by sending to a [test segment](https://www.appboy.com/academy/Dashboard_Features/#creating-a-designated-test-segment).




# In-App Clickable Hyperlinks

Hyperlinks are available for use in Custom HTML in-app messages.  The supported links are:

| Supported Scheme               | Corresponding Action                                                                                                                                                                                                                                                                                                                                                          | Supported Queries                                       |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Normal Web URL or deep linking | With Web URLs, Appboy will open the new content of the link in a webview inside the host app by default, or in an external browser when query “abExternalOpen” is true. The HTML in-app message will be dismissed first.   When it comes to deep linking, Appboy will open the new content of the link in a webview inside the host app, regardless “abExternalOpen”’s value. | “abExternalOpen” “abButtonId”                           |
| appboy://close                 | Appboy will dismiss the HTML in-app message.  This link is mandatory in all Custom HTML in-app messages.  This click will not be counted in analytics.                                                                                                                                                                                                                        | none                                                    |
| appboy://feed                  | Appboy will dismiss the HTML in-app message and display a modal news feed.                                                                                                                                                                                                                                                                                                    | “abButtonId”                                            |
| appboy://customEvent           | Appboy will log a custom event and will NOT dismiss the HTML in-app message.                                                                                                                                                                                                                                                                                                  | All queries will be the properties of the custom event. |

Queries are optional.  Here are some details about the queries:

| Query Name     | Value         | Action                                                                                                                                                       |
|----------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| abExternalOpen | {true, false} | When the query is absent or set to false, Appboy will try to open the web link inside the host app; otherwise, the web link is opened in an eternal browser. |
| abButtonId     | {0, 1}        | Appboy will collect the string as button ID and send it back to server for analytics.                                                                        |

Some examples of hyperlinks:
* appboy://close
* appboy://feed?abButtonId=0
* appboy://customEvent?property1=value1&property2=value2
* https://www.appboy.com?abButtonId=1&abExternalOpen=true

