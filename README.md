# Minimal Lightbox

A simple lightbox module for displaying an image as a scaled up image.

## Usage
1. Download the latest version,which includes both javascript and css files [from here](https://github.com/manutdkid77/minimal-lightbox/tree/master/dist)

2. To set up the lightbox on your page, inlucde both the css and javascript as follows:
    * Include the CSS at the top of your page in your <head> tag:
        ```html
            <link href="path/to/lightbox.css" rel="stylesheet">
        ```
    * Include the Javascript at the bottom of your page before the closing              </body> tag:
        ```html
            <script src="path/to/lightbox.js"></script>
        ```
3. Minimal Lightbox requires jQuery, so make sure it is included
    
    * Make sure jQuery is loaded before lightbox.js. 
    * jQuery 1.7 or greater is required.
    
## Initialize

1. Make sure that the ``<img>`` to be displayed by the lightbox is **enclosed** within an ``<a class="lightbox-link"></a>`` tag

    Example 
    ```html 
    <a class="lightbox-link">
    	<img src="images/image1.jpg" alt="Image Description Here">
    </a>
    ```
2. The content of the ``<alt>`` tag  will be displayed below the image in the lightbox.
3. In your ``script.js`` file, initialize the plugin as follows.
    ```js
        $('.lightbox-link').lightbox();
    ```
    
## Roadmap
1. Provide smoother transitions.
2. Make Images to be displayed in a carousel/gallery manner.
3. Write a vanilla javascript alternative for the plugin.

## Browser Support
 * Chrome
 * Firefox
 * Safari
 * Opera
