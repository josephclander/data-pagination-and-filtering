/**
 * Treehouse Techdegree:
 * FSJS Project 2 - Data Pagination and Filtering
 */
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
const messageBox = document.querySelector('.no-results');

/**
 * Append a search bar and set listener
 */
const searchbar = `<label for="search" class="student-search">
                     <input id="search" placeholder="Search by name...">
                     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                  </label>`;
header.insertAdjacentHTML('beforeend', searchbar);
const searchInput = document.querySelector('#search');
const searchButton = searchInput.nextElementSibling;
searchButton.addEventListener('click', () => {
  search(data);
});

/**
 * create and append 9 list items to ul in document
 * @param {array} list
 * @param {number} page
 */
function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  // reset list
  studentList.innerHTML = '';
  // validation for null lists
  if (list.length == 0) return false;
  // Add students to page
  for (let i = 0; i < list.length; i++) {
    const student = list[i];
    // check the student is in the page range
    if (i >= startIndex && i < endIndex) {
      let text = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${student.picture.large} alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>`;
      studentList.insertAdjacentHTML('beforeend', text);
    }
  }
}

/**
 * create list of buttons updating active selection
 * @param {array} list
 */
function addPagination(list) {
  const numberOfPages = Math.ceil(list.length / 9);
  // reset list
  linkList.innerHTML = '';
  // validation for null lists
  if (list.length == 0) return false;
  // Add buttons for each page
  for (let i = 0; i < numberOfPages; i++) {
    let li = `<li>
                  <button type="button">${i + 1}</button>
               </li>`;
    linkList.insertAdjacentHTML('beforeend', li);
  }
  // give active class to first button element
  linkList.firstElementChild.firstElementChild.className = 'active';
  linkList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const selectedPage = button.textContent;
      const listItems = linkList.children;
      for (let li of listItems) {
        // reset button elements by removing class
        li.firstElementChild.className = '';
      }
      // selected button becomes active
      button.className = 'active';
      showPage(data, selectedPage);
    }
  });
}

/**
 * search function to filter data for matching names
 * @param {array} list
 */
function search(list) {
  const searchText = searchInput.value.toLowerCase();
  const filtered = list.filter((student) => {
    const fullName = `${student.name.first.toLowerCase()} ${student.name.last.toLowerCase()}`;
    return fullName.match(searchText);
  });
  // reset message box
  messageBox.innerHTML = '';
  // check for no results
  if (filtered.length == 0) {
    messageBox.textContent = 'No results found';
  }
  showPage(filtered, 1);
  addPagination(filtered);
}

// Initialise the page
showPage(data, 1);
addPagination(data);
