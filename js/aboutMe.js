// Task 3 - About Me
// Task Description:
/* 
Create an ‘aboutMe.js’ file in the correct folder.

In this file, you must create a single function to update the ‘about me’ content.

Change all the text that says "Something about me text" to something about you when the page loads 
- This could be anything, such as hobbies, what you like or do not like, your pet's names, or where you live 
(this information can be real or made up). All the "Something about me text" needs to be changed from the function. 

Change the "student name" to your student name in the about me section so that it reads: Hello! I am FJ, the code master. 
This change should be done in the same function as the "something about me text" change.

When you click the content in the "something about me" section that you have updated, 
the background color for the clicked element needs to change to powder-blue, and the font color needs to change to white.
 */

// Creating a function that will execute the code.
document.addEventListener("DOMContentLoaded", function() {
    // Function to update the "about me" content
    function updateAboutMe() {
        // Uses querySelector to find the first element in the document that matches the CSS selector '.aboutme'.
        // Updates the student name to your own name in the introduction.
        document.querySelector('.aboutme').textContent = "Hello! I am Vegard G, a 29-year-old student at Noroff Education's online school, studying part-time in the one-year backend development program.";
        
        // Finds all paragraph <p> elements within elements with the class 'about'.
        const aboutMeParagraphs = document.querySelectorAll('.about p');
        
        // Loops through each found paragraph and updates the content if it contains the text "Something about me".
        aboutMeParagraphs.forEach((paragraph, index) => {
            // Checks if the content of the paragraph contains the text "Something about me".
            // If this is the case, the text is updated to information about the hobbies and studies.
            if (paragraph.textContent.includes("Something about me")) {
                paragraph.textContent = "Hobbies: I enjoy playing tennis, strength training, reading, and generally an active lifestyle. I also like coding and started gaining more interest for that, which is very fun to learn more of. I am a student at Noroff's online school, studying backend development part-time.";
            }
        });

        // Adds an event listener to each paragraph to change the background and text color on click.
        // The background color should change to powderblue, and the text color should become white when the content is clicked.
        aboutMeParagraphs.forEach(paragraph => {
            paragraph.addEventListener('click', function() {
                this.style.backgroundColor = 'powderblue';
                this.style.color = 'white';
            });
        });
    }

    // Calls the function to update the content when the page loads.
    updateAboutMe();
});


