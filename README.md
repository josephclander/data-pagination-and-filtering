# Project 2: Data Pagination and Filtering

# Instructions

1. Display a “page”

   - Create a function that will show a “page” of nine students.
   - This function should have two parameters:

     - A list parameter to represent student data that will be passed as an argument when the function is called.
     - A page parameter to represent the page number that will be passed as an argument when the function is called.

   - Inside the function:

     - Create two variables to store the start index and the end index of the list items to be displayed on the given page. To make this function dynamic, use the page parameter and some basic math to calculate the value of these variables like so:
       - Start Index = (page parameter \* items per page) - items per page
       - End Index = page parameter \* items per page
     - Select the UL element with a class of student-list and assign its value to a variable.
     - Use the innerHTML property set the HTML content of the student-list variable you just created to an empty string. This will remove any students that might have previously been displayed.
     - Loop over the list parameter.
     - Inside the loop:

       - Write a conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
       - Inside that conditional: - Create the DOM elements needed to display the information for each matching student as you iterate over the list parameter. Here is an example of what the the final version of these elements should look like:

       ```
       <li class="student-item cf">
        <div class="student-details">
            <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <h3>Ethel Dean</h3>
            <span class="email">ethel.dean@example.com</span>
        </div>
        <div class="joined-details">
            <span class="date">Joined 12-15-2005</span>
        </div>
       </li>
       ```

       - Insert the elements you have created to the student-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.

2. Add Pagination Buttons

   - Create a function that creates and appends functioning pagination buttons.
   - This function should accept a single list parameter to represent student data that will be passed as an argument when the function is called.
   - Inside the function:
     - Create a variable to store the value of the number of pagination buttons needed. You can calculate this using the length of the list parameter. Remember, you will want to display nine students per page.
     - Select the UL element with a class of link-list and assign its value to a variable.
     - Use the innerHTML property set the HTML content of the link-list variable you just created to an empty string. This will remove any pagination buttons that might have previously been displayed.
     - Loop over the variable for the number of pages needed that you created earlier.
     - Inside the loop:
       - Create the DOM elements needed to display the pagination button as you iterate over the number of pages. Here is an example of what the the final version of these elements should look like:
       ```
        <li>
           <button type="button">1</button>
       </li>
       ```
       - Insert the elements you have created to the link-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.
     - Select the first pagination button and give it a class name of active.
     - Create an event listener to listen for clicks on the link-list variable that you created earlier.
     - Inside this event listener:
       - The click event should only fire when the buttons are clicked. Click event should not fire if user clicks between or around buttons. So if the click target is a pagination button:
         - Remove the active class from any other pagination button.
         - Add the active class to the pagination button that was just clicked.
         - Call the showPage function passing the list parameter and the page number to display as arguments.

3. Call Functions

   - Call the first function you created to display a “page”, passing in the data variable and 1 as arguments.
   - Call the second function you created to add pagination buttons, passing the data variable as an argument.

4. Finishing the Project

   - The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.
   - Code Comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code and what it does.
   - Code Readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation is consistent and in keeping with best practices.
   - Quality Assurance Testing - This is a key step in the development process.
     - Open and run your app.
     - Open the Chrome DevTools Console.
     - Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
   - Cross Browser Consistency - To pass, your project only needs to work in Chrome but it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.

# Extra Credit

1. Add a Search Component

   - Dynamically create and add a search bar. Avoid making any changes in the index.html file and instead use your JavaScript skills for this. Below is an example of the format of the search bar elements. Search bar can't be unstyled. If you follow the example below, the provided CSS will style the search bar for you.

   ```
   <label for="search" class="student-search">
       <input id="search" placeholder="Search by name...">
       <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   ```

2. Add Functionality to the Search Component

   - When the "Search" icon is clicked, the student data is filtered so that only students whose name matches the search query are shown. For example, if the name Bill is typed into the search field, only students with “Bill” in the name should be shown. If the letter S is typed in, only students with an “S” in the name should be shown.

3. Add Pagination for Search Results

   - The pagination buttons should change based on the number of matches to the search. For example: if nine or fewer matches are found, there should be 0 or 1 pagination buttons. If 22 matches are found, there should be 3 pagination buttons.
   - Clicking on a pagination button should display the corresponding matching students for that page.

4. Handle No Search Matches

   - If no matches are found for a search, display a “No results found” type message on the page.
   - Note: Don't use the built in alert() method for this. The "No results found" message should be printed to the page.

# Testing

Tested with no notable issues on the following browsers: Chrome 88, Safari 14.02 and Firefox 86.0b9.
