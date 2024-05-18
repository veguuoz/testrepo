// Task 2 Description - TABLE
/* 
Create a ‘table.js’ file in the correct folder.

Use this file to populate the Table in the ‘personal’ section as follows, using Vanilla JavaScript:

You must have five rows of unique data (the data cannot be the same in each row).
Populate the table with your chosen data relevant to the table headers.
The Table needs to be populated from the 'table.js' file 
Icons should be used for the icon column. Here, any icons can be used, but no images are allowed. (You can use bootstrap icons)
 The following functionality needs to be implemented in the ‘table.js’ file, using jQuery:

When one of the images in the Table is clicked, the image must be displayed in a new window or tab in your web browser.
The table’s odd rows need to change font color when the mouse hovers over them, changing font color back to black once the mouse stops hovering over them.
 */


// Creating a table within the table.js file with different persons with their properties used in the different rows of the table.
// Properties such as name, age, icon, info, and image are included in the function for the table. 
document.addEventListener("DOMContentLoaded", function() {
    // Getting the element of the table by the ID.
    const table = document.getElementById('personalTable');
    
    // Declaring a variable for the 'data' in the table, and populate it manually in an array.
    // This will contain pathway to each of the person's pets in .jpg format in the "Image" row.
    // The images for each person will have a functionality by opening a new browser window when image is clicked.
    const data = [
        {name: "John Johnsson", age: 30, icon: "bi-file-person", info: "View Image", image: "img/kitty-cat-kitten-pet-45201.jpeg"},
        {name: "Jack Smith", age: 24, icon: "bi-person-fill", info: "View Image", image: "img/SkogsKatt_JackSmith.jpg"},
        {name: "Myles Jackson", age: 29, icon: "bi-person-circle", info: "View Image", image: "img/MylesJack_Dog.jpg"},
        {name: "Bobby Brown", age: 33, icon: "bi-person-square", info: "View Image", image: "img/BobbyBrowns_cat.jpg"},
        {name: "Charles Davidson", age: 27, icon: "bi-person-check", info: "View Image", image: "img/CharlesDavidsons_Dog.jpg"}
    ];

    // Populate the table with data and iterate through it as the table rows and cells being created.
    data.forEach((item, index) => {
        // Insert a new row at the end of the table by using (-1) as value within here. 
        let row = table.insertRow(-1);
        // Inserting a cell for each of the one below starting from 'name'.
        let name = row.insertCell(0);
        let age = row.insertCell(1);
        let icon = row.insertCell(2);
        let info = row.insertCell(3);
        let image = row.insertCell(4);

        // Using this for the text content of the name cell.
        name.textContent = item.name;

        // Defining for the text content of the age cell.
        age.textContent = item.age;

        // The HTML icons in the icon cell are set to use Bootstrap icon classes.
        icon.innerHTML = `<i class="${item.icon}" style="font-size: 24px;"></i>`;

        // Set the text content of the info cell to "Cat Image" or "Dog Image" based on what pet's each have.
        // Creating the if-statement by checking if the person is equal to "Myles J" or "Charles D".
        // If true and in this case also evaluates to true by giving the right "Dog Image" description for both.
        if (item.name === "Myles Jackson" || item.name === "Charles Davidson") {
            info.textContent = "Dog Image";
        // else will evaluates the statement to false, and will provide the rest of the persons the "Cat Image" description in their cell.
        } else {
            info.textContent = "Cat Image";
        }

        // Displaying the image for all rows.
        image.innerHTML = `<img src='${item.image}' alt='Person Image' style='height: 50px; width: auto;' class='clickable-image'>`;

        // Handle for funtionality when image is clicked to open the corresponding image in a new browser tab/window.
        $(image).on('click', 'img', function() {
            window.open(item.image, '_blank');
        });
    });

    // Change the font color of odd rows when hovered.
    $('#personalTable tr:odd').hover(
        function() {
            // Changes font color to red when hovered.
            $(this).css('color', 'red');
        },
        function() {
            // Changes font color back to black when not hovered.
            $(this).css('color', 'black'); 
        }
    );
});


