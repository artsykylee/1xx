# 
https://1xx.creativeleekylee.com


inside out project version 100.0
    -added header-resize functionality
  
inside out project version 100.1
    -added footer resize functionality
    -added jQuery, tether, popper
  
inside out project version 100.2
    -fixed by adjusting bootstrap column widths wrapping
    them inside a bootstrap row

inside out project version 101.0
    -added first level of navigation.
    -created assets/js/app.js
    -created assets/data/menu.json
    -moved hear resize js to app.js
  
inside out project version 102.0
    -completed menuBuilder function in app.js
    -completed nav through menuBuilder function with recursion

inside out project version 103.0
    -completed css for navigation 
    
inside out project version 103.1
    -fixed enlarging navigation on header shrink
    -added loader to application with gears 
    
inside out project version 104.0
    -modified the ajax call to get the JSON for the menu from the me. __________.__ site.
    -modified the menuBuilder function to accept the JSON data from Wordpress REST API
    -removed data/menu.json from file system considering it is no longer needed 
inside out project version 105.0
    README.md file changes
    -prepended  the title to the production site link
    -added link to GitHub pages to the top of the content
    me WP Site changes
    -added and activated a new theme
        -WP Bootstrap starter
            -Version 3.0.11
            -By Afterimage Design
    -added home page name "iop-html - home" to pages do not add to the menu
        -added content 
        -nested all pages below home page "iop-html5 - home"
    -updated "Main Menu" to iop-html5-Menu
    
    inside-out App Site CHanges
    -index.html 
        -removed comments and cleaned code
        -added the click event to the logo - calls the getPage function
        -removed both main content sections
        -added the circle loading div and content
    -style.css
        -added the logo and logo:hover classes for the logo int he header - no inked
        -added the section class to keep the page from closing all the way when there is no content 
        -added the following classes for the loader circle
            -circle wave, wave:before, wave:after
            -add keyframes for animation animate
    -app.js
        -removed comments and cleaned code
        -added the GetPage function to capture link clicks and get page content
        -added Getpage function call to the ajax call for the menus on page load to get the homepage 
        -modified the forEach loop in the menuBuilder to include the page id as a data attribute
        
        


  