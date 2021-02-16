/**
 * Treehouse Techdegree:
 * FSJS Project 2 - Data Pagination and Filtering
 */

/**
 * create and append 9 list items to ul in document
 * @param {array} list
 * @param {number} page
 */
function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const ul = document.querySelector('.student-list');
  ul.innerHTML = '';
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
      ul.insertAdjacentHTML('beforeend', text);
    }
  }
}

/**
 * create list of buttons updating active selection
 * @param {array} list
 */
function addPagination(list) {
  const numberOfPages = Math.ceil(list.length / 9);
  const ul = document.querySelector('.link-list');
  ul.innerHTML = '';
  for (let i = 0; i < numberOfPages; i++) {
    let li = `<li>
                  <button type="button">${i + 1}</button>
               </li>`;
    ul.insertAdjacentHTML('beforeend', li);
  }
  // give active class to first button element
  ul.firstElementChild.firstElementChild.className = 'active';
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const selectedPage = button.textContent;
      const listItems = ul.children;
      for (let li of listItems) {
        // select button element
        li.firstElementChild.className = '';
      }
      button.className = 'active';
      showPage(data, selectedPage);
    }
  });
}

showPage(data, 1);
addPagination(data);

/**
 * Add a search bar
 */
const header = document.querySelector('.header');
const searchbar = `<label for="search" class="student-search">
                     <input id="search" placeholder="Search by name...">
                     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                  </label>`;
header.insertAdjacentHTML('beforeend', searchbar);

// implement search
const searchInput = document.querySelector('#search');
const searchButton = searchInput.nextElementSibling;
searchButton.addEventListener('click', () => {
  search(data);
});

/**
 * search function to filter data for matching names
 * @param {array} list
 */
function search(list) {
  const searchText = searchInput.value;
  let filtered = list.filter((student) => {
    const fullName = `${student.name.first} ${student.name.last}`;
    return fullName.match(searchText);
  });
  // check for no results
  const page = document.querySelector('.page');
  if (filtered.length > 0) {
    // check for previous "no results" text and remove
    const noResultsElement = document.querySelector('.no-results');
    if (noResultsElement) page.removeChild(noResultsElement);
    showPage(filtered, 1);
    addPagination(filtered);
  } else {
    // clear lists
    const studentList = document.querySelector('.student-list');
    const linkList = document.querySelector('.link-list');
    studentList.innerHTML = '';
    linkList.innerHTML = '';
    // add "no results" message to page
    const noResultsText = `<div class="no-results">No results found</div>`;
    page.insertAdjacentHTML('beforeend', noResultsText);
  }
}
