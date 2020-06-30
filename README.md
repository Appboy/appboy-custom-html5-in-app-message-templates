<img src="https://info.braze.com/rs/367-GUY-242/images/Braze-Logotype_Black.png" width="400">

HTML5 In-App & In-Browser Community Templates
==========

# Overview

Braze provides the ability to create campaigns with fully customizable in-app and in-browser messages using HTML in both mobile apps and web browsers. This respository contains templates from Braze as well as from the Braze customer community for getting up and running with Braze templates. 

# Getting Started

To get started, clone this repo into any directory of your choice by clicking the "Clone or download" button in this repo, copying the URL, and enter `git clone <copied url>` into your terminal.  This will download all of the templates and their respective files for you to edit.

<img src="/_images/git-clone.gif" width="860">

# Repository Organization

The folders below contain templates that you can alter in your favorite editor to suit your use-cases and the style of your brand.

* Braze Templates
  * [Fullscreen with pagination](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/BrazeTemplates/fullscreen-pagination)
  * [Email Capture](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/BrazeTemplates/email-capture)
  * [Fullscreen with rating](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/BrazeTemplates/fullscreen-rating)
  * [Braze Dashboard Templates](https://github.com/Appboy/appboy-custom-html5-in-app-message-templates/tree/master/BrazeTemplates/Braze%20Dashboard%20In-Browser%20Messages)
  * [Community Templates](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/CommunityTemplates)
    * This is where you can add your own templates! [See this link for directions as to how to upload new files](https://help.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository)
  * [Deprecated Templates](https://github.com/Appboy/Custom-HTML5-In-App-Message-Templates/tree/master/DeprecatedTemplates)
    * Legacy templates which only work in native applications and are no longer officially supported by Braze

# Uploading Customized Templates to Braze

When you've finished customizing and testing your template, follow these instructions to upload your template to a Braze campaign:

1. Compress all of the necessary files (css, js, and image files, excluding template.html and README.md) into a zip file.  Since Braze's Custom HTML IAM campaigns currently do not support zip files that contain folders, be sure to compress only the files, and not a folder of the files.

<img src="/_images/compress-zip.png" width="400">

2. In Braze's dashboard, open up and create/edit your IAM campaign.  Choose "Custom HTML" as your IAM type.  Copy and paste the contents of template.html in the html box and upload your zip file.

<img src="/_images/create-custom-html-iam.png" width="600">

Braze is also beta testing a new HTML In-App Message editor which will no longer require zip files! For more information on how that is going to work, click [here](https://www.braze.com/docs/user_guide/message_building_by_channel/in-app_messages/beta-preview/) and reach out to your customer success manager or account manager if you'd like to get involved in the beta.

# Testing

If you would like to test your customized template on a mobile device by using a test Braze campaign, follow the instructions in [the Braze User Guide](https://www.braze.com/docs/user_guide/message_building_by_channel/in-app_messages/testing/).  This testing procedure is available if you are using our updated in-app messaging format. 

# Communicating with Braze

Custom HTML in-app messages support Javascript syntax for communicating with Braze - enabling rich support for actions such as logging a Custom Event, or opening the Braze News Feed.  For more information on doing this from within an app, [click here](https://www.braze.com/docs/user_guide/message_building_by_channel/in-app_messages/customize/#javascript-bridge)
