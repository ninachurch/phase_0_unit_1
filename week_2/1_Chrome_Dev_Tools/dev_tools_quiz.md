#### Include an inline screenshot of your codeschool's points from the profile page:

![Codeschool points](https://c1.staticflickr.com/3/2898/14074841077_9887c2e785.jpg)

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  
  * Realtime editing of HTML and CSS 
   
    If you click on the "ELEMENTS" tab you can find the HTML code on the left, and the "Styles" tab on the right. You can edit the code and see realtime changes happen to the page.
  
  * Javascript Debugging
    
    You can use the "SOURCES" panel to debug JavaScript code. It allows you to see the script and be able to step through the different parts of the code through the execution control buttons. You can add breakpoints and conditional statements to target and test a particular section of the code.
  
  * Performance Optimization
  
    You can optimize the page by evaluating network performance in the "Network" panel. It allows you to see how long resources took to load, in what order they were loaded, and which resources were the slowest. This panel records all network activity while the DevTools are open. Because this only happens when open, you have to refresh the page once open to get the real time data needed. It may help to open in an incognito window, or turn off cache settings in the setting bar, to make sure you're getting realistic data.  

* What's the quick key for your OS to spawn the Dev Tools inspector?
  
  Command, alt, I (⌘-⌥-I)

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  
    #0b0f11
  
  * Tweak the background color to white.
   
    done
  
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
   
    done
  
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.

  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/



  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)


* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

If you look at the "Styles" tab you can see that the text is actually part of an image that is linked to in the CSS to fill the background. The text in the paragraph is just there as a placeholder (I'd guess it's there for if the image doesn't load).

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 

  The largest image is the png with the file name "92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png" and it depicts NYC's Times Square.

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

  The image url is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
  It is 316 KB.

  To find this information I opened Dev Chrome Tools and went to the "Network" panel. I cleared the current results using the Clear (⍉) button and then refreshed the page. When the list loaded I ordered it by size descending from largest to smallest. Then I clicked on the largest file's name and went into the "preview" viewer. 

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?

Minify the CS. This will reduce their size by 4.6KiB when combined.