# Data Pagination and Filtering

An example of pagination to display large amounts of data.

## Screenshots

<img width="300px" src="https://user-images.githubusercontent.com/19231569/214108591-05b59f4d-ce96-4686-a425-000b988a8da2.png"> <img width="300px" src="https://user-images.githubusercontent.com/19231569/214108607-72ef1a13-4aec-4252-bf03-451595b8ec1e.png">

## Table of Contents

[Client Requirements](#client-requirements)

[Bonus Features](#bonus-features)

[Testing](#testing)

## Client Requirements

Using “pagination” to enhance the usability of their web page.

Start with a file that contains information for 42 students, including name, email, and picture. Display the first nine students on the page. Then add pagination buttons, that the user can click to display different pages of students.

Your application will need to work with a list of any number of students, not just with the supplied array of 42 students. The code needs to be flexible enough to handle arrays of student data of various lengths.

## Bonus Features

1. Add a Search Component

   - Dynamically create and add a search bar. 

2. Add Functionality to the Search Component

   - When the "Search" icon is clicked, the student data is filtered so that only students whose name matches the search query are shown. For example, if the name Bill is typed into the search field, only students with “Bill” in the name should be shown. If the letter S is typed in, only students with an “S” in the name should be shown.

3. Add Pagination for Search Results

   - The pagination buttons should change based on the number of matches to the search. For example: if nine or fewer matches are found, there should be 0 or 1 pagination buttons. If 22 matches are found, there should be 3 pagination buttons.
   - Clicking on a pagination button should display the corresponding matching students for that page.

4. Handle No Search Matches

   - If no matches are found for a search, display a “No results found” type message on the page.
   - Note: Don't use the built in alert() method for this. The "No results found" message should be printed to the page.

## Testing

Tested with no notable issues on the following browsers: Chrome 88, Safari 14.02 and Firefox 86.0b9.
