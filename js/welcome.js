// Task 1 - WELCOME 

// Task description:
/* Create a ‘welcome.js’ file in the correct folder. In this file, create one jQuery function that selects the HTML element with the “liveToastBtn” ID and shows 
the HTML Toast element with the ID of ‘liveToast’. 
This function should be run when the user clicks the ‘Like’ button in the HTML header.

Make a copy of the ‘Like’ button element in the HTML file and place it directly after the existing ‘Like’ button element. Change the button text to “I’m Bored” and 
the element’s ID to “boredBtn”. In the same ‘welcome.js’ file, create another function that executes a GET Request to the “https://www.boredapi.com/api/activity/” API, once the new “I’m Bored” button is clicked.
The response from this API Request should be logged into the web console. */

// Creating a welcome.js file


// Starting with creating a function that shows the toast when 'Like' button is clicked. 
$("#liveToastBtn").click(function() {
    $("#liveToast").toast('show');
});

// Fetch activity from Bored API when 'I'm Bored' button is clicked
// Result of this will be printed to the web console in DevTools. 
$("#boredBtn").click(function() {
    $.get("https://www.boredapi.com/api/activity/")
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            console.error("Error fetching activity");
            alert("Failed to fetch activity. Please try again later.");
        });
});


// Debugging log to ensure the script is loaded:
// console.log("welcome.js loaded");





