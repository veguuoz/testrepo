// Task 5 - Accessibility 
// Task description:
/* 
Create an ‘accessibility.js’ file in the correct folder.

In the Accessibility’ section, we have a visual aid for users who struggle to read small font in the form of a Toggle Switch. 
When the user clicks this Toggle Switch to the ‘On’ position, all text on the web page within <p> tags need to be increased by 20%. 
When the user clicks the Toggle Switch back to the ‘Off’ position, all text on the web page within <p> tags needs to be decreased back to the original size. 

Create a single function in the file that accomplishes this.
 */

// Creating a block called document.ready where everything will be wrapped within.
// This code will only execute after the entire page has loaded.
// Using jQuery for solving this task. 
$(document).ready(function() {
    // Targeting the elemnt with 'accessToggle' as ID and store the value in '$checkbox'
    const $checkbox = $('#accessToggle');

    // Targeting all the <p> tags in the website and store in the variable '$paragrphs'
    const $paragraphs = $('p');

    // Creating an empty array for storing the original font sizes of all <p> tags 
    const originalFontSizes = [];

    // Iterating through each of the <p> tag to store their original font size.
    $paragraphs.each(function() {
        // This step gets the current font size of <p> tag by the add of it to the originalFontSizes empty array.
        originalFontSizes.push($(this).css('font-size'));
    });

    // This is an event listener for changes for the checkbox.
    $checkbox.change(function() {
        $paragraphs.each(function(index) {
            // Using if-statement that will check if the checkbox is checked.
            if ($checkbox.is(':checked')) {
                // If the statement is true, then the font size will be increased by 20%.
                // Then also getting the  font size of this <p> tag.
                let currentSize = parseFloat(originalFontSizes[index]);
            
                $(this).css('font-size', (currentSize * 1.2) + 'px');
            } else {
                // If the first if-state is false, then else ensure a reset back to the original value.
                $(this).css('font-size', originalFontSizes[index]);
            }
        });
    });
});