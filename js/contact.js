// Task 4 - Contact Information
// Task Description:
/* 
Create a ‘contact.js’ file in the correct folder.

In this file, you must create a single function with the following 3 variables:

email
telephone_number
address
 In the index.html file, in the ‘contact’ section, add a Button.

When this button is clicked, the following should happen in the function created above:

1. Ask the user for information.

You must store this information in the 3 variables created in the contact.js file. Make sure that data is received from the user input, and that it is in the correct format (e.g., make sure the user enters an email address containing both a '@' and '.' ).

 2. Change the current contact information in the HTML file (email, telephone number, and address) to the input data from these 3 new variables.

This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section. (The HTML file cannot be changed for this)

 3. Print the data entered to the console in the following format:

From: email@emailaddress.co.za
Contact: 0458754125
Address: 12 Smith Road, John Park.
 */

// Creating a function that will execute the written code.
$(document).ready(function() {
    function updateContactInfo() {
        // Prompt the user for new contact information
        let email = prompt("Please enter your email:");
        while (!validateEmail(email)) {
            email = prompt("Invalid email. Please enter a valid email address:");
        }

        // Prompt the user for their phone number for updated version.
        let telephone_number = prompt("Please enter your telephone number:");
        
        // Prompt the user for their address for updated version. 
        let address = prompt("Please enter your address:");

        // Update the contact information on the page using jQuery
        // Targeting each one by using 'h5:contains' for all <h5> elements that includes specified text content. 
        $('h5:contains("Email")').next('p').text(email);
        $('h5:contains("Call Me")').next('p').text(telephone_number);
        $('h5:contains("Visit Us")').next('p').text(address);

        // Print the new contact information to the console, new input will be automatically updated.
        console.log(`From: ${email}`);
        console.log(`Contact: ${telephone_number}`);
        console.log(`Address: ${address}`);
    }

    function validateEmail(email) {
        // Simple email validation
        return email.includes('@') && email.includes('.');
    }
        
    // Binding the button's click event to the updateContactInfo function
    $('#updateContactBtn').on('click', updateContactInfo);
});